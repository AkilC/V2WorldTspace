import React, { createContext, useState } from 'react';

export const UIOverlayContext = createContext();

export const UIOverlayContextProvider = ({ children }) => {
    const [isUIOpen, setUIOpen] = useState(false);
  
    const openUI = () => {
      console.log('openUI called');
      setUIOpen(true);
    };
    const closeUI = () => {
      console.log('closeUI called');
      setUIOpen(false);
    };
  
    console.log('UIOverlayContextProvider render, isUIOpen:', isUIOpen);
  
    return (
      <UIOverlayContext.Provider value={{ isUIOpen, openUI, closeUI }}>
        {children}
      </UIOverlayContext.Provider>
    );
  };
  
