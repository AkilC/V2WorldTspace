import React, { createContext, useContext, useState } from 'react';

export const VideoStateContext = createContext();

export const useVideoState = () => {
  return useContext(VideoStateContext);
};

export const VideoStateProvider = ({ children }) => {
    const [videoState, setVideoState] = useState({ currentTime: 0, duration: 0, isPlaying: true });
    const [isLocallyPaused, setIsLocallyPaused] = useState(false);  // New state
    const [shouldSyncImmediately, setShouldSyncImmediately] = useState(false);

    const value = {
      videoState,
      setVideoState,
      isLocallyPaused,  // New
      setIsLocallyPaused,  // New
      shouldSyncImmediately,  // New
      setShouldSyncImmediately  // New
    };
  
    return (
      <VideoStateContext.Provider value={value}>
        {children}
      </VideoStateContext.Provider>
    );
  };
  
