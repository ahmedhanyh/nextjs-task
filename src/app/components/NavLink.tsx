"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ title, path }) {
    const pathname = usePathname();

    return (
        <Link href={path}>
            {
                path === pathname ?
                <li className="nav-item p-4 font-bold text-white bg-slate-950">{title}</li>
                :
                <li className="nav-item p-4 font-bold hover:text-white hover:bg-slate-950">{title}</li>
            }
        </Link>
    );
}