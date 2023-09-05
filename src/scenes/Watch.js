import React, { useRef, useState, useContext, useEffect } from 'react';
import { Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { VideoStateContext } from '../tspace_components/contexts/VideoStateContext';
import { DoubleSide, MeshBasicMaterial, PlaneGeometry, Mesh, VideoTexture } from 'three';
import { useSocket } from '../tspace_components/contexts/SocketContext';

const Background = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  return null;
};

const Watch = ({ characterRef }) => {
  const { room } = useSocket();
  const { videoState, setVideoState, isLocallyPaused, setIsLocallyPaused } = useContext(VideoStateContext);

  const videoRef = useRef(null);
  const [videoTexture, setVideoTexture] = useState(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [shouldSyncImmediately, setShouldSyncImmediately] = useState(false);


  useEffect(() => {
    if (room) {  // <-- Add this check
      room.onLeave(() => {
        setIsConnected(false);
      });
  
      room.onJoin(() => {
        setIsConnected(true);
      });
    }
  }, [room]);


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
      setMetadataLoaded(true);  // Set the flag here
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

  // This useEffect sets up the server sync and runs only once when the component mounts
  useEffect(() => {
    let syncInterval;
    if (isConnected && room) {
      syncInterval = setInterval(() => {
        const video = videoRef.current;
        console.log("Sending videoUpdate to server", { currentTime: video.currentTime, isPlaying: !video.paused });
        room.send('videoUpdate', { videoState: { currentTime: video.currentTime, isPlaying: !video.paused } });
      }, 10000);
  
      if (shouldSyncImmediately) {
        const video = videoRef.current;
        console.log("Immediate sync: Sending videoUpdate to server", { currentTime: video.currentTime, isPlaying: !video.paused });
        room.send('videoUpdate', { videoState: { currentTime: video.currentTime, isPlaying: !video.paused } });
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
  
    if (isLocallyPaused) {  // Add this check
      video.pause();
    } else {
      video.play();
      if (Math.abs(video.currentTime - videoState.currentTime) > tolerance) {
        video.currentTime = videoState.currentTime;
      }
    }
  }, [videoState, isLocallyPaused]);


  useEffect(() => {
    if (room) {  // <-- Add this check
      room.onMessage('videoUpdate', (message) => {
        console.log("Receiving videoUpdate from server", message);
        if (metadataLoaded) {  // Check the flag here
          setVideoState(prevState => ({ ...prevState, ...message, duration: prevState.duration }));
        }
      });
    }
  }, [room, metadataLoaded]);
  
  //cleanup
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const videoMaterial = videoTexture ? new MeshBasicMaterial({ map: videoTexture }) : null;
  const videoScreenGeometry = new PlaneGeometry(16, 9);

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
      <Background />
      {videoMaterial && (
        <mesh
          geometry={videoScreenGeometry}
          material={videoMaterial}
          position={[0, 7, 30]}
          rotation={[0, Math.PI, 0]}
          scale={[1.8, 1.8, 1.8]}
        />
      )}
    </>
  );
};

export default Watch;
