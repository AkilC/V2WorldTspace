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
import { BrowserRouter as Router, Route, Routes, useLocation, } from 'react-router-dom';
import ScenesHandler from './scenes/ScenesHandler';
import WorldContextProvider from './tspace_components/contexts/WorldContext';
import MobileJoystick from './tspace_components/components/MobileControls';
import Loading from './tspace_components/components/Loading';
import { UIOverlayContext, UIOverlayContextProvider } from './tspace_components/contexts/UIOverlayContext';
import UIOverlay from './tspace_components/components/UIOverlay';
import ScenesHandler2D from './tspace_components/2D/ScenesHandler2D';
import Nav3D from './tspace_components/components/Nav3D';
import { VideoStateProvider } from './tspace_components/contexts/VideoStateContext';
import VideoPlayerOverlay from './tspace_components/components/VideoPlayerOverlay';
import { AudioStateProvider } from './tspace_components/contexts/AudioStateContext';
import AudioPlayerOverlay from './tspace_components/components/AudioPlayerOverlay';
import Register from './tspace_components/components/Register';
import Login from './tspace_components/components/Login';
import Profile from './tspace_components/components/Profile';
import { AvatarProvider } from './tspace_components/contexts/AvatarContext';

const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const characterRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const key = useMemo(() => location.pathname, [location]);
  const [is3D, setIs3D] = useState(true);

  console.log("sup bitches - kyle");

  return (
    <UIOverlayContextProvider>
      <VideoStateProvider>
        <AudioStateProvider>
          <LiveKitProvider>
            <AvatarProvider>
            <SocketProvider>
              <WorldContextProvider>
                <div className="app-container">
                  {is3D ? (
                    <>
                      <Canvas gl={{ stencil: true }} key={key} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <ScenesHandler characterRef={characterRef} />
                        <ThirdPersonCamera characterRef={characterRef} />
                        <Multiplayer />
                      </Canvas>
                      {location.pathname === '/Listen' && <AudioPlayerOverlay />}
                      <MobileJoystick />
                      <VideoPlayerOverlay />
                    </>
                  ) : (
                    <ScenesHandler2D />
                  )}
                  {isLoading && <Loading onLoadComplete={() => setIsLoading(false)} />}
                  {is3D && <Nav3D />}
                  {/* {isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} />} */}
                  {/* <UIOverlay /> */}
                </div>
              </WorldContextProvider>
            </SocketProvider>
            </AvatarProvider>
          </LiveKitProvider>
        </AudioStateProvider>
      </VideoStateProvider>
    </UIOverlayContextProvider>
  );
};

export default App;
