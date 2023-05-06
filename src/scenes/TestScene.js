import * as THREE from 'three';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import { ObjectLoader } from 'three';
import { useThree, extend } from '@react-three/fiber';
import Portal from '../components/Portal';
import { Body, World, Plane as CannonPlane } from 'cannon-es';
import { useFrame } from '@react-three/fiber';
import { useNavigate, Outlet} from 'react-router-dom';
import { EffectComposer } from '@react-three/postprocessing';
import { RenderPixelatedPass } from 'three-stdlib';
import { Effects } from '@react-three/drei';
import WorldContext from '../contexts/WorldContext';

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

const TestScene = ({ characterRef }) => {
  const [myScene, setMyScene] = useState(null);
  const navigate = useNavigate();
  /* const [world, setWorld] = useState(null); */
  const world = useContext(WorldContext);
  /* const characterRef = useRef(); */
  /* console.log(characterRef); */

  const { size, camera, scene } = useThree();
  const resolution = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);

  useEffect(() => {
    console.log('TestScene mounted');
  
    return () => {
      console.log('TestScene unmounted');
    };
  }, []);

  /* useEffect(() => {

    const newWorld = new World();
    newWorld.gravity.set(0, -9.82, 0);
    setWorld(newWorld);
  }, []);

  useEffect(() => {
    if ( !world) {
    return;
  }

    world.addBody(characterRef.current.body);

    const groundShape = new CannonPlane();
    const groundBody = new Body({ mass: 0 });
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);
  }, [ world]); */

 /*  useFrame((_, deltaTime) => {
    if ( !characterRef || !characterRef.current || !characterRef.current.body || !world) {
      return;
    }

    const maxDelta = 0.1;
    const clampedDelta = Math.min(deltaTime, maxDelta);
    if (world) {
      world.step(clampedDelta);
    }

    if (characterRef.current) {
      const characterBody = characterRef.current.body;
      characterRef.current.position.copy(characterBody.position);
      characterRef.current.quaternion.copy(characterBody.quaternion);
    }
  }); */

  useEffect(() => {

    const loader = new ObjectLoader();
    loader.load(`${process.env.PUBLIC_URL}/assets/scenes/testScene.json`, (loadedScene) => {
      setMyScene(loadedScene);
    });
  }, []);

  return (
    <>
      {myScene && <primitive object={myScene} />}
      <Portal
        world={world}
        characterRef={characterRef}
        position={[-3, 1, -5]}
        size={[1, 1, 1]}
        destination="/scene1"
        onCharacterEnter={(destination) => {
          /* console.log(`Character entered portal, navigating to ${destination}`); */
          if (navigate) {
            navigate(destination);
          } else {
            console.error('navigate object is undefined');
          }
        }}
      />
      <Portal
        world={world}
        characterRef={characterRef}
        position={[3, 1, -5]} // Set a different position for this portal
        size={[1, 1, 1]}
        destination="/" // Set a different destination for this portal
        onCharacterEnter={(destination) => {
          /* console.log(`Character entered portal, navigating to ${destination}`); */
          if (navigate) {
            navigate(destination);
          } else {
            console.error('navigate object is undefined');
          }
        }}
      />
      <Background />
      {/* Add the EffectComposer and Pixelation effect */}
      {/* <EffectComposer> */}
        {/* <CustomPixelationEffect pixelSize={4.0} /> */}
        {/* Other passes */}
      {/* </EffectComposer> */}
      <Effects>
        <renderPixelatedPass args={[resolution, 2, scene, camera]} />
      </Effects>
    </>
  );
};

export default TestScene;

