import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav3D = () => {
  const navItems = ['Watch', 'Listen', 'Talk', 'Shop'];

  const navigate = useNavigate(); // <- useNavigate hook from react-router-dom
  const navigateTo = (path) => {
    navigate(path); // <- Use navigate instead of history.push
  };

  return (
    <div style={styles.nav}>
      <img onClick={() => navigateTo(`/`)} style={styles.logo} src={process.env.PUBLIC_URL + '/assets/V2Logo-02.png'} alt="Logo" /> {/* Logo Image */}
      {navItems.map((item, index) => (
        <div 
          key={index} 
          style={styles.navItem}
          onClick={() => navigateTo(`/${item}`)}
          >
          {item}
        </div>
      ))}
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '28px 0',
  },
  navItem: {
    margin: '0 40px', // Increase space between items
    fontFamily: 'Helvetica, Arial, sans-serif', // Helvetica font
    fontWeight: 'bold', // Bold text
    fontSize: '16px', // Increase text size
  },
  logo: {
    position: 'absolute',
    left: '20px', // Adjust to suit your needs
    height: '64px', // Adjust size as needed
    width: 'auto', // Maintains aspect ratio
  }
};

export default Nav3D;
