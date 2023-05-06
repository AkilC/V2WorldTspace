const express = require('express');
const { Server } = require('colyseus');
const { monitor } = require('@colyseus/monitor');
const http = require('http');

const app = express();
const server = http.createServer(app);
const gameServer = new Server({ server });

// Define your room
const { MyRoom } = require('./MyRoom');
gameServer.define('my_room', MyRoom);

app.use('/colyseus', monitor());

gameServer.listen(3001);
console.log(`Colyseus server is listening on port 3001`);
