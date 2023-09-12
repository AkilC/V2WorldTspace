const { Room } = require('colyseus');

const defaultPlayerData = {
  position: { x: 0, y: 0, z: 0 },
  rotation: 0,
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
      this.players[client.sessionId] = message;
      this.broadcast('playerUpdate', { id: client.sessionId, ...message }, { except: client });
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

  onJoin(client) {
    console.log("Broadcasting player join:", client.sessionId, defaultPlayerData);
    this.players[client.sessionId] = defaultPlayerData;
    this.broadcast('playerJoin', { id: client.sessionId, ...defaultPlayerData });

    client.send('playerList', this.players);
    console.log("Sending initial video and audio states to new client");
    client.send('videoUpdate', this.video);
    client.send('audioUpdate', this.audio);
  }

  onLeave(client) {
    console.log('Client left:', client.id);
    delete this.players[client.sessionId];
    this.broadcast('playerLeave', client.sessionId);
  }
}

module.exports = { MyRoom };
