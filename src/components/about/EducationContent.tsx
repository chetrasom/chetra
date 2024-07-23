import { ScrollArea } from "@/components/ui/scroll-area"

export default function EducationContent({ content }: { content: EducationType }) {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center lg:text-left mb-10">
                <h3 className="text-4xl font-bold">{content.title}</h3>
                <p className="max-w-[600px] mx-auto lg:mx-0">
                    {content.description}
                </p>
            </div>
            <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {content.items.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                className="bg-muted h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start"
                            >
                                <span className="text-primary">{item.duration}</span>
                                <h3 className="text-xl">{item.degree}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="bg-primary w-[6px] h-[6px] rounded-full"></span>
                                    <p>{item.institute}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </ScrollArea>
        </>
    )
}