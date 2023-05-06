// ✅
import { createContext, useContext, useState, useEffect } from 'react';
import { Client } from 'colyseus.js';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const newClient = new Client('ws://localhost:3001');
    setClient(newClient);
  }, []);

  useEffect(() => {
    const joinRoom = async () => {
      if (!client) return;
      const newRoom = await client.joinOrCreate('my_room');
      setRoom(newRoom);
    };

    joinRoom();
  }, [client]);

  return <SocketContext.Provider value={{ client, room }}>{children}</SocketContext.Provider>;
};
