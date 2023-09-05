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

    this.video = {
      currentTime: 0,
      isPlaying: false,
    };

    this.audio = {
      currentTime: 0,
      isPlaying: false,
      loopCount: 0
    };

    this.onMessage('playerUpdate', (client, message) => {
      this.players[client.sessionId] = message;
      this.broadcast('playerUpdate', { id: client.sessionId, ...message }, { except: client });
    });
    
    this.onMessage('videoUpdate', (client, message) => {
      if (message.videoState.isPlaying) {
        this.video = message.videoState;
      }
      console.log("Updated server video state:", this.video);
      this.broadcast('videoUpdate', this.video);
    });

    this.onMessage('audioUpdate', (client, message) => {
    if (message.audioState.loopCount > this.audio.loopCount || 
        (message.audioState.loopCount === this.audio.loopCount && 
         message.audioState.currentTime > this.audio.currentTime)) {
      this.audio = message.audioState;
    }
    console.log("Updated server audio state:", this.audio);
    this.broadcast('audioUpdate', this.audio);
  });
  }

  onJoin(client) {
    console.log("Broadcasting player join:", client.sessionId, defaultPlayerData);
    this.players[client.sessionId] = defaultPlayerData;
    this.broadcast('playerJoin', { id: client.sessionId, ...defaultPlayerData });

    client.send('playerList', this.players);
    console.log("Sending initial video state to new client", this.video);
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
