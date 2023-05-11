const express = require('express');
const { Server } = require('colyseus');
const { monitor } = require('@colyseus/monitor');
const http = require('http');

const app = express();
const server = http.createServer(app);
const gameServer = new Server({ server });

// Define your room
const { MyRoom } = require('./MyRoom');

const requestJoin = (options, isNew) => {
  return (room) => {
    return room.domain === options.domain;
  };
};

gameServer.define('my_room', MyRoom)
  .requestJoin(requestJoin);

app.use('/colyseus', monitor());

const PORT = process.env.PORT || 3001;
gameServer.listen(PORT, () => console.log(`Colyseus server is listening on port ${PORT}`));
