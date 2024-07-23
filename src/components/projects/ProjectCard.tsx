"use client";

import Link from "next/link";
import Image from "next/image"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ProjectCard({ project }: { project: any }) {
    return (
        <>
            {/* text */}
            <div>
                <div>
                    <h1 className="h1 text-transparent text-outline">{project.num}</h1>
                    <Link href={project.live} className="hover:text-primary hover:underline transition-all">
                        <h2 className="h2 capitalize mb-4">{project.title}</h2>
                    </Link>
                    <p className="mb-4 line-clamp-4">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-x-2">
                        {project.stack.map((item: any, index: any) => {
                            return (
                                <div key={index} className="text-primary">
                                    {item.name}
                                    {index !== project.stack.length - 1 && ","}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="border border-muted mt-2 mb-6"></div>

                <div className="flex items-center gap-x-4">
                    
                    <div>
                        <Link href={project.live} target="_blank">
                            <TooltipProvider delayDuration={0}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:text-primary transition-all">
                                        <BsArrowUpRight className="text-xl" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-primary">
                                    <p>Live project</p>
                                </TooltipContent>
                            </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>

                    
                    <div>
                        <Link href={project.github} target="_blank">
                            <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:text-primary transition-all">
                                            <BsGithub className="text-xl" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-primary">
                                        <p>Github repository</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                </div>
            </div>

            {/* cover */}
            <div >
                <div className="h-[460px] relative group flex justify-center items-center rounded-xl overflow-hidden bg-muted">
                    <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                    <div className="relative w-full h-full">
                        <Image 
                            src={project.image}
                            alt="image does not response"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}