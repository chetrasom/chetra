import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SkillsContent({ content }: { content: SkillType }) {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center lg:text-left mb-10">
                <h3 className="text-4xl font-bold">{content.title}</h3>
                <p className="max-w-[600px] mx-auto lg:mx-0">
                    {content.description}
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px]">
                {content.skillList.map((item, index) => {
                    return (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="bg-muted w-full h-[150px] rounded-lg flex items-center justify-center group">
                                        <span className="text-5xl group-hover:text-primary transition-all">
                                            {item.icon}
                                        </span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })}
            </div>
        </>
    )
}