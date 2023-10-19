import React, { useRef, useState, useEffect, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import {WorldContext} from '../contexts/WorldContext';
import { AvatarContext } from '../contexts/AvatarContext'; // Adjust the path accordingly
import { Body, World, Plane as CannonPlane } from 'cannon-es';

const Character = React.forwardRef(({ animation, ...props }, ref) => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF(`${process.env.PUBLIC_URL}/assets/centeredCharacter.gltf`);
  const [mixer, setMixer] = useState(null);
  const { world, isWorldInitialized } = useContext(WorldContext);
  const { avatarColor } = useContext(AvatarContext); // <-- Access the avatarColor from the context

  useEffect(() => {
    const mixerInstance = new THREE.AnimationMixer(scene);
    setMixer(mixerInstance);
  }, [scene]);

  useEffect(() => {
    if (mixer) {
      mixer.stopAllAction();
      const newAnimationClip = animations.find((clip) => clip.name === animation);

      if (newAnimationClip) {
        const newAnimationAction = mixer.clipAction(newAnimationClip);
        newAnimationAction.play();
      }
    }
  }, [mixer, animation]);

  useEffect(() => {
    if (!ref || !ref.current || !ref.current.body || !world || !isWorldInitialized) {
      return;
    }

    world.addBody(ref.current.body);

    const groundShape = new CannonPlane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    groundBody.position.set(0, -0.5,0);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);
  }, [ world, ref, isWorldInitialized]);

  useFrame((_, deltaTime) => {
    if (!ref || !ref.current || !ref.current.body ) {
      return;
    }

    const maxDelta = 0.05;
    const clampedDelta = Math.min(deltaTime, maxDelta);
    if (world) {
      world.step(clampedDelta);
    }

    if (ref.current) {
      const characterBody = ref.current.body;
      ref.current.position.copy(characterBody.position);
      ref.current.quaternion.copy(characterBody.quaternion);
    }

    if (mixer) {
      mixer.update(deltaTime);
    }
  });

  useEffect(() => {
    if (scene) {
      scene.traverse(function (child) {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: avatarColor });
        }
      });
    }
  }, [scene, avatarColor]); // <-- Added avatarColor as a dependency

  return (
    <group ref={ref} {...props} scale={[0.35, 0.35, 0.35]} rotation={[0, Math.PI, 0]} position={[0, 0, 0]} dispose={null}>
      <primitive object={scene} dispose={null} />
    </group>
  );
});

export default Character;
