
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SkillBall from './SkillBall';

const technologies = [
  'Next.js', 'Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Web3.js', 
  'React', 'Node.js', 'Chainlink', 'Truffle', 'GraphQL', 'The Graph', 'Tailwind CSS'
];

function getFibonacciSpherePosition(index: number, total: number, radius: number): [number, number, number] {
  const phi = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const theta = phi * index;
  const x = Math.cos(theta) * r;
  const z = Math.sin(theta) * r;

  return [x * radius, y * radius, z * radius];
}

export default function SkillsCanvas({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 18] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2.5, 2.5, 5]} intensity={1} />
      <group>
        {technologies.map((tech, i) => (
          <SkillBall 
            key={tech} 
            text={tech} 
            position={getFibonacciSpherePosition(i, technologies.length, isMobile ? 6 : 8)}
          />
        ))}
      </group>
    </Canvas>
  );
}
