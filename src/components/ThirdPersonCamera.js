// ✅
import React, { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Character from './Character';
import { useCharacterControls } from './useCharacterControls';
import * as THREE from 'three';
import { useSocket } from '../contexts/SocketContext';
import TestScene from '../scenes/TestScene';

const ThirdPersonCamera = ( {characterRef} ) => {
  const { setDefaultCamera } = useThree();
  const cameraRef = useRef();
  /* const characterRef = useRef(); */

  const { room } = useSocket();
  /* console.log('ThirdPersonCamera characterRef:', characterRef);  */

  const handleCharacterUpdate = (characterData) => {
    /* console.log("handleCharacterUpdate called:", characterData ); */
    if (!room) return;

    room.send('playerUpdate', characterData);
  };

  const { animation, cameraAngle, up, down, left, right } = useCharacterControls(characterRef, handleCharacterUpdate);

  const cameraDistance = 4.5;
  const cameraHeight = 3;
  const smoothness = 0.05;

  useFrame(() => {
    if (!characterRef.current || !cameraRef.current) return;

    const character = characterRef.current;
    // Add the camera angle offset
    const cameraAngleOffset = Math.PI;

    // Calculate the desired camera position based on the player's position and cameraAngle
    const desiredPosition = {
      x: character.position.x + Math.sin(cameraAngle + cameraAngleOffset) * cameraDistance,
      y: character.position.y + cameraHeight,
      z: character.position.z + Math.cos(cameraAngle + cameraAngleOffset) * cameraDistance,
    };

    const yOffset = 2.5;

    const lookAtTarget = new THREE.Vector3(
      character.position.x,
      character.position.y + yOffset,
      character.position.z
    );


    // Use lerp to smoothly adjust the camera's position and look at the player
    cameraRef.current.position.lerp(desiredPosition, smoothness);
    cameraRef.current.lookAt(lookAtTarget);
  });

  return (
    <>
      <Character ref={characterRef} animation={animation} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        aspect={window.innerWidth / window.innerHeight}
        fov={75}
        near={0.1}
        far={1000}
        onUpdate={setDefaultCamera}
      />
    </>
  );
};

export default ThirdPersonCamera;
