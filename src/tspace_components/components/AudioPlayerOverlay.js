import React, { useEffect, useState, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useAudioState } from '../contexts/AudioStateContext';
import { useSocket } from '../contexts/SocketContext';
import { AudioStateContext } from '../contexts/AudioStateContext';

const AudioPlayerOverlay = () => {
  const location = useLocation();
  const { room } = useSocket();
  const { audioState, setAudioState, isLocallyPaused, setIsLocallyPaused, awaitingSync, setShouldSyncImmediately, shouldSyncImmediately, setAwaitingSync } = useContext(AudioStateContext);

  const audioRef = useRef(null);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const { currentTime, duration } = audioState;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [smoothCurrentTime, setSmoothCurrentTime] = useState(currentTime); // Added for smooth progress bar update

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
    };
    audio.addEventListener('loadedmetadata', handleMetadataLoaded);
    return () => {
      audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
    };
  }, []);
  
  // New useEffect to handle sending duration once both metadata is loaded and room is available
  useEffect(() => {
    if (metadataLoaded && room) {
      console.log("Inside Room", audioRef.current.duration);
      room.send('audioDuration', { duration: audioRef.current.duration });
    }
  }, [metadataLoaded, room]);
  
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


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const updateSmoothCurrentTime = () => {
      setSmoothCurrentTime(prevTime => {
        const newTime = prevTime + (currentTime - prevTime) * 0.1;
        return newTime;
      });
      
      animationFrameId = requestAnimationFrame(updateSmoothCurrentTime);
    };
    
    updateSmoothCurrentTime();
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [currentTime]); // Added this effect for smooth progress bar update

  if (location.pathname !== '/Listen') {
    return null;
  }

  const overlayStyle = isMobile
    ? { right: '16px', left: 'auto', bottom: '42px' }
    : { left: '50%', bottom: '24px', transform: 'translateX(-50%)' };

  const progressBarWidth = isMobile ? '84px' : '128px';

  const playIconPath = `${process.env.PUBLIC_URL}/assets/playIcon.svg`;
  const pauseIconPath = `${process.env.PUBLIC_URL}/assets/pauseIcon.svg`;

  const initializeWebAudioAPI = () => {
    if (window.AudioContext || window.webkitAudioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      if (context.state === 'suspended') {
        context.resume();
      }
    }
  };


  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      borderRadius: '12px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1000,
      ...overlayStyle
    }}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/V2Artwork.png`}
        alt="Audio Thumbnail"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '16px',
          borderRadius: '8px'
        }}
      />
      <div>
        <div style={{ color: 'white', marginBottom: '8px' }}>Audio Title</div>
        <div style={{ color: 'white' }}>
          <div style={{
            width: progressBarWidth,
            height: '12px',
            backgroundColor: '#ccc',
            borderRadius: '6px',
            position: 'relative'
          }}>
            <div style={{
              width: `${(smoothCurrentTime / duration) * 100}%`,
              height: '100%',
              backgroundColor: '#6a6a6a',
              borderRadius: '6px'
            }}></div>
          </div>
        </div>
      </div>
      <button
        style={{
          marginLeft: '16px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          width: '32px',
          height: '32px',
        }}
        onClick={() => {
            // Initialize Web Audio API
            initializeWebAudioAPI();

            setIsLocallyPaused(!isLocallyPaused);
            if (isLocallyPaused) {
              setShouldSyncImmediately(true);
              console.log("Sync Boolean", setShouldSyncImmediately);
              setAwaitingSync(true);  // Set the flag here
            }
        }}
      >
        <img
          src={isLocallyPaused ? playIconPath : pauseIconPath}
          alt={isLocallyPaused ? 'Play' : 'Pause'}
          style={{ width: '32px', height: '32px' }}
        />
      </button>
    </div>
  );
};

export default AudioPlayerOverlay;