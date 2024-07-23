import Link from "next/link"
import { FaMapMarkedAlt } from "react-icons/fa"

export default function ContactInfo({ content }: { content: ContactType }) {
    return (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.map((item, index) => {
                return (
                    <li key={index}>
                        <div className="flex items-center gap-x-3">
                            <div className="bg-muted w-14 h-14 rounded-md flex items-center justify-center">
                                <span className="text-2xl text-primary">{item.icon}</span>
                            </div>
                            <div>
                                <Link href={item.path}>
                                    <span className="capitalize">{item.title}</span>
                                    <p className="hover:text-primary">{item.description}</p>
                                </Link>
                            </div>
                        </div>
                    </li>
                )
            })}
            <li className="md:col-span-2">
                <div className="flex items-center gap-x-3">
                    <div className="bg-muted w-14 h-14 rounded-md flex items-center justify-center">
                        <span className="text-2xl text-primary"><FaMapMarkedAlt /></span>
                    </div>
                    <div>
                        <Link href="/contact">
                            <span className="capitalize">Address</span>
                            <p className="hover:text-primary">
                                {`Street 271, Sangkat Boeng Salang, Khan Toulkork, Phnom Penh`}
                            </p>
                        </Link>
                    </div>
                </div>
            </li>
        </ul>
    )
}