import React, { useRef, useState, useContext } from 'react';
import { Stars } from '@react-three/drei';
import { useThree, useLoader} from '@react-three/fiber';
import { WorldContext } from '../tspace_components/contexts/WorldContext';
import { useNavigate} from 'react-router-dom';
import { GLTFLoader, DoubleSide, VideoTexture, MeshBasicMaterial, PlaneGeometry, Mesh } from 'three';
import ChatCylinder from '../tspace_components/components/ChatCylinder';

const Background = () => {
  const { gl } = useThree();
  
  React.useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);
  
  return null;
};

const Watch = ({ characterRef }) => {
  const navigate = useNavigate();
  const world = useContext(WorldContext);
  const { scene } = useThree();

  // Create a video element
  const video = document.createElement('video');
  // Set the source to your video file (make sure the path is correct)
  video.src = process.env.PUBLIC_URL + '/assets/v2Video.mp4'; // replace with your file path
  video.muted = true; // mute the video
  video.loop = true; // The video should loop
  video.play(); // Start playing the video

  // Create a video texture
  const videoTexture = new VideoTexture(video);

  // Create a basic material with the video texture
  const videoMaterial = new MeshBasicMaterial({ map: videoTexture });
  videoMaterial.side = DoubleSide;

  // Create a plane geometry for the video screen
  const videoScreenGeometry = new PlaneGeometry(16, 9); // dimensions can be adjusted

  // Create a mesh for the video screen
  const videoScreen = new Mesh(videoScreenGeometry, videoMaterial);

  // Position the video screen in the scene
  videoScreen.position.set(0, 7, 30); // position can be adjusted
  videoScreen.rotation.set(0, Math.PI, 0);
  videoScreen.scale.set(1.8, 1.8, 1.8); // scale can be adjusted

  // Add the video screen to the scene
  scene.add(videoScreen);

  return (
    <>
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
      <ChatCylinder x={-0} y={0} z={8} />
      <ChatCylinder x={-10} y={0} z={8} />
      <ChatCylinder x={10} y={0} z={8} />
      <ChatCylinder x={20} y={0} z={8} />
      <Background/>
      <mesh
        geometry={videoScreenGeometry}
        material={videoMaterial}
        position={[0, 7, 30]}
        rotation={[0, Math.PI, 0]}
        scale={[1.8, 1.8, 1.8]}
        onClick={() => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }}
      />
    </>
  );
};

export default Watch;
