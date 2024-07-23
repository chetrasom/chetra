"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { projectsData } from "@/utils/placeholder-data";
import ProjectCard from "@/components/projects/ProjectCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
    const [projectType, setProjectType] = useState<string>('all');
    const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

    useEffect(() => {
        const filteredCategory = projectsData.filter((project) => {
            return projectType === 'all' ? projectsData : projectType === project.type;
        })

        setFilteredProjects(filteredCategory);
    }, [projectType]);

    return (
        <section className="py-8 lg:py-16">
            <div className="container">
                <div>
                    {/* projects found */}
                    <div className="text-center mb-6">
                        {filteredProjects.length > 1 ? (
                            <h2 className="h2">
                                <span className="text-primary">
                                    {filteredProjects.length}</span> Project{filteredProjects.length > 1 && 's'} Found
                            </h2>
                        ) : (
                            <h2 className="h2">Project doesn&apos;t exist</h2>
                        )} 
                    </div>

                    {/* Tabs */}
                    <div className="flex flex-col gap-y-5">
                        <Tabs defaultValue="all">
                            <TabsList className="flex flex-col gap-4 lg:flex-row">
                                <TabsTrigger value="all" onClick={() => setProjectType('all')} >
                                    All projects    
                                </TabsTrigger>
                                <TabsTrigger value="react-js" onClick={() => setProjectType('react-js')}>
                                    React.js
                                </TabsTrigger>
                                <TabsTrigger value="next-js" onClick={() => setProjectType('next-js')}>
                                    Next.js
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-12">
                        {filteredProjects.map((project, index) => {
                            return <ProjectCard key={index} project={project} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}