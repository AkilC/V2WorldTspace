import React, { useRef, useState, useContext, useEffect } from 'react';
import { Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { VideoStateContext } from '../tspace_components/contexts/VideoStateContext';
import { DoubleSide, MeshBasicMaterial, PlaneGeometry, Mesh, VideoTexture } from 'three';
import { useSocket } from '../tspace_components/contexts/SocketContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Background = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  return null;
};

const Watch = ({ characterRef }) => {
  const { room } = useSocket();
  const { videoState, setVideoState, isLocallyPaused, setIsLocallyPaused, awaitingSync, setShouldSyncImmediately, shouldSyncImmediately, setAwaitingSync } = useContext(VideoStateContext);

  const videoRef = useRef(null);
  const [videoTexture, setVideoTexture] = useState(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  // 1. Setup videoRef and associated video events
  useEffect(() => {
    if (!videoRef.current) {
      videoRef.current = document.createElement('video');
      videoRef.current.src = process.env.PUBLIC_URL + '/assets/v2Video.mp4';
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
    }
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const handleMetadataLoaded = () => {
      setVideoState(prevState => ({ ...prevState, duration: video.duration }));
      setMetadataLoaded(true);

      if (room) {
        room.send('videoDuration', { duration: video.duration });
      }
    };
    video.addEventListener('loadedmetadata', handleMetadataLoaded);
    return () => {
      video.removeEventListener('loadedmetadata', handleMetadataLoaded);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      setVideoTexture(new VideoTexture(videoRef.current));
    }
  }, [videoRef.current]);

  // 2. Set up the message handlers
  useEffect(() => {
    if (room) {
      room.onMessage('videoUpdate', (message) => {
        console.log("Receiving videoUpdate from server", message);
        if (metadataLoaded) {
          setVideoState(prevState => ({ ...prevState, ...message, duration: prevState.duration }));
          if (awaitingSync) {
            videoRef.current.play();
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
    if (!videoRef.current) return;
    const video = videoRef.current;
    const localTimeUpdateInterval = setInterval(() => {
      setVideoState(prevState => ({ ...prevState, currentTime: video.currentTime }));
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
        const video = videoRef.current;
        console.log("Sending videoUpdate to server", { currentTime: video.currentTime });
        room.send('videoUpdate', { videoState: { currentTime: video.currentTime } });
      }, 10000);
      if (shouldSyncImmediately) {
        console.log("Sync Running...");
        const video = videoRef.current;
        console.log("Immediate sync: Sending videoUpdate to server", { currentTime: video.currentTime });
        room.send('videoUpdate', { videoState: { currentTime: video.currentTime } });
        setShouldSyncImmediately(false);
      }
    }
    return () => {
      clearInterval(syncInterval);
    };
  }, [isConnected, room, shouldSyncImmediately]);

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const tolerance = 0.5;
    if (isLocallyPaused) {
      video.pause();
    } else {
      video.play();
      if (Math.abs(video.currentTime - videoState.currentTime) > tolerance) {
        video.currentTime = videoState.currentTime;
      }
    }
  }, [videoState, isLocallyPaused]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const [myScene, setMyScene] = useState(null);

  useEffect(() => {
    console.log('TestScene mounted');
  
    const loader = new GLTFLoader();
    loader.load(`${process.env.PUBLIC_URL}/assets/scenes/v2environment.glb`, (gltf) => {
      setMyScene(gltf.scene);
    });
  
    return () => {
      console.log('TestScene unmounted');
    };
  }, []);

  const videoMaterial = videoTexture ? new MeshBasicMaterial({ map: videoTexture }) : null;
  const videoScreenGeometry = new PlaneGeometry(16, 9);

  return (
    <>
      {myScene && <primitive object={myScene} scale={[0.5, 0.5, 0.5]}/>}
      <Stars />
      <ambientLight intensity={0.3} />
      {/* <directionalLight
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
      /> */}
      {/* <directionalLight
        castShadow
        position={[0, 2, 50]}
        intensity={1}
      /> */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
        <planeBufferGeometry attach="geometry" args={[300, 300]} />
        <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh>
      <Background />
      {videoMaterial && (
        <mesh
          geometry={videoScreenGeometry}
          material={videoMaterial}
          position={[0, 8, 30]}
          rotation={[0, Math.PI, 0]}
          scale={[1.8, 1.8, 1.8]}
        />
      )}
    </>
  );
};

export default Watch;
