import Image from "next/image";
import { Card } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12 font-headline">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
              <Image
                src="/profile.png"
                alt="Zakky"
                fill
                className="rounded-full object-cover border-4 border-accent shadow-lg"
              />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Blockchain and Full-Stack Developer with a knack for building decentralized applications and scalable web solutions from the ground up. My expertise lies in architecting secure smart contracts and creating fluid user experiences with modern front-end technologies. I thrive in dynamic environments, am always eager to master new tools, and am driven to contribute to innovative projects that push the boundaries of technology.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
