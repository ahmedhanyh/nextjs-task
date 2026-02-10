import NavLink from "@/app/components/NavLink";

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
                            <NavLink title={title} path={path} key={path} />
                        );
                    })
                }
            </ul>
        </nav>
    );
}