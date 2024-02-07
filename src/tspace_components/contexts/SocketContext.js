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
    /* const endpoint = process.env.REACT_APP_COLYSEUS_SERVER_URL || 'ws://localhost:3001'; */
    const endpoint = 'ws://localhost:3001';
    const newClient = new Client(endpoint);
    setClient(newClient);
  }, []);

  useEffect(() => {
    const joinOrCreateRoom = async () => {
      if (!client) return;
  
      const domain = window.location.hostname;
      const token = localStorage.getItem('token');  // Fetch the JWT token from localStorage
  
      try {
        const room = await client.joinOrCreate('my_room', { domain, token });  // Send the JWT token here
        setRoom(room);
        console.log("Local session ID:", room.sessionId); // Log or store the session ID
      } catch (error) {
        console.error(error);
      }
    };
  
    joinOrCreateRoom();
  }, [client]);

  return <SocketContext.Provider value={{ client, room }}>{children}</SocketContext.Provider>;
};