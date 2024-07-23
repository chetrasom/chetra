"use client";

import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi';
import Socials from "../Socials";
import Profile from "./Profile";

export default function Hero() {
    const onButtonClick = () => {
        const pdfUrl = "/assets/images/my-resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-9">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
                    <div className="flex-1 order-2 lg:order-none">
                        <div className="text-center lg:text-left">
                            <span className="text-xl">Frontend Developer</span>
                            <h1 className="h1 mb-6">
                                Hello, I&apos;m <span className="text-primary">SOM Chetra</span>
                            </h1>
                            <p className="max-w-[500px] mb-9 mx-auto lg:mx-0">
                                I am a passionate front-end developer. focused on creating beautiful and user-friendly websites and web applications.
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:gap-x-6">
                            <div className="mb-6 lg:mb-0">
                                <Button 
                                    variant={"outline"} 
                                    size={"lg"}
                                    className="uppercase gap-x-2"
                                    onClick={onButtonClick}
                                >
                                    <span>download cv</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </div>

                            <div>
                                <Socials containerStyle="flex items-center gap-4" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-none mb-8 lg:mb-0">
                        <Profile />
                    </div>
                </div>
            </div>
        </section>
    )
}