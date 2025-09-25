
'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// A simple octagon texture
const octagon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30' fill='%23201404'/%3E%3C/svg%3E";

const SkillBall = ({ text, position }: { text: string, position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const textRef = useRef<any>(null!);
  const texture = useTexture(octagon);

  useFrame((state) => {
    if(meshRef.current && textRef.current){
      meshRef.current.lookAt(state.camera.position);
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial map={texture} transparent opacity={0.8} />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.4}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

export default SkillBall;
