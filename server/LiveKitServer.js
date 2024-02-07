const express = require('express');
const http = require('http');
const { generateToken } = require('./liveKitTokens');
const cors = require('cors');
const { RoomServiceClient } = require('livekit-server-sdk');

const app = express();
const server = http.createServer(app);

// Initialize LiveKit server client with your server details
const client = new RoomServiceClient('wss://tworlds-wriqgndu.livekit.cloud', 'APIAH4ou733ViXb', 'BvCExXG7Geoy5cHJPk3xOBTe5Fex9o52PSxvjJtQ5uWA');

app.use(cors({
  origin: 'http://localhost:3000', // Adjust according to your client app's URL
  optionsSuccessStatus: 200
}));

async function ensureRoomExists(roomName) {
  try {
    await client.createRoom({ name: roomName });
    console.log(`Room ${roomName} created`);
  } catch (error) {
    if (error.code !== 'room_already_exists') {
      console.error(`Failed to create room: ${error}`);
      throw error;
    }
    console.log(`Room ${roomName} already exists`);
  }
}

app.get('/livekit-token', async (req, res) => {
  const participantName = req.query.participantName;
  const roomName = req.query.roomName
  if (!participantName) {
    return res.status(400).send('Participant name is required');
  }

  try {
    await ensureRoomExists(roomName);
    const token = generateToken(roomName, participantName);
    res.json({ token });
  } catch (error) {
    res.status(500).send(`Error in room management: ${error.message}`);
  }
});

const PORT = 3002;
server.listen(PORT, () => console.log(`LiveKit server is listening on port ${PORT}`));
