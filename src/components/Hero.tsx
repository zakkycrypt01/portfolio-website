
"use client";

import { Button } from "./ui/button";
import ThreeBackground from "./ThreeBackground";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center py-48 lg:py-64">
      <ThreeBackground />
      <div className="relative z-10 text-center p-4 bg-background/60 backdrop-blur-sm rounded-lg">
        <h1 className="text-5xl md:text-7xl font-black uppercase font-headline">
          Hi, I&apos;m Zakky
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-accent font-semibold">
          Blockchain & Full-Stack Developer
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" onClick={(e) => handleScroll(e, 'projects')}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={(e) => handleScroll(e, 'contact')}>
            Contact Me
          </Button>
        </div>
      </div>
       <a
        href="#projects"
        onClick={(e) => handleScroll(e, 'projects')}
        className="absolute bottom-10 z-20"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="h-8 w-8 text-foreground animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
