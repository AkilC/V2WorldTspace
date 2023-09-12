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
  const { room } = useSocket();
  const { audioState, setAudioState, isLocallyPaused, setIsLocallyPaused, awaitingSync, setShouldSyncImmediately, shouldSyncImmediately, setAwaitingSync } = useContext(AudioStateContext);

  const audioRef = useRef(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  // 1. Setup audioRef
useEffect(() => {
  if (!audioRef.current) {
    audioRef.current = new Audio(process.env.PUBLIC_URL + '/assets/biggertheneverything.mp3');
    audioRef.current.loop = true;
    audioRef.current.load();
  }
}, []);


useEffect(() => {
  if (!audioRef.current) return;

  const audio = audioRef.current;
  const handleMetadataLoaded = () => {
    console.log('Inside loadedmetadata:', audioRef.current.duration);
    setAudioState(prevState => ({ ...prevState, duration: audio.duration }));
    setMetadataLoaded(true);

    if (room) {
      room.send('audioDuration', { duration: audio.duration });
    }
  };
  audio.addEventListener('loadedmetadata', handleMetadataLoaded);
  return () => {
    audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
  };
}, []);

  // 2. Set up the message handlers
  useEffect(() => {
    if (room) {
      room.onMessage('audioUpdate', (message) => {
        console.log("Receiving audioUpdate from server", message);
        if (metadataLoaded) {
          setAudioState(prevState => ({ ...prevState, ...message, duration: prevState.duration }));
          if (awaitingSync) {
            audioRef.current.play();
            setAwaitingSync(false);
          }
        }
      });
    }
  }, [room, metadataLoaded]);

  // 3. Setup join/leave handlers
  useEffect(() => {
    if (room) {
      room.onLeave(() => {
        setIsConnected(false);
      });
      room.onJoin(() => {
        setIsConnected(true);
        setShouldSyncImmediately(true);
      });
    }
  }, [room]);

  useEffect(() => {
    if (!audioRef.current) return;
    const localTimeUpdateInterval = setInterval(() => {
      setAudioState(prevState => ({ ...prevState, currentTime: audioRef.current.currentTime }));
    }, 1000);
    return () => {
      clearInterval(localTimeUpdateInterval);
    };
  }, []);

  // Server sync setup
  useEffect(() => {
    let syncInterval;
    if (isConnected && room) {
      syncInterval = setInterval(() => {
        const audio = audioRef.current;
        console.log("Sending audioUpdate to server", { currentTime: audio.currentTime });
        room.send('audioUpdate', { audioState: { currentTime: audio.currentTime } });
      }, 10000);
      if (shouldSyncImmediately) {
        console.log("Sync Running...");
        const audio = audioRef.current;
        console.log("Immediate sync: Sending audioUpdate to server", { currentTime: audio.currentTime });
        room.send('audioUpdate', { audioState: { currentTime: audio.currentTime } });
        setShouldSyncImmediately(false);
      }
    }
    return () => {
      clearInterval(syncInterval);
    };
  }, [isConnected, room, shouldSyncImmediately]);

  useEffect(() => {
    if (!audioRef.current) return;
    const tolerance = 0.5;
    if (isLocallyPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      if (Math.abs(audioRef.current.currentTime - audioState.currentTime) > tolerance) {
        audioRef.current.currentTime = audioState.currentTime;
      }
    }
  }, [audioState, isLocallyPaused]);

  // Cleanup
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
      {/* <ChatCylinder x={-15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={-3} />
      <ChatCylinder x={-15} y={0} z={-3} />
      <ChatCylinder x={0} y={0} z={15} /> */}
    </>
  );
};

export default Listen;
