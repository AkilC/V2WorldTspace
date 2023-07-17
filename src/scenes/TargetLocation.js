import React, { useEffect, useState, useRef, useContext } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { SphereBufferGeometry, ShaderMaterial, MeshBasicMaterial, Vector3 } from 'three';
import { UIOverlayContext } from '../tspace_components/contexts/UIOverlayContext';

const TargetLocation = ({ characterRef, position, onReached }) => {
  const { isUIOpen, openUI, closeUI } = useContext(UIOverlayContext);
  const sphereMaterialRef = useRef();
  const [reached, setReached] = useState(false);
  const [closed, setClosed] = useState(false);

  const updateMaterial = (elapsedTime) => {
    if (!sphereMaterialRef.current) return;
    sphereMaterialRef.current.uniforms.time.value = elapsedTime;
  };

  useFrame((state) => {
    updateMaterial(state.clock.getElapsedTime());

    // Assuming characterRef.current holds a reference to the mesh
    if (characterRef.current) {
      const characterPosition = characterRef.current.position;
      const distance = new Vector3(...position).distanceTo(characterPosition);

      if (distance < 2 && !reached && !closed) {
        setReached(true);
        openUI();
        console.log("Reached Target");
      } else if(distance >= 2) {
        setReached(false);
        setClosed(false);
      }
    }
  });

  useEffect(() => {
    if(!isUIOpen && reached) {
      setClosed(true);
      setReached(false);
    }
  }, [isUIOpen, closeUI, reached]);
  
    // You might want to adjust the uniforms for the pulsating effect
    const sphereMaterial = new ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
      },
      vertexShader: `
        varying vec3 vUv;
  
        void main() {
          vUv = position;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
  
        varying vec3 vUv;
  
        void main() {
          vec3 color = vec3(1.0, 0.0, 0.0);
          float heartbeat = abs(sin(time * 2.0)) * 0.5 + 0.5;
  
          gl_FragColor = vec4(color * heartbeat, 1.0);
        }
      `,
    });
  
    sphereMaterialRef.current = sphereMaterial;
  
    return (
      <>
        <mesh position={position} material={sphereMaterialRef.current}>
          <sphereBufferGeometry args={[0.5, 32, 32]} />
        </mesh>
      </>
    );
  };
  
  export default TargetLocation;
  