import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.success) {
        setMessage('Login successful!');

        // Storing the token in local storage
        localStorage.setItem('token', response.data.token);
        // You can now redirect the user or update the UI state
      }
    } catch (error) {
      setMessage(error.response.data.error || 'Login failed.');
    }
  };

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
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
  
};

export default Login;