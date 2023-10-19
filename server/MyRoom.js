const { Room } = require('colyseus');
const jwt = require('jsonwebtoken');
const pool = require('./database');

const defaultPlayerData = {
  position: { x: 0, y: 0, z: 0 },
  rotation: 0,
  color: "#f5f5f5f",
  userId: null    // Default userId is set to null
};


class MyRoom extends Room {
  onCreate(options) {
    this.players = {};
    this.domain = options.domain;
    this.roomId = options.roomId;

    console.log('Room created for domain:', this.domain);

    this.videoStartTime = Date.now();
    this.audioStartTime = Date.now();

    this.video = {
      currentTime: 0,
      duration: null
    };

    this.audio = {
      currentTime: 0,
      duration: null
    };

    this.onMessage('playerUpdate', (client, message) => {
      this.players[client.sessionId] = {
          ...this.players[client.sessionId],
          ...message
      };
      this.broadcast('playerUpdate', { id: client.sessionId, ...message }, { except: client });
    });

    this.onMessage('readyForPlayerList', (client) => {
      console.log("Client ready for playerList", this.players);
      client.send('playerList', this.players);
   });

    this.onMessage('videoUpdate', (client, message) => {
      this.video.currentTime = this.calculateVideoCurrentTime();
      console.log("Updated server video state:", this.video);
      this.broadcast('videoUpdate', this.video);
    });

    this.onMessage('videoDuration', (client, message) => {
      this.video.duration = message.duration;
      console.log("Updated video duration on server:", this.video.duration);
    });

    this.onMessage('audioUpdate', (client, message) => {
      this.audio.currentTime = this.calculateAudioCurrentTime();
      console.log("Updated server audio state:", this.audio);
      this.broadcast('audioUpdate', this.audio);
    });
 
    this.onMessage('audioDuration', (client, message) => {
      this.audio.duration = message.duration;
      console.log("Updated audio duration on server:", this.audio.duration);
    });
  }

  calculateVideoCurrentTime() {
    if (this.video.duration === null) return 0;

    const elapsedMilliseconds = Date.now() - this.videoStartTime;
    let currentTime = (elapsedMilliseconds / 1000) % this.video.duration;
    return currentTime;
  }

  calculateAudioCurrentTime() {
    if (this.audio.duration === null) return 0;

    const elapsedMilliseconds = Date.now() - this.audioStartTime;
    let currentTime = (elapsedMilliseconds / 1000) % this.audio.duration;
    return currentTime;
  }

  async onJoin(client, options) {
      let userId = null;
      let userColor = null;

      const token = options.token;  // Assume the client sends the token as part of the options

      if (token) {
          try {
              const decoded = jwt.verify(token, 'your_jwt_secret');  // Use the same secret as in your Express server
              userId = decoded.id;

              // Fetch the user's color from the database
              userColor = await this.getUserColor(userId);
          } catch (error) {
              console.error("Error decoding the JWT token:", error);
          }
      }

      const playerData = {
          ...defaultPlayerData,
          color: userColor || defaultPlayerData.color,
          userId: userId
      };

      console.log("Broadcasting player join:", client.sessionId, playerData);
      this.players[client.sessionId] = playerData;
      this.broadcast('playerJoin', { id: client.sessionId, ...playerData });

      /* client.send('playerList', this.players);
      console.log("Player list:", this.players); */
      console.log("Sending initial video and audio states to new client");
      client.send('videoUpdate', this.video);
      client.send('audioUpdate', this.audio);
  }
  onLeave(client) {
    console.log('Client left:', client.id);
    delete this.players[client.sessionId];
    this.broadcast('playerLeave', client.sessionId);
  }

  async getUserColor(userId) {
    try {
      const userColor = await pool.query('SELECT color FROM avatar_attributes WHERE user_id = $1', [userId]);

      if (userColor.rows.length > 0) {
        return userColor.rows[0].color;
      } else {
        return null;  // Return null if no color set for this user
      }
    } catch (err) {
      console.error(err.message);
      return null;  // Return null on error
    }
  }
}

module.exports = { MyRoom };
