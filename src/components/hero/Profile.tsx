import Image from "next/image"

export default function Profile() {
    return (
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative bg-primary rounded-full overflow-hidden mx-auto">
            <Image 
                src={"/assets/images/profile2.png"}
                alt="profile image"
                quality={100}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
            />
        </div>
    )
}