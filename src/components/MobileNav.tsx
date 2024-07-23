"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
    SheetClose
} from "@/components/ui/sheet"
import { Button } from "./ui/button"

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "./Logo";
import { linksData } from "@/utils/placeholder-data";
import ThemeToggle from "./ThemeToggle";

export default function MobileNav() {
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const pathname = usePathname();

    return (
        isDesktop ? (
            <div className="hidden">Desktop</div>
        ) : (
            <div className="flex items-center gap-x-2">
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="p-2">
                                <HiOutlineMenuAlt3 className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="py-16">
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>
                                <SheetDescription className="hidden">
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                            <ul 
                                className="flex flex-col gap-y-8 items-center"
                                // className="h-full flex flex-col items-center justify-start gap-y-6 pt-10"
                            >
                                {linksData.map((link) => {
                                    return (
                                        <li key={link.path}>
                                            <SheetClose asChild>
                                                <Link 
                                                    href={link.path}
                                                    className={`${pathname === link.path ? 'text-primary': ''} capitalize text-xl`}
                                                >
                                                    {link.name}
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* <NavLinks containerStyles="flex flex-col gap-y-4 items-center" withSheetClose /> */}
                        </SheetContent>
                    </Sheet>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        )
    )
}