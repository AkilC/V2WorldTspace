import React, { useMemo } from 'react';
import { ShaderMaterial, CylinderGeometry, DoubleSide } from 'three';
import GradientShader from '../shaders/GradientShader';

const ChatCylinder = ({ x = 0, y = 0, z = 0 }) => {
  const gradientMaterial = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: GradientShader.vertexShader,
        fragmentShader: GradientShader.fragmentShader,
        uniforms: GradientShader.uniforms,
        side: DoubleSide,
        transparent: true,
        depthWrite: false,
      }),
    []
  );

  const cylinderGeometry = useMemo(() => new CylinderGeometry(3, 3, 20, 32), []);

  return (
    <mesh
      geometry={cylinderGeometry}
      material={gradientMaterial}
      position={[x, y, z]}
    />
  );
};

export default ChatCylinder;
