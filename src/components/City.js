import React, { useMemo } from "react";
import { usePlane } from "@react-three/cannon";
import { Box, Plane } from "@react-three/drei";
import * as THREE from "three";
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

const fluidSurface = (width, depth, maxHeight) => (u, v, target) => {
    const x = u * width;
    const y = Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI * 2) * maxHeight;
    const z = v * depth;
  
    target.set(x, y, z);
  };

  const getRandomBuildingProps = (count, groundSize) => {
    const buildings = [];
  
    for (let i = 0; i < count; i++) {
      const width = Math.random() * 10 + 5;
      const height = Math.random() * 50 + 20;
      const depth = Math.random() * 10 + 5;
  
      const positionX = Math.random() * groundSize - groundSize / 2;
      const positionZ = Math.random() * groundSize - groundSize / 2;
  
      buildings.push({
        position: [positionX, height / 2, positionZ],
        scale: [width, height, depth],
      });
    }
  
    return buildings;
  };
  

  const createParametricBuildingGeometry = (width, height, depth, slices = 50, stacks = 50) => {
    const surfaceFn = fluidSurface(width, depth, height);
    const geometry = new ParametricGeometry(surfaceFn, slices, stacks);
    return geometry;
  };

  const City = ({ buildingCount = 100, groundSize = 500 }) => {
    const buildings = useMemo(() => getRandomBuildingProps(buildingCount, groundSize), [buildingCount, groundSize]);
  
    return (
      <>
        {buildings.map((building, index) => (
          <mesh key={index} geometry={createParametricBuildingGeometry(...building.scale)} position={building.position} castShadow receiveShadow>
            <meshStandardMaterial attach="material" color="#6c757d" />
          </mesh>
        ))}
        <Plane args={[groundSize, groundSize]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <meshStandardMaterial attach="material" color="#adb5bd" />
        </Plane>
      </>
    );
  };
  
  export default City;
  