// AvatarContext.js
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarColor, setAvatarColor] = useState("#5F5F5F");

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/getAvatarColor', {
          headers: {
            'x-auth-token': token
          }
        });
        if (response.data.success) {
          setAvatarColor(response.data.color);
        }
      } catch (err) {
        console.error('Failed to fetch avatar color.', err);
      }
    };
  
    fetchColor();
  }, []);

  return (
    <AvatarContext.Provider value={{ avatarColor, setAvatarColor }}>
      {children}
    </AvatarContext.Provider>
  );
};
