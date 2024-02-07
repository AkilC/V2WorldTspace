import React, { createContext, useContext, useState, useEffect } from 'react';

const PlayerPositionsContext = createContext();

export const PlayerPositionsProvider = ({ children }) => {
  const [localPlayerPosition, setLocalPlayerPosition] = useState({ x: 0, y: 0, z: 0 });
  const [otherPlayersPositions, setOtherPlayersPositions] = useState({});

  const updateLocalPlayerPosition = (position) => {
    setLocalPlayerPosition(position);
    //console.log(position);
  };
  
  const updateOtherPlayerPosition = (playerId, newPosition) => {
    setOtherPlayersPositions((prevPositions) => {
      const existingPosition = prevPositions[playerId];
      if (!existingPosition || JSON.stringify(existingPosition) !== JSON.stringify(newPosition)) {
        //console.log("Updated position for playerId:", playerId, "New Pos:", newPosition);
        return {
          ...prevPositions,
          [playerId]: newPosition,
        };
      }
      return prevPositions;
    });
  };  

  return (
    <PlayerPositionsContext.Provider value={{
      localPlayerPosition,
      otherPlayersPositions,
      updateLocalPlayerPosition,
      updateOtherPlayerPosition,
    }}>
      {children}
    </PlayerPositionsContext.Provider>
  );
};

export const usePlayerPositions = () => useContext(PlayerPositionsContext);