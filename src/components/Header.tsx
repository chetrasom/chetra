import Link from "next/link"
import { Button } from "./ui/button"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import MobileNav from "./MobileNav"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
    return (
        <header className="py-8 lg:py-10">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="hidden lg:flex items-center">
                        <NavLinks containerStyles="flex items-center gap-x-8" />
                        <Link href="/contact" className="pl-8 pr-4">
                            <Button>Hire Me</Button>
                        </Link>
                        <ThemeToggle />
                    </div>

                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}