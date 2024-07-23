"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { linksData } from "@/utils/placeholder-data";

type Props = {
    containerStyles: string,
    withSheetClose?: any
}

export default function NavLinks({ containerStyles }: Props) {
    const pathname = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {linksData.map((link) => {
                return (
                    <Link 
                        key={link.path} 
                        href={link.path}
                        className={`${pathname === link.path && 'border-b-2 border-primary text-primary transition-all duration-100'} 
                        capitalize hover:text-primary transition-all`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}