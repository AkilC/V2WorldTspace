import React, { useRef, useState, useContext, useEffect } from 'react';
import { Stars } from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { AudioStateContext } from '../tspace_components/contexts/AudioStateContext';
import { useSocket } from '../tspace_components/contexts/SocketContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DoubleSide } from 'three';
import ChatCylinder from '../tspace_components/components/ChatCylinder';

const Background = () => {
  const { gl } = useThree();
  useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  return null;
};

const Listen = ({ characterRef }) => {
  
  const pavillion = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/assets/scenes/listenScene.glb');
  const pavillionMesh = pavillion.nodes.Cube;
  pavillionMesh.material.side = DoubleSide;

  return (
    <>
      <Stars />
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
      <primitive
        object={pavillion.scene}
        receiveShadow
        position={[0, 0, 15]}
        rotation={[0, 0, 0]}
        scale={[2, 2, 2]}
      />
      <Background />
      {/* <ChatCylinder x={-15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={40} />
      <ChatCylinder x={15} y={0} z={-3} />
      <ChatCylinder x={-15} y={0} z={-3} />
      <ChatCylinder x={0} y={0} z={15} /> */}
    </>
  );
};

export default Listen;