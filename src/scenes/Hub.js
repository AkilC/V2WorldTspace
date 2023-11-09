import * as THREE from 'three';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import { ObjectLoader } from 'three';
import { useThree, extend } from '@react-three/fiber';
import V2Portal from '../tspace_components/portals/V2Portal';
import WatchPortal from '../tspace_components/portals/WatchPortal';
import ListenPortal from '../tspace_components/portals/ListenPortal';
import GalleryPortal from '../tspace_components/portals/GalleryPortal';
import ShopPortal from '../tspace_components/portals/ShopPortal';
import { Body, World, Plane as CannonPlane } from 'cannon-es';
import { useFrame } from '@react-three/fiber';
import { useNavigate, Outlet} from 'react-router-dom';
import { EffectComposer } from '@react-three/postprocessing';
import { RenderPixelatedPass } from 'three-stdlib';
import { Stars } from '@react-three/drei';
import { Effects } from '@react-three/drei';
import WorldContext from '../tspace_components/contexts/WorldContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TargetLocation from './TargetLocation';

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
  const navigate = useNavigate();
  const [pavillion, setPavillion] = useState(null);
  /* const [world, setWorld] = useState(null); */
  const world = useContext(WorldContext);
  /* const characterRef = useRef(); */
  /* console.log(characterRef); */

  const { size, camera, scene } = useThree();
  const resolution = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);

  useEffect(() => {
  
    const loader = new GLTFLoader();
    loader.load(`${process.env.PUBLIC_URL}/assets/scenes/v2environment.glb`, (gltf) => {
      setMyScene(gltf.scene);
    });
  
    // Load the pavillion model
    loader.load(`${process.env.PUBLIC_URL}/assets/pavillion.gltf`, (gltf) => {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.side = THREE.DoubleSide;
            }
        });
        setPavillion(gltf.scene);
    });
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

  /* useEffect(() => {

    const loader = new ObjectLoader();
    loader.load(`${process.env.PUBLIC_URL}/assets/scenes/testScene.json`, (loadedScene) => {
      setMyScene(loadedScene);
    });
  }, []); */

  return (
    <>
      {myScene && <primitive object={myScene} />}
      <WatchPortal
        world={world}
        characterRef={characterRef}
        position={[18, 0, 20]}
        size={[3, 3, 3]}
        destination="/Watch"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
      <ListenPortal
        world={world}
        characterRef={characterRef}
        position={[6, 0, 20]}
        size={[3, 3, 3]}
        destination="/Listen"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
      <GalleryPortal
        world={world}
        characterRef={characterRef}
        position={[-6, 0, 20]}
        size={[3, 3, 3]}
        destination="/Gallery"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
      <ShopPortal
        world={world}
        characterRef={characterRef}
        position={[-18, 0, 20]}
        size={[3, 3, 3]}
        destination="/Shop"
        onCharacterEnter={(destination) => {
          if (destination) {
            window.location.href = `https://${destination}`;
          } else {
            console.error('Destination not found:', destination);
          }
        }}
      />
      {/* <TargetLocation
        characterRef={characterRef}
        position={[0, 2, 6]}
        onReached={() => {
          console.log('The character has reached the target!');
          // any other logic you would like to add when the target is reached
        }}
      /> */}
{/*       <ambientLight intensity={1} /> */}
      {/* {pavillion && <primitive object={pavillion} position={[0, -0.7, 15]} scale={[5, 4, 3]} />} */}
      <directionalLight
          castShadow
          position={[5, 126, -112]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> 
      <Background />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 100]}>
        <planeBufferGeometry attach="geometry" args={[800, 800]} />
        <meshStandardMaterial attach="material" color={'#808080'} />
      </mesh>
      {/* <Effects>
        <renderPixelatedPass args={[resolution, 1, scene, camera]} />
      </Effects> */}
      <Stars/>
    </>
  );
};

export default Hub;