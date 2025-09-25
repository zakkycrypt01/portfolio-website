
'use client';

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';

const technologies = [
  'Next.js', 'Solidity', 'Hardhat', 'Ethers.js', 'IPFS', 'Web3.js', 
  'React', 'Node.js', 'Chainlink', 'Truffle', 'GraphQL', 'The Graph', 'Tailwind CSS'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12 font-headline">
          My Tech Stack
        </h2>
        <Card className="max-w-4xl mx-auto p-8 lg:p-12">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-lg py-2 px-4 flex items-center">
                {tech === 'Next.js' && (
                  <Image src="/nextjs-icon.png" alt="Next.js icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Solidity' && (
                  <Image src="/solidity-icon.png" alt="Solidity icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Hardhat' && (
                  <Image src="/hardhat-icon.png" alt="Hardhat icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Ethers.js' && (
                  <Image src="/ethers-icon.png" alt="Ethers.js icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'IPFS' && (
                  <Image src="/ipfs-icon.png" alt="IPFS icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Web3.js' && (
                  <Image src="/web3js-icon.png" alt="Web3.js icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'React' && (
                  <Image src="/react-icon.png" alt="React icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Node.js' && (
                  <Image src="/nodejs-icon.png" alt="Node.js icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Chainlink' && (
                  <Image src="/chainlink-icon.png" alt="Chainlink icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Truffle' && (
                  <Image src="/truffle-icon.png" alt="Truffle icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'GraphQL' && (
                  <Image src="/graphql-icon.png" alt="GraphQL icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'The Graph' && (
                  <Image src="/thegraph-icon.png" alt="The Graph icon" width={24} height={24} className="mr-2" />
                )}
                {tech === 'Tailwind CSS' && (
                  <Image src="/tailwindcss-icon.png" alt="Tailwind CSS icon" width={24} height={24} className="mr-2" />
                )}
                <span>{tech}</span>
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
