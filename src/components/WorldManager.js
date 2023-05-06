import React from 'react';
import { WorldProvider } from '../contexts/WorldContext';
import { CharacterProvider } from '../contexts/CharacterContext';
import ThirdPersonCamera from './ThirdPersonCamera';

const WorldManager = () => {
  return (
    <WorldProvider>
      <CharacterProvider>
        <ThirdPersonCamera />
      </CharacterProvider>
    </WorldProvider>
  );
};

export default WorldManager;
