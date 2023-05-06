import React from 'react';
import { BoxGeometry, MeshStandardMaterial } from 'three';

const Player = React.forwardRef((props, ref) => {
  const boxGeometry = new BoxGeometry(1, 1, 1);
  const boxMaterials = [
    new MeshStandardMaterial({ color: 0x0000ff }), // Right face
    new MeshStandardMaterial({ color: 0x0000ff }), // Left face
    new MeshStandardMaterial({ color: 0x0000ff }), // Top face
    new MeshStandardMaterial({ color: 0x0000ff }), // Bottom face
    new MeshStandardMaterial({ color: 0xffff00 }), // Front face
    new MeshStandardMaterial({ color: 0xff0000 }), // Back face
  ];

  return (
    <mesh ref={ref} geometry={boxGeometry} material={boxMaterials} position={[0, 0.5, 0]} />
  );
});

export default Player;