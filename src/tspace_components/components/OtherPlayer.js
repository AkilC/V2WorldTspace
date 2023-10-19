// ✅
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const OtherPlayer = (props) => {
  const { animation, position, quaternion, color } = props;
  const groupRef = useRef();
  const [mixer, setMixer] = useState(null);
  const [characterModel, setCharacterModel] = useState(null);
  /* console.log("Color", color); */

  useEffect(() => {
    console.log("Setting model color in OtherPlayer:", color);
    if (characterModel) {
      // Update color of already loaded model
      characterModel.scene.traverse(function (child) {
        if (child.isMesh) {
          child.material.color.set(color);
        }
      });
    } else {
      // Initial model loading
      const loader = new GLTFLoader();
      loader.load(`${process.env.PUBLIC_URL}/assets/centeredChar1.gltf`, (gltf) => {
        const model = gltf.scene;
        const animations = gltf.animations;
  
        model.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({ color: color });
          }
        });
  
        setCharacterModel({ scene: model, animations });
      });
    }
  }, [color, characterModel]);
  
  

  useEffect(() => {
    if (characterModel) {
      const mixerInstance = new THREE.AnimationMixer(characterModel.scene);
      setMixer(mixerInstance);
    }
  }, [characterModel]);

  useEffect(() => {
    if (mixer && characterModel) {
      mixer.stopAllAction();
      const newAnimationClip = characterModel.animations.find((clip) => clip.name === animation);

      if (newAnimationClip) {
        const newAnimationAction = mixer.clipAction(newAnimationClip);
        newAnimationAction.play();
      }
    }
  }, [mixer, animation, characterModel]);

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }

    if (groupRef.current) {
      groupRef.current.quaternion.copy(quaternion);
    }
  });

  return characterModel ? (
    <group ref={groupRef} {...props} position={position} scale={[0.35, 0.35, 0.35]} dispose={null}>
      <primitive object={characterModel.scene} />
    </group>
  ) : null;
};

export default OtherPlayer;
