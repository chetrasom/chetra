import Link from "next/link"
import { Button } from "./ui/button"
import { socialData } from "@/utils/placeholder-data"

export default function Socials({ containerStyle }: { containerStyle: string }) {
    return (
        <div className={`${containerStyle}`}>
            {socialData.map((item, index) => {
                return (
                    <Link 
                        key={index} 
                        href={item.path} 
                        target="_blank"
                    >
                        <Button variant="outline" size="icon" className="text-lg">
                            {item.icon}
                        </Button>
                    </Link>
                )
            })}
        </div>
    )
}