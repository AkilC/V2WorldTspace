import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AvatarContext } from '../contexts/AvatarContext';  // Adjust the path accordingly

const Profile = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { avatarColor, setAvatarColor } = useContext(AvatarContext);  // <-- Use the context here

  const handleColorChange = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3001/setAvatarColor', { color: avatarColor }, { // <-- Use avatarColor here
        headers: {
          'x-auth-token': token
        }
      });
      alert('Color updated successfully!');
    } catch (err) {
      setError('Failed to set avatar color.');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            'x-auth-token': token
          }
        });
        setEmail(response.data.email);
      } catch (err) {
        setError('Failed to fetch profile.');
      }
    };

    fetchProfile();
  }, []);

  const formStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.7)',  // semi-transparent black background
    zIndex: 10000
  };

  const innerStyle = {
    padding: '20px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div style={formStyle}>
      <div style={innerStyle}>
        <h2>Your Profile</h2>
        {email && <p>Email: {email}</p>}
        <input type="color" value={avatarColor} onChange={(e) => setAvatarColor(e.target.value)} />
        <button onClick={handleColorChange}>Set Avatar Color</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Profile;
