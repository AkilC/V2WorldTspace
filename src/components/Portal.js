import React, { useEffect, useContext } from 'react';
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { Vec3, Box } from 'cannon-es';
import * as cannon from 'cannon-es';
import { WorldContext } from '../contexts/WorldContext';


const Portal = ({  characterRef, destination, position, rotation = [0, 0, 0], onCharacterEnter, history }) => {
  const { scene } = useThree();
  const { world } = useContext(WorldContext);
  /* const history = useHistory(); */

  const portalBody = new cannon.Body({
    mass: 0,
    position: new Vec3(...position),
    shape: new Box(new Vec3(1, 1, 1)),
  });

  useEffect(() => {
    if (!world) return;

    portalBody.isPortal = true;
    portalBody.destination = destination;
    portalBody.onCharacterEnter = onCharacterEnter;
    world.addBody(portalBody);
    /* console.log("Portal added"); */

    const boxGeometry = new BoxGeometry(2, 2, 0.1);
    const boxMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
    const boxMesh = new Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(...position);
    boxMesh.rotation.set(...rotation);
    scene.add(boxMesh);

    return () => {
      world.removeBody(portalBody);
      scene.remove(boxMesh);
    };
  }, [destination, world, position, rotation, scene, onCharacterEnter]);

  // Update the character collision detection in the useFrame hook
  useFrame(() => {
    if ( !characterRef || !characterRef.current || !characterRef.current.body ) {
        return;
    }
    /* console.log("characterRef", characterRef.current); */
    if (characterRef.current && world) {
        const characterBody = characterRef.current.body;
        const characterPosition = characterBody.position;
        const portalPosition = portalBody.position;
        
        /* console.log('Character Position:', characterPosition);
        console.log('Portal Position:', portalPosition); */
    
        // Calculate the distance between character and portal
        const distance = characterPosition.distanceTo(portalPosition);
        const proximityThreshold = 1.5; // Adjust this value as needed
    
        if (distance < proximityThreshold) {
          /* console.log(`Character entered portal, navigating to ${destination}`); */
          onCharacterEnter(destination);
        }
    }
  });

  return null;
};

export default Portal;
