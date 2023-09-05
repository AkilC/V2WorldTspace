import React, { useRef, useState, useContext, useEffect } from 'react';
import { Stars } from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { AudioStateContext } from '../tspace_components/contexts/AudioStateContext';
import { useSocket } from '../tspace_components/contexts/SocketContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DoubleSide } from 'three';
import ChatCylinder from '../tspace_components/components/ChatCylinder';

const Background = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  return null;
};

const Listen = ({ characterRef }) => {
  const world = useContext(WorldContext);
  const { room } = useSocket();
  const { audioState, setAudioState, isLocallyPaused, setIsLocallyPaused, shouldSyncImmediately, setShouldSyncImmediately } = useContext(AudioStateContext);
  const audioRef = useRef(null);

  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [awaitingSync, setAwaitingSync] = useState(false);


  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(process.env.PUBLIC_URL + '/assets/biggertheneverything.mp3');
      audioRef.current.loop = true;
      audioRef.current.addEventListener('loadedmetadata', () => {
        setAudioState(prevState => ({ ...prevState, duration: audioRef.current.duration }));
        setMetadataLoaded(true);
      });
      audioRef.current.load();
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    const handleLoop = () => {
      setLoopCount(prevCount => prevCount + 1);
      const audio = audioRef.current;
      room.send('audioUpdate', { audioState: { currentTime: 0, isPlaying: !audio.paused, loopCount: loopCount + 1 } });
    };
    
    audioRef.current.addEventListener('ended', handleLoop);
    
    return () => {
      audioRef.current.removeEventListener('ended', handleLoop);
    };
  }, [room, loopCount]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      setAudioState(prevState => ({ ...prevState, currentTime: audio.currentTime }));
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
  
    const audio = audioRef.current;
  
    // Check if the room (server) is available
    if (room) {
      // Existing code for syncing with the server
      if (shouldSyncImmediately) {
        // Skip updates when shouldSyncImmediately is true, as this is handled elsewhere
        return;
      }
  
      if (isLocallyPaused) {
        audio.pause();
      } else {
        if (audioState.currentTime > audio.currentTime) {
          audio.currentTime = audioState.currentTime;
        }
        audio.play();
      }
    } else {
      // If the room (server) is not available, play the audio locally
      if (!isLocallyPaused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audioState, isLocallyPaused, shouldSyncImmediately, room]);
  
  

  useEffect(() => {
    let syncInterval;
    if (room) {
      syncInterval = setInterval(() => {
        const audio = audioRef.current;
        room.send('audioUpdate', { audioState: { currentTime: audio.currentTime, isPlaying: !audio.paused, loopCount: loopCount } });
      }, 10000);
    }

    return () => {
      clearInterval(syncInterval);
    };
  }, [room, shouldSyncImmediately, loopCount]);

  useEffect(() => {
    if (shouldSyncImmediately && room) {
      const audio = audioRef.current;
      console.log(shouldSyncImmediately);
      room.send('audioUpdate', { audioState: { currentTime: audio.currentTime, isPlaying: !audio.paused, loopCount: loopCount } });
      setShouldSyncImmediately(false);
    }
  }, [shouldSyncImmediately, room, loopCount]);
  

  useEffect(() => {
    if (!room) return;
    console.log("sync:", shouldSyncImmediately)
  
    room.onMessage('audioUpdate', (message) => {
      if (metadataLoaded) {
        console.log("message.currentTime", message.currentTime, "audioRef.current.currentTime", audioRef.current.currentTime)
        if (message.currentTime > audioRef.current.currentTime) {
          audioRef.current.currentTime = message.currentTime + 0.2;
        } else if (shouldSyncImmediately) {
          audioRef.current.currentTime = message.currentTime -.2; // or some other offset value
          setShouldSyncImmediately(false);
        }
    
        if (awaitingSync) {  // Check the flag here
          audioRef.current.play();
          setAwaitingSync(false);  // Reset the flag
          console.log("sync:", shouldSyncImmediately)
        } else if (!shouldSyncImmediately) {
          message.isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
      }
    });
    
  }, [room, metadataLoaded, shouldSyncImmediately]);  // Add shouldSyncImmediately to dependency list
  
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  

  const pavillion = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/scenes/listenScene.glb');
  const pavillionMesh = pavillion.nodes.Cube;
  pavillionMesh.material.side = DoubleSide;

  return (
    <>
      <Stars />
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, -5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight
        castShadow
        position={[0, 2, 50]}
        intensity={1}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
        <planeBufferGeometry attach="geometry" args={[300, 300]} />
        <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh>
      <primitive
        object={pavillion.scene}
        receiveShadow
        position={[0, 0, 15]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      />
      <Background />
      <ChatCylinder x={-15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={-3} />
      <ChatCylinder x={-15} y={0} z={-3} />
      <ChatCylinder x={0} y={0} z={15} />
    </>
  );
};

export default Listen;
