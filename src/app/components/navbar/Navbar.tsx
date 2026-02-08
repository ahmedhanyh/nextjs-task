import Link from "next/link";

export default function Navbar() {
    const navItems = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Category", path: "/category" },
    ];

    return (
        <nav>
            <ul className="navlist list-none border-b border-gray-200 flex justify-center">
                {
                    navItems.map(({ title, path }) => {
                        return (
                            <Link href={path} key={path}>
                                <li className="nav-item p-4 font-bold hover:text-white hover:bg-slate-950">{title}</li>
                            </Link>
                        );
                    })
                }
            </ul>
        </nav>
    );
}