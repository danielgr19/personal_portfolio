"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    
];

const Nav = () => {
    const pathName = usePathname();
    console.log(pathName)
    return <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={``}>
                    {link.name}
                </Link>
            );
        })}
    </nav>
}

export default Nav
