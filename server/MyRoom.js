// ✅
const { Room } = require('colyseus');
const defaultPlayerData = {
  position: { x: 0, y: 0, z: 0 },
  rotation: 0,
};

class MyRoom extends Room {
  onCreate(options) {
    this.players = {};
    this.domain = options.domain;

    console.log('Room created:', this.roomId);

    this.onMessage('playerUpdate', (client, message) => {
      /* console.log('Broadcasting player update:', client.sessionId, message); */
      this.players[client.sessionId] = message;
      this.broadcast('playerUpdate', { id: client.sessionId, ...message }, { except: client });
    });
  }
  

  onJoin(client) {
    console.log("Broadcasting player join:", client.sessionId, defaultPlayerData);
    this.players[client.sessionId] = defaultPlayerData;
    this.broadcast('playerJoin', { id: client.sessionId, ...defaultPlayerData });
  
    // Send the current list of players to the newly joined player
    client.send('playerList', this.players);
  }

  onLeave(client) {
    console.log('Client left:', client.id);
    delete this.players[client.sessionId];
    this.broadcast('playerLeave', client.sessionId);
  }
}

module.exports = { MyRoom };
