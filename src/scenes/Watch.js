import React, { useRef, useState, useContext, useEffect, forwardRef } from 'react';
import { Stars } from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import Model from '../assets/EnterPortal';
import V2Portal from '../tspace_components/portals/V2Portal';
import BelovedPortal from '../tspace_components/portals/BelovedPortal';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { useNavigate } from 'react-router-dom';
import { GLTFLoader, TextureLoader, MeshBasicMaterial, PlaneGeometry, Mesh } from 'three';
import { DoubleSide } from 'three';
import * as THREE from 'three';
import { useClick } from '@react-three/drei'; // <-- import this
import ChatCylinder from '../tspace_components/components/ChatCylinder';

const Background = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  
  return null;
};

const VideoScreen = forwardRef((props, ref) => {
  const videoTexture = new THREE.VideoTexture(ref.current);
  const videoMaterial = new MeshBasicMaterial({ map: videoTexture });
  videoMaterial.side = DoubleSide;
  const videoScreenGeometry = new PlaneGeometry(16, 9);

  const videoScreen = new Mesh(videoScreenGeometry, videoMaterial);
  videoScreen.position.set(0, 7, 30);
  videoScreen.rotation.set(0, Math.PI, 0);
  videoScreen.scale.set(1.8, 1.8, 1.8);

  useClick(() => {
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, videoScreen);

  return <primitive object={videoScreen} />;
});

const Watch = ({ characterRef }) => {
  const navigate = useNavigate();
  const world = useContext(WorldContext);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current = document.createElement('video');
    videoRef.current.src = process.env.PUBLIC_URL + '/assets/v2Video.mp4';
    videoRef.current.muted = true;
    videoRef.current.loop = true;
    videoRef.current.play();
  }, []);

  return (
    <>
      <V2Portal
        world={world}
        characterRef={characterRef}
        position={[-3, 0, 25]}
        size={[3, 3, 3]}
        rotation={[0, 0, 0]}
        destination="/testScene"
        onCharacterEnter={(destination) => {
          if (navigate) {
            navigate(destination);
          } else {
            console.error('navigate object is undefined');
          }
        }}
      />
      <BelovedPortal
        world={world}
        characterRef={characterRef}
        position={[3, 0, 25]}
        size={[3, 3, 3]}
        destination="/testScene"
        onCharacterEnter={(destination) => {
          if (navigate) {
            navigate(destination);
          } else {
            console.error('navigate object is undefined');
          }
        }}
      />
      <Stars/>
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, -5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight
        castShadow
        position={[0, 2, 50]}
        intensity={1}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 100]}>
        <planeBufferGeometry attach="geometry" args={[300, 300]} />
        <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh>
      <ChatCylinder x={-30} y={0} z={8} />
      <ChatCylinder x={-10} y={0} z={8} />
      <ChatCylinder x={10} y={0} z={8} />
      <ChatCylinder x={30} y={0} z={8} />
      <Background/>
      <VideoScreen ref={videoRef} />
    </>
  );
};

export default Watch;
