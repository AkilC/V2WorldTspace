// Working v0
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useVideoState } from '../contexts/VideoStateContext';

const VideoPlayerOverlay = () => {
  const location = useLocation();
  const { videoState, isLocallyPaused, setIsLocallyPaused, setShouldSyncImmediately, awaitingSync, setAwaitingSync } = useVideoState();
  const { currentTime, duration } = videoState;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [smoothCurrentTime, setSmoothCurrentTime] = useState(currentTime);

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
  }, [currentTime]);

  const overlayStyle = isMobile
    ? { right: '16px', left: 'auto', bottom: '42px' }
    : { left: '50%', bottom: '24px', transform: 'translateX(-50%)' };

  const progressBarWidth = isMobile ? '84px' : '128px';

  if (location.pathname !== '/Watch') {
    return null;
  }

  const playIconPath = `${process.env.PUBLIC_URL}/assets/playIcon.svg`;
  const pauseIconPath = `${process.env.PUBLIC_URL}/assets/pauseIcon.svg`;

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
        alt="Video Thumbnail"
        style={{
          width: '50px',
          height: '50px',
          marginRight: '16px',
          borderRadius: '8px'
        }}
      />
      <div>
        <div style={{ color: 'white', marginBottom: '8px' }}>The V2 Vlog</div>
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

export default VideoPlayerOverlay;
