import React, { useEffect, useState } from 'react';
import { useSocket } from '../contexts/SocketContext';
import OtherPlayer from './OtherPlayer';
import Character from './Character';
import { Box } from '@react-three/drei';
import * as cannon from 'cannon-es';
import { usePlayerPositions } from '../contexts/PlayerPositionsProvider';

const Multiplayer = () => {
  const { room } = useSocket();
  const [players, setPlayers] = useState({});
  const { updateOtherPlayerPosition } = usePlayerPositions();

  useEffect(() => {
    if (!room) return;

    room.onMessage('playerJoin', (playerData) => {
        console.log('Player join:', playerData);
        setPlayers((players) => ({ ...players, [playerData.id]: playerData }));
      });

    room.onMessage('playerList', (playerList) => {
      console.log('Received playerList:', playerList);
      setPlayers(playerList);
    });

    room.onMessage('playerUpdate', (playerData) => {
      updateOtherPlayerPosition(playerData.id, playerData.position);
      setPlayers((prevPlayers) => {

        // Check if the incoming data is different from the current state
        if (JSON.stringify(prevPlayers[playerData.id]) !== JSON.stringify(playerData)) {
          return {
            ...prevPlayers,
            [playerData.id]: {
              ...prevPlayers[playerData.id],
              ...playerData
            }
          };
        }
        // If no changes, return the previous state to avoid re-render
        return prevPlayers;
      });
      /* console.log("Received playerUpdate for:", playerData.id, playerData); */
    });


    room.onMessage('playerLeave', (playerId) => {
      setPlayers((players) => {
        console.log('Player leave:', playerId);
        const newPlayers = { ...players };
        delete newPlayers[playerId];
        return newPlayers;
      });
    });

    room.send('readyForPlayerList');

  }, [room]);

  return (
    <>
        {Object.entries(players)
        .filter(([, playerData]) => playerData.position !== undefined && playerData.rotation !== undefined)
        .map(([id, playerData]) => {
            const receivedRotationAngle = playerData.rotation;
            const remoteCharacterQuaternion = new cannon.Quaternion();
            remoteCharacterQuaternion.setFromAxisAngle(new cannon.Vec3(0, 1, 0), receivedRotationAngle);

            const interpolatedPosition = [
                playerData.position.x * 0.98,
                playerData.position.y * 0.98,
                playerData.position.z * 0.98,
            ];

            
            return (
                <OtherPlayer
                  key={id}
                  position={interpolatedPosition}
                  quaternion={remoteCharacterQuaternion}
                  animation={playerData.animation}
                  color={playerData.color || "#5F5F5F"}
                />
              );
        })}
    </>
  );
};

export default Multiplayer;
