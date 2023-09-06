import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import IconButton from './IconButton';
import { faThLarge, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <>
      <div style={styles.mobileNav}>
        <img onClick={() => navigate(`/`)} style={styles.logo} src={process.env.PUBLIC_URL + '/assets/V2Logo-02.png'} alt="Logo" />
        <div style={styles.menuIcon} onClick={toggleDrawer}>
          &#9776;
        </div>
      </div>
      {isOpen && <SideDrawer isOpen={isOpen} onClose={toggleDrawer} />}
    </>
  );
};

const DesktopNav = () => {
  const navItems = ['Watch', 'Listen', 'Gallery', 'Shop'];
  const navigate = useNavigate();
  const [is3D, setIs3D] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleIconClick = (iconName) => {
    if (iconName === 'thlarge') {
      setIsOverlayOpen(!isOverlayOpen);
    } else if (iconName === 'cog') {
      setIs3D(!is3D); // toggle between 3D and 2D
    } else {
      console.log(`Icon ${iconName} clicked.`);
    }
  };

  return (
    <div style={styles.desktopNav}>
      <div style={styles.logoAndGhostContainer}>
        <img onClick={() => navigate(`/`)} style={styles.logo} src={process.env.PUBLIC_URL + '/assets/V2Logo-02.png'} alt="Logo" />
        <div style={styles.ghostContainer}></div>
      </div>
      <div style={styles.navItemsContainer}>
        {navItems.map((item, index) => (
          <div key={index} style={styles.navItem} onClick={() => navigate(`/${item}`)}>
            {item}
          </div>
        ))}
      </div>
      <div style={styles.iconContainer}>
        <IconButton icon={faCog} onClick={() => handleIconClick('cog')} />
        <IconButton icon={faUser} onClick={() => handleIconClick('user')} />
        <IconButton icon={faThLarge} onClick={() => handleIconClick('thlarge')} />
      </div>
    </div>
  );
};

const SideDrawer = ({ onClose }) => {
  const navItems = ['Watch', 'Listen', 'Shop'];
  const navigate = useNavigate();

  return (
    <div style={styles.sideDrawer}>
      <div style={styles.closeButtonContainer}>
        <div style={styles.closeButton} onClick={onClose}>
          &times;
        </div>
      </div>
      {navItems.map((item, index) => (
        <div key={index} style={styles.navItem} onClick={() => { navigate(`/${item}`); onClose(); }}>
          {item}
        </div>
      ))}
    </div>
  );
};

const Nav3D = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

  return (
    <>
      {isDesktopOrLaptop ? <DesktopNav /> : <MobileNav />}
    </>
  );
};

const styles = {
  mobileNav: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
  },
  menuIcon: {
    color: 'white',
    fontSize: 28,
    cursor: 'pointer',
  },
  desktopNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '16px 32px',
    boxSizing: 'border-box',
  },
  logoAndGhostContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '7%', // set this to match the width of your icon container
  },
  navItemsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto',
  },
  navItem: {
    margin: '0 40px', 
    fontFamily: 'Helvetica, Arial, sans-serif', 
    fontWeight: 'bold', 
    fontSize: '16px', 
    cursor: 'pointer',
    textTransform: 'uppercase'
  },
  logo: {
    height: '64px', 
    width: 'auto',
    cursor: 'pointer',
  },
  ghostContainer: {
    flex: '1 1 auto', // this makes the ghost container fill up all available space, pushing the logo to the left
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0000008c',
    borderRadius: '120px',
    paddingLeft: '8px',
    paddingRight: '8px',
    width: 'auto',
  },
  sideDrawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '70%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 10px',
    boxSizing: 'border-box',
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease-out',
  },
  closeButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // pushes the close button to the right
  },
  closeButton: {
    cursor: 'pointer',
    fontSize: '30px',
    color: 'white',
    marginBottom: '20px',
  },
};

export default Nav3D;
