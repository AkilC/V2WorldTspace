import { createContext, useContext, useState, useEffect } from 'react';
import { Room, createLocalAudioTrack, VideoPresets, RoomEvent } from 'livekit-client';
import { usePlayerPositions } from './PlayerPositionsProvider';
import { useSocket } from '../contexts/SocketContext';
import { AudioListener, PositionalAudio } from 'three';

export const LiveKitContext = createContext();

export const useLiveKit = () => useContext(LiveKitContext);

export const LiveKitProvider = ({ children }) => {
  const [lkRoom, setLkRoom] = useState(null);
  const [error, setError] = useState(null);
  const { room } = useSocket();
  const [audioListener, setAudioListener] = useState(new AudioListener());
  const [positionalAudios, setPositionalAudios] = useState({});

  useEffect(() => {
    let connected = false;
    const connectToLiveKit = async () => {
      if (!room || connected) return; // Check if room is initialized and connection hasn't been made yet
      connected = true;
      // Assuming room.sessionId is available and you want to use it directly
      // without waiting for a nearby player to be set.
      const localParticipantName = room ? room.sessionId : "defaultParticipantName";
      console.log(localParticipantName);
      const combinedName = "v2WorldRoom"; // Example static combined name
      console.log("Combined name", combinedName);
      try {
        const token = await fetchLiveKitToken(combinedName, localParticipantName);
        console.log("Received token", token);
        const liveKitURL = 'wss://tworlds-wriqgndu.livekit.cloud';
  
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
            console.log(`Track subscribed for participant: ${participant.identity}`);
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
  
    const handleClick = () => {
      connectToLiveKit();
      // Optionally remove the listener if you don't need it anymore
      document.removeEventListener('click', handleClick);
    };
  
    // Add click listener when the component mounts
    document.addEventListener('click', handleClick);
  
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [room]); // Empty dependency array means this effect runs only once on component mount

  const handleAudioTrack = (track, participant) => {
    // Assuming you have access to the local session ID here, replace `localSessionId` with the actual way you retrieve it
    const localSessionId = room.sessionId;
  
    if(participant.identity !== localSessionId) { // Only proceed if the participant is not the local player
      const positionalAudio = createPositionalAudio(track, audioListener);
      console.log(`Creating PositionalAudio for participant: ${participant.identity}`);
      setPositionalAudios((current) => {
        console.log("Current positionalAudios state before update:", current);
        console.log("New positionalAudio to add:", {[participant.identity]: positionalAudio});
        
        return {
            ...current,
            [participant.identity]: positionalAudio,
        };
      });
    } else {
      console.log(`Skipping PositionalAudio for local participant: ${participant.identity}`);
    }
  };
  

  const createPositionalAudio = (audioTrack, listener) => {
    const audioEl = new Audio();
    audioEl.srcObject = audioTrack.mediaStream;
    const mediaStreamSource = listener.context.createMediaStreamSource(audioEl.srcObject);
    const positionalAudio = new PositionalAudio(listener);
    positionalAudio.setNodeSource(mediaStreamSource);
    audioEl.onloadedmetadata = () => {
      console.log(`Audio metadata loaded, duration: ${audioEl.duration}`);
    };
    /* audioEl.play().then(() => {
      console.log("Playback started for audio track");
    }).catch(error => {
      console.log("Playback failed to start for audio track", error);
    }); */
    return positionalAudio;
  };
  
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
    <LiveKitContext.Provider value={{ lkRoom, error, audioListener, positionalAudios }}>{children}</LiveKitContext.Provider>
  );
};
