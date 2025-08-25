

export default function AboutContent({ content }: { content: AboutType }) {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center lg:text-left mb-10">
                <h3 className="text-4xl font-bold">{content.title}</h3>
                <p className="max-w-[600px] mx-auto lg:mx-0">
                    {/* I am a passionate and dedicated front-end developer with a strong focus on building clean, responsive, and user-friendly websites. Skilled in HTML, CSS, JavaScript, React, and Tailwind, I enjoy turning ideas into interactive digital experiences and solving problems through code. */}

                    I’m a dedicated front-end developer with a focus on building beautiful, responsive, and user-friendly websites and web applications. <br />
                    After a brief break from professional development, I resumed coding in 2025 through self-taught projects, sharpening my skills in HTML, CSS, JavaScript, React, Tailwind, and Next.js. I enjoy turning ideas into interactive digital experiences and solving problems through code.
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 md:place-items-start">
                {content.info.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="space-x-3">
                                <span className="text-primary">{item.fieldName}:</span>
                                <span>{item.fieldValue}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}