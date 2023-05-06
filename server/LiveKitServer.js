// index.js

const express = require('express');
const http = require('http');
const { generateToken } = require('./liveKitTokens');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Set up CORS for the server
const corsOptions = {
  origin: 'http://localhost:3000', // Replace this with the URL of your React app
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/livekit-token', (req, res) => {
  const roomName = 'your-room-name';
  const participantName = req.query.participantName;

  if (!participantName) {
    res.status(400).send('participantName is required');
    return;
  }

  const token = generateToken(roomName, participantName);
  res.json({ token });
});

server.listen(3002);
console.log(`LiveKit server is listening on port 3002`);
