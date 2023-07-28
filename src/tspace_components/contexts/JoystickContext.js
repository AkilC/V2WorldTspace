// JoystickDataContext.js
import React, { createContext, useState } from 'react';

export const JoystickDataContext = createContext({
  angle: 0,
  force: 0
});

export const JoystickDataProvider = ({ children }) => {
  const [joystickData, setJoystickData] = useState(null);
  return (
    <JoystickDataContext.Provider value={joystickData}>
      {children}
    </JoystickDataContext.Provider>
  );
};

// JoystickSetContext.js

export const JoystickSetContext = createContext(null);

export const JoystickSetProvider = ({ children }) => {
  const [joystickData, setJoystickData] = useState(null);
  const handleJoystickMove = (data) => {
    if (data === null) {
      setJoystickData(null);
    } else {
      const angle = data.angle.radian;
      const force = data.force;
      setJoystickData({ angle, force });
    }
  };
  return (
    <JoystickSetContext.Provider value={handleJoystickMove}>
      {children}
    </JoystickSetContext.Provider>
  );
};
