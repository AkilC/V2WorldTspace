const express = require('express');
const { Server } = require('colyseus');
const { monitor } = require('@colyseus/monitor');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = http.createServer(app);
const gameServer = new Server({ server });

// Define your room
const { MyRoom } = require('./MyRoom');

gameServer.define('my_room', MyRoom)
  .filterBy(['domain']);  // Add a matchmaking filter for the 'domain' attribute

app.use('/colyseus', monitor());

const PORT = process.env.PORT || 3001;
gameServer.listen(PORT, () => console.log(`Colyseus server is listening on port ${PORT}`));
