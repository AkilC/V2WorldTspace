import * as THREE from 'three';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { useNavigate, Outlet} from 'react-router-dom';
import { EffectComposer } from '@react-three/postprocessing';
import { RenderPixelatedPass } from 'three-stdlib';
import { Stars } from '@react-three/drei';
import { Effects } from '@react-three/drei';
import WorldContext from '../tspace_components/contexts/WorldContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Extend the RenderPixelatedPass
extend({ RenderPixelatedPass });

// Your other components
const Background = () => {
  const { gl } = useThree();

  React.useEffect(() => {
    gl.setClearColor('black');
  }, [gl]);

  return null;
};

const Hub = ({ characterRef }) => {
  const [myScene, setMyScene] = useState(null);
  const world = useContext(WorldContext);

  const { size, camera, scene } = useThree();
  const resolution = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);

  useEffect(() => {
    console.log('TestScene mounted');
  
    const loader = new GLTFLoader();
    loader.load(`${process.env.PUBLIC_URL}/assets/scenes/v2environment.glb`, (gltf) => {
      setMyScene(gltf.scene);
    });
  
    return () => {
      console.log('TestScene unmounted');
    };
  }, []);

  return (
    <>
      {myScene && <primitive object={myScene} scale={[0.5, 0.5, 0.5]}/>}
      {/*<ambientLight intensity={1} /> */}
      <directionalLight
          castShadow
          position={[5, 126, 112]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> 
      <Background />
      {/* Add the EffectComposer and Pixelation effect */}
      {/* <EffectComposer> */}
        {/* <CustomPixelationEffect pixelSize={4.0} /> */}
        {/* Other passes */}
      {/* </EffectComposer> */}
      {/* <Effects>
        <renderPixelatedPass args={[resolution, 1, scene, camera]} />
      </Effects> */}
      <Stars/>
    </>
  );
};

export default Hub;

