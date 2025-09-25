
'use client';

import * as React from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: "edutoken",
    title: 'EduToken',
    description: 'A decentralized platform for issuing and verifying academic credentials on the blockchain, reducing fraud and simplifying verification for employers and institutions.',
    tags: ['Next.js', 'Solidity', 'Hardhat', 'Ethers.js', 'IPFS'],
    liveLink: '#',
    githubLink: 'https://github.com/zakkycrypt01/EduToken',
    images: ['edutoken-1', 'edutoken-2'],
  },
  {
    id: "crosschainbridge",
    title: 'CrossChainBridge',
    description: 'A robust and secure protocol for transferring digital assets seamlessly between Ethereum and Binance Smart Chain, utilizing a lock-and-mint mechanism.',
    tags: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Chainlink'],
    liveLink: '#',
    githubLink: 'https://github.com/zakkycrypt01/CrossChainBridge',
    images: ['crosschainbridge-1', 'crosschainbridge-2'],
  },
   {
    id: "defiyieldaggregator",
    title: 'DeFi Yield Aggregator',
    description: 'An automated yield farming protocol that strategically moves user funds between different lending protocols to maximize APY on their crypto assets.',
    tags: ['React', 'Solidity', 'Truffle', 'GraphQL', 'The Graph'],
    liveLink: '#',
    githubLink: 'https://github.com/zakkycrypt01/yield-aggregator',
    images: ['defiyieldaggregator-1', 'defiyieldaggregator-2'],
  },
  {
    id: 'daovoting',
    title: 'DAO Voting System',
    description: 'A secure and transparent on-chain voting system for Decentralized Autonomous Organizations, enabling proposal creation and community governance.',
    tags: ['Solidity', 'Next.js', 'Ethers.js', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/zakkycrypt01/dao-voting',
    images: ['daovoting-1', 'daovoting-2'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12 font-headline">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const projectImages = project.images.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);
            return (
              <ProjectCard key={project.id} project={project} projectImages={projectImages} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
