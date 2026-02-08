import Link from "next/link";

export default function Navbar() {
    const navItems = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Category", path: "/category" },
    ];

    return (
        <nav>
            <ul className="navlist list-none">
                {
                    navItems.map(({ title, path }) => {
                        return (
                            <Link href={path} key={path}>
                                <li className="nav-item">{title}</li>
                            </Link>
                        );
                    })
                }
            </ul>
        </nav>
    );
}