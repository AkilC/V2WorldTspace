import { createContext, useContext, useState, useEffect } from 'react';
import { Room, createLocalAudioTrack, VideoPresets, RoomEvent } from 'livekit-client';
import { usePlayerPositions } from './PlayerPositionsProvider';
import { useSocket } from '../contexts/SocketContext';

const LiveKitContext = createContext();

export const useLiveKit = () => useContext(LiveKitContext);

export const LiveKitProvider = ({ children }) => {
  const [lkRoom, setLkRoom] = useState(null);
  const [error, setError] = useState(null);
  const [nearbyPlayer, setNearbyPlayer] = useState(null);
  const { room } = useSocket();

  const { localPlayerPosition, otherPlayersPositions } = usePlayerPositions();

  useEffect(() => {
    const checkProximityAndEnableVoiceChat = () => {
      Object.entries(otherPlayersPositions).forEach(([playerId, position]) => {
        const distance = Math.sqrt(
          Math.pow(position.x - localPlayerPosition.x, 2) +
          Math.pow(position.y - localPlayerPosition.y, 2) +
          Math.pow(position.z - localPlayerPosition.z, 2)
        );
        if (distance < 5) {
          console.log(`Player ${playerId} is close to the local player.`);
          if (!nearbyPlayer) {
            setNearbyPlayer(playerId);
          }
        }
      });
    };

    const intervalId = setInterval(checkProximityAndEnableVoiceChat, 1000);
    return () => clearInterval(intervalId);
  }, [localPlayerPosition, otherPlayersPositions, nearbyPlayer]);

  useEffect(() => {
    if (!room) return;
    if (nearbyPlayer) {
      const connectToLiveKit = async () => {
        const localParticipantName = room.sessionId;
        console.log(localParticipantName);
        const combinedName = combineParticipantNames(localParticipantName, nearbyPlayer);
        console.log("Combined name", combinedName);
        const token = await fetchLiveKitToken(combinedName, localParticipantName);
        console.log("Receceived token", token);
        const liveKitURL = 'wss://tworlds-wriqgndu.livekit.cloud';

        try {
          const roomInstance = new Room({
            videoCaptureDefaults: {
              resolution: VideoPresets.h720.resolution,
            },
          });
          await roomInstance.connect(liveKitURL, token);
          console.log("Room instance", roomInstance);
          roomInstance
            .on(RoomEvent.ParticipantConnected, participant => console.log(`Participant connected: ${participant.identity}`))
            .on(RoomEvent.ParticipantDisconnected, participant => console.log(`Participant disconnected: ${participant.identity}`))
            .on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
              if (track.kind === 'audio') {
                handleAudioTrack(track, participant);
              }
            })
            .on(RoomEvent.ActiveSpeakersChanged, speakers => console.log('Active speakers:', speakers.map(s => s.identity)));

          const localAudioTrack = await createLocalAudioTrack();
          await roomInstance.localParticipant.publishTrack(localAudioTrack);
          setLkRoom(roomInstance);
        } catch (error) {
          console.error('Error connecting to LiveKit:', error);
          setError(error);
        }
      };

      connectToLiveKit();
    }
  }, [nearbyPlayer]);

  function combineParticipantNames(name1, name2) {
    return [name1, name2].sort().join('_');
  }

  function handleAudioTrack(track, participant) {
    const audioElement = document.createElement('audio');
    audioElement.srcObject = track.mediaStream;
    audioElement.autoplay = true;
    audioElement.play();
    console.log(`Audio track received and playing for participant: ${participant.identity}`);
  }

  async function fetchLiveKitToken(roomName, localParticipantName) {
    const response = await fetch(`http://localhost:3002/livekit-token?roomName=${roomName}&participantName=${localParticipantName}`);
    if (!response.ok) {
      throw new Error(`Error fetching LiveKit token: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Livekit token", data);
    return data.token;
  }

  return (
    <LiveKitContext.Provider value={{ lkRoom, error }}>{children}</LiveKitContext.Provider>
  );
};
