import React from 'react';
import { SocketProvider } from './SocketContext';
import { LiveKitProvider } from './LiveKitContext';
import WorldContextProvider from './WorldContext';
import { UIOverlayContextProvider } from './UIOverlayContext';
import { VideoStateProvider } from './VideoStateContext';
import { AudioStateProvider } from './AudioStateContext';
import { AvatarProvider } from './AvatarContext';
import { PlayerPositionsProvider } from './PlayerPositionsProvider';

const AllProviders = ({ children }) => {
  return (
    <SocketProvider>
      <UIOverlayContextProvider>
        <VideoStateProvider>
          <AudioStateProvider>
            <PlayerPositionsProvider>
              <LiveKitProvider>
                <AvatarProvider>
                    <WorldContextProvider>
                        {children}
                    </WorldContextProvider>
                </AvatarProvider>
              </LiveKitProvider>
            </PlayerPositionsProvider>
          </AudioStateProvider>
        </VideoStateProvider>
      </UIOverlayContextProvider>
    </SocketProvider>
  );
};

export default AllProviders;
