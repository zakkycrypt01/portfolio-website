
'use client';

import * as React from 'react';
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
    images: string[];
}

type ProjectCardProps = {
    project: Project;
    projectImages: (ImagePlaceholder | undefined)[];
}

export default function ProjectCard({ project, projectImages }: ProjectCardProps) {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
    );

    return (
        <Card className="group flex flex-col h-full bg-card/60 backdrop-blur-sm border-border/20 hover:border-accent transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent/20 overflow-hidden">
            <Carousel
                opts={{ loop: true }}
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {projectImages.map((image) => (
                        <CarouselItem key={image!.id}>
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src={image!.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={338}
                                    data-ai-hint={image!.imageHint}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {projectImages.length > 1 && (
                    <>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                )}
            </Carousel>
            <CardHeader>
                <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground/80">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/70">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 mt-auto">
                <Button variant="ghost" size="icon" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="h-5 w-5" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
