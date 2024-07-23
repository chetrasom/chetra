"use client";

import { experienceData, aboutData, educationData, skillsData } from "@/utils/placeholder-data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AboutContent from "@/components/about/AboutContent";
import EducationContent from "@/components/about/EducationContent";
import SkillsContent from "@/components/about/SkillsContent";

export default function AboutPage() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 lg:py-0">
            <div className="container">
                <div>

                    <Tabs defaultValue="about" className="flex flex-col gap-[60px] lg:flex-row">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 lg:mx-0">
                            <TabsTrigger value="about">About me</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            {/* <TabsTrigger value="experience">Experience</TabsTrigger>  */}
                        </TabsList>

                        {/* content */}
                        <div className="w-full min-h-[70vh]">
                            <TabsContent value="about">
                                <AboutContent content={aboutData} />
                            </TabsContent>
                            
                            <TabsContent value="education">
                                <EducationContent content={educationData} />
                            </TabsContent>
                            
                            <TabsContent value="skills">
                                <SkillsContent content={skillsData} />
                            </TabsContent>

                            {/* <TabsContent value="experience">
                                <div className="flex flex-col gap-[30px] text-center lg:text-left mb-10">
                                    <h3 className="text-4xl font-bold">{experienceData.title}</h3>
                                    <p className="max-w-[600px] mx-auto lg:mx-0">
                                        {experienceData.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {experienceData.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="bg-muted h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start"
                                                >
                                                    <span className="text-primary">{item.duration}</span>
                                                    <h3 className="text-xl">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-primary w-[6px] h-[6px] rounded-full"></span>
                                                        <p>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </TabsContent> */}
                        </div>
                    </Tabs>

                </div>
            </div>
        </section>
    )
}