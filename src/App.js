// Mobile Controls - Good but causing issues
import React, { useState, useRef, useMemo, useContext, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IconButton from './tspace_components/components/IconButton';
import WelcomeScreen from './tspace_components/components/WelcomeScreen';
import { faThLarge, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import Overlay from './tspace_components/components/Overlay';
import './App.css';
import ThirdPersonCamera from './tspace_components/components/ThirdPersonCamera';
import { SocketProvider } from './tspace_components/contexts/SocketContext';
import Multiplayer from './tspace_components/components/Multiplayer';
import { LiveKitProvider } from './tspace_components/contexts/LiveKitContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScenesHandler from './scenes/ScenesHandler';
import WorldContextProvider from './tspace_components/contexts/WorldContext';
import MobileJoystick from './tspace_components/components/MobileControls';
import Loading from './tspace_components/components/Loading';
import { UIOverlayContext, UIOverlayContextProvider } from './tspace_components/contexts/UIOverlayContext';
import UIOverlay from './tspace_components/components/UIOverlay';
import ScenesHandler2D from './tspace_components/2D/ScenesHandler2D';
import Nav3D from './tspace_components/components/Nav3D';

const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const characterRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const key = useMemo(() => location.pathname, [location]);
  const [is3D, setIs3D] = useState(true);

  const [joystickData, setJoystickData] = useState(null);

  const handleJoystickMove = (data) => {
    if (data === null) {
      setJoystickData(null);
    } else {
      const angle = data.angle.radian;
      const force = data.force;
      setJoystickData({ angle, force });
    }
  };

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
    <UIOverlayContextProvider>
    <LiveKitProvider>
      <SocketProvider>
          <WorldContextProvider>
            <div className="app-container">
              {is3D ? (
                <Canvas gl={{ stencil: true }} key={key} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <Suspense fallback={null}> {/* Use Suspense for async loading */}
                    <ScenesHandler characterRef={characterRef} />
                    <ThirdPersonCamera characterRef={characterRef} joystickData={joystickData}/>
                    <Multiplayer />
                  </Suspense>
                </Canvas>
              ) : (
                <ScenesHandler2D /> // Your 2D view outside of Canvas
              )}
              {isLoading && <Loading onLoadComplete={() => setIsLoading(false)} />}
              {/* {showWelcomeScreen && <WelcomeScreen onEnter={() => setShowWelcomeScreen(false)} />} */}
              <MobileJoystick onJoystickMove={(data) => handleJoystickMove(data)} />
              {is3D && <Nav3D />}
              <div className="icon-container">
                <IconButton icon={faCog} onClick={() => handleIconClick('cog')} />
                <IconButton icon={faUser} onClick={() => handleIconClick('user')} />
                <IconButton icon={faThLarge} onClick={() => handleIconClick('thlarge')} />
              </div>
              {isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} />}
              <UIOverlay />
            </div>
          </WorldContextProvider>
      </SocketProvider>
    </LiveKitProvider>
    </UIOverlayContextProvider>
  );
};

export default App;
