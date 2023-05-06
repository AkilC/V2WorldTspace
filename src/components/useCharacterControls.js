// ✅
import { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from './useKeyboardControls';
import * as THREE from 'three';
import * as cannon from 'cannon-es';

export const useCharacterControls = (characterRef, onUpdate) => {
  const [cameraAngle, setCameraAngle] = useState(0);
  const [animation, setAnimation] = useState('idle');
  const { up, down, left, right } = useKeyboardControls();
  const [characterPosition, setCharacterPosition] = useState(new THREE.Vector3());
  const [characterRotationAngle, setCharacterRotationAngle] = useState(0);


  useEffect(() => {
    if (!characterRef.current) return;

    const characterBody = new cannon.Body({
      mass: 1,
      position: new cannon.Vec3().copy(characterRef.current.position),
      shape: new cannon.Box(new cannon.Vec3(0.5, 1, 0.5)),
      material: new cannon.Material({ friction: 0.5, restitution: 0 }),
    });
    characterRef.current.body = characterBody;
  }, [characterRef]);

  useFrame(() => {
    if (!characterRef.current) return;

    const movementSpeed = 0.05;
    const rotationSpeed = 0.015;
    const character = characterRef.current;

    if (up || down) {
      if (animation !== 'walk') setAnimation('walk');
    } else {
      if (animation !== 'idle') setAnimation('idle');
    }

    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(character.body.quaternion);
    
    if (up) {
      character.body.position.x -= forward.x * movementSpeed;
      character.body.position.z -= forward.z * movementSpeed;
    }
    
    if (down) {
      character.body.position.x += forward.x * movementSpeed;
      character.body.position.z += forward.z * movementSpeed;
    }

    if (left) {
      setCharacterRotationAngle((prevAngle) => prevAngle + rotationSpeed);
    }
    
    if (right) {
      setCharacterRotationAngle((prevAngle) => prevAngle - rotationSpeed);
    }

    character.body.quaternion.setFromAxisAngle(new cannon.Vec3(0, 1, 0), characterRotationAngle);


    onUpdate && onUpdate({
      position: character.position,
      rotation: character.rotation.y,
      animation,
    });

    setCameraAngle(characterRotationAngle);
    setCharacterPosition(character.position.clone());
  });
  
  return { cameraAngle, animation, characterPosition };
};
  
