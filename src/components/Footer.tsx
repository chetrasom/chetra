"use client";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="w-full text-center">
                    &copy; All rights reserved {year} <span className="text-primary">SOM Chetra</span>
                </div>
            </div>
        </footer>
    )
}
