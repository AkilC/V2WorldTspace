// ✅
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const OtherPlayer = (props) => {
  const { animation, position, quaternion, color, positionalAudio } = props;
  const groupRef = useRef();
  const [mixer, setMixer] = useState(null);
  const [characterModel, setCharacterModel] = useState(null);
  //console.log("Received positionalAudio prop in OtherPlayer:", positionalAudio);


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
    // Check if the Web Audio context is running
    console.log("Audio context state:", positionalAudio?.context?.state);
    if (positionalAudio?.context?.state === "suspended") {
        console.log("Attempting to resume audio context");
        positionalAudio.context.resume().then(() => {
            console.log("Audio context resumed successfully");
        }).catch((error) => {
            console.error("Failed to resume audio context:", error);
        });
    }
}, [positionalAudio]);
  

  useEffect(() => {
    if (characterModel) {
      const mixerInstance = new THREE.AnimationMixer(characterModel.scene);
      setMixer(mixerInstance);
    }
  }, [characterModel]);

  useEffect(() => {
    if (positionalAudio && characterModel?.scene) {
      characterModel.scene.add(positionalAudio);
      console.log("Other Player audio pos.", positionalAudio.position);
      console.log("Received positionalAudio prop in OtherPlayer:", positionalAudio);
      // Set the distance model
      positionalAudio.setDistanceModel('linear'); // Or 'exponential'
      
      // Set the rolloff factor, how quickly the sound fades
      positionalAudio.setRolloffFactor(5);
  
      // Optional: Set the reference distance (default is 1)
      positionalAudio.setRefDistance(1);
  
      // Optional: Set the max distance the sound can be heard (default is 10000)
      positionalAudio.setMaxDistance(20);
    }
  }, [characterModel, positionalAudio]);


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