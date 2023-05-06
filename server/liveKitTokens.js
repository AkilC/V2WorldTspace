// livekitTokens.js

const { AccessToken } = require('livekit-server-sdk');

function generateToken(roomName, participantName) {
  const apiKey = 'APIAH4ou733ViXb';
  const apiSecret = 'BvCExXG7Geoy5cHJPk3xOBTe5Fex9o52PSxvjJtQ5uWA';

  const at = new AccessToken(apiKey, apiSecret, {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return at.toJwt();
}

module.exports = {
  generateToken,
};
