

export default function AboutContent({ content }: { content: AboutType }) {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center lg:text-left mb-10">
                <h3 className="text-4xl font-bold">{content.title}</h3>
                <p className="max-w-[600px] mx-auto lg:mx-0">
                    I am a passionate front-end developer. I am a dedicated and enthusiastic developer with a passion for coding and problem-solving. <br />
                    I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience.
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 md:place-items-start">
                {content.info.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="space-x-3">
                                <span>{item.fieldName}:</span>
                                <span>{item.fieldValue}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}