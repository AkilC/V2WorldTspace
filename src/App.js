// LiveKitContext
import React, { useState, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IconButton from './components/IconButton';
import WelcomeScreen from './components/WelcomeScreen';
import { faThLarge, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import Overlay from './components/Overlay';
import './App.css';
import ThirdPersonCamera from './components/ThirdPersonCamera';
import { SocketProvider } from './contexts/SocketContext';
import Multiplayer from './components/Multiplayer';
import { LiveKitProvider } from './contexts/LiveKitContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScenesHandler from './scenes/ScenesHandler';
import WorldContextProvider from './contexts/WorldContext';


const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const characterRef = useRef();
  const location = useLocation();
  const key = useMemo(() => location.pathname, [location]);

  const handleIconClick = (iconName) => {
    if (iconName === 'thlarge') {
      setIsOverlayOpen(!isOverlayOpen);
    } else {
      console.log(`Icon ${iconName} clicked.`);
    }
  };

  return (
    <LiveKitProvider>
      <SocketProvider>
          <WorldContextProvider>
            <div className="app-container">
              <Canvas key={key} backgroundColor="#8e9bfe" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                {/* <Scene1/> */}
                <ScenesHandler characterRef={characterRef} />
                <OrbitControls enabled={false} />
                <ThirdPersonCamera characterRef={characterRef} />
                {/* <Stars/> */}
                <Multiplayer />
              </Canvas>
              {/* {showWelcomeScreen && <WelcomeScreen onEnter={() => setShowWelcomeScreen(false)} />} */}
              <div className="icon-container">
                <IconButton icon={faCog} onClick={() => handleIconClick('cog')} />
                <IconButton icon={faUser} onClick={() => handleIconClick('user')} />
                <IconButton icon={faThLarge} onClick={() => handleIconClick('thlarge')} />
              </div>
              {isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} />}
            </div>
          </WorldContextProvider>
      </SocketProvider>
    </LiveKitProvider>
  );
};

export default App;
