import React, { createContext, useContext, useState } from 'react';

export const AudioStateContext = createContext();

export const useAudioState = () => {
  return useContext(AudioStateContext);
};

export const AudioStateProvider = ({ children }) => {
  const [audioState, setAudioState] = useState({ currentTime: 0, duration: 0, isPlaying: true });
  const [isLocallyPaused, setIsLocallyPaused] = useState(false);
  const [shouldSyncImmediately, setShouldSyncImmediately] = useState(false);
  const [awaitingSync, setAwaitingSync] = useState(false); // New state variable

  const value = {
    audioState,
    setAudioState,
    isLocallyPaused,
    setIsLocallyPaused,
    shouldSyncImmediately,
    setShouldSyncImmediately,
    awaitingSync, // Include new state variable here
    setAwaitingSync  // Include new setter here
  };

  return (
    <AudioStateContext.Provider value={value}>
      {children}
    </AudioStateContext.Provider>
  );
};
