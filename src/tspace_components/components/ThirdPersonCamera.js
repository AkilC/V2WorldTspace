import React, { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Character from './Character';
import { useCharacterControls } from './useCharacterControls';
import * as THREE from 'three';
import { useSocket } from '../contexts/SocketContext';

const ThirdPersonCamera = ({ characterRef }) => {
  const { setDefaultCamera } = useThree();
  const cameraRef = useRef();
  const [joystickData, setJoystickData] = useState(null);

  const { room } = useSocket();

  const handleCharacterUpdate = (characterData) => {
    if (!room) return;

    room.send('playerUpdate', characterData);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const joystickDataStorage = localStorage.getItem('joystickData');
      if (joystickDataStorage) {
        setJoystickData(JSON.parse(joystickDataStorage));
      }
    }, 10); // Polls localStorage every 100ms
  
    return () => clearInterval(intervalId); // Clears interval on unmount
  }, []);

  const { animation, cameraAngle, setCameraAngle, up, down, left, right } = useCharacterControls(
    characterRef,
    handleCharacterUpdate,
    joystickData
  );

  const cameraDistance = 4.5;
  const cameraHeight = 3;
  const smoothness = 0.05;

  const [isDragging, setIsDragging] = useState(false);
  const [lastClientX, setLastClientX] = useState(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      setIsDragging(true);
      setLastClientX(event.clientX);
    };

    const handlePointerUp = (event) => {
      setIsDragging(false);
    };

    const handlePointerMove = (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - lastClientX;
      setCameraAngle((prevAngle) => prevAngle - deltaX * 0.005);
      setLastClientX(event.clientX);
    };

    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isDragging, lastClientX]);

  const tempVec3 = new THREE.Vector3();
  useFrame(() => {
    if (!characterRef.current || !cameraRef.current) return;

    const character = characterRef.current;
    const cameraAngleOffset = Math.PI;

    const desiredPosition = {
      x: character.position.x + Math.sin(cameraAngle + cameraAngleOffset) * cameraDistance,
      y: character.position.y + cameraHeight,
      z: character.position.z + Math.cos(cameraAngle + cameraAngleOffset) * cameraDistance,
    };

    const yOffset = 2.5;

    tempVec3.set(character.position.x, character.position.y + yOffset, character.position.z);

    cameraRef.current.position.lerp(desiredPosition, smoothness);
    cameraRef.current.lookAt(tempVec3);
  });

  return (
    <>
      <Character ref={characterRef} animation={animation} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        aspect={window.innerWidth / window.innerHeight}
        fov={75}
        near={0.05}
        far={1000}
        onUpdate={setDefaultCamera}
      />
    </>
  );
};

export default ThirdPersonCamera;
