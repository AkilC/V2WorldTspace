import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import ThirdPersonCamera from './tspace_components/components/ThirdPersonCamera';
import Multiplayer from './tspace_components/components/Multiplayer';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import ScenesHandler from './scenes/ScenesHandler';
import MobileJoystick from './tspace_components/components/MobileControls';
import Loading from './tspace_components/components/Loading';
import Nav3D from './tspace_components/components/Nav3D';
import VideoPlayerOverlay from './tspace_components/components/VideoPlayerOverlay';
import AudioPlayerOverlay from './tspace_components/components/AudioPlayerOverlay';
import GlobalContextProvider from './tspace_components/contexts/AllProviders';
import { Authenticator } from '@aws-amplify/ui-react';
import { Hub } from "aws-amplify/utils";
import { CookieStorage } from 'aws-amplify/utils';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import AllProviders from './tspace_components/contexts/AllProviders';


const authConfig = {
  Cognito: {
    userPoolId: 'us-east-1_LpaXo83TX',
    userPoolClientId: '1u597flp48oih7lammk474u5vb'
  }
};

Amplify.configure({
  Auth: authConfig
});

cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage({
  // Other configurations...
  domain: '.localtest.me', // Notice the dot at the beginning
  // This is important for localhost testing; cookies for localhost may not behave as expected
  secure: process.env.NODE_ENV === "production" // Use secure cookies in production
}));

const App = () => {
  const characterRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const key = useMemo(() => location.pathname, [location]);
  const [is3D, setIs3D] = useState(true);

  async function fetchCurrentUser() {
    try {
      const user = await getCurrentUser();
      if (user) {
        console.log('Current User: ', user);
        // Access user details here, for example:
        // const username = user.username;
      }
    } catch (error) {
      console.error('Error fetching current user', error);
    }
  }

  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      console.log("access token", accessToken, "id token", idToken);
    } catch (err) {
      console.log(err);
    }
  }
    useEffect(() => {
      fetchCurrentUser();
      currentSession();
    }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const listener = (data) => {
      const { payload } = data;
      if (payload.event === "signedIn") {
        console.log("user has signed in");
        navigate("/");
      }
      console.log("Auth event:", payload.event, "with payload", payload);
      if (payload.event === "signedOut") {
        console.log("user has signed out");
      }
    };

    // Start listening for auth events
    const hubListenerCancel = Hub.listen("auth", listener);

    // Return a function to stop listening for auth events
    return () => {
      hubListenerCancel(); // Cleanup
    };
  }, [navigate]);

  return (
    <AllProviders>
          <Canvas gl={{ stencil: true }} key={key} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ScenesHandler characterRef={characterRef} />
            <ThirdPersonCamera characterRef={characterRef} />
            <Multiplayer />
          </Canvas>
          {location.pathname === '/Listen' && <AudioPlayerOverlay />}
          <MobileJoystick />
          <VideoPlayerOverlay />
          {isLoading && <Loading onLoadComplete={() => setIsLoading(false)} />}
          <Nav3D />
          <Routes>
            <Route path="/authenticate" element={<Authenticator />} />
          </Routes>
     </AllProviders>
  );
};

export default App;
