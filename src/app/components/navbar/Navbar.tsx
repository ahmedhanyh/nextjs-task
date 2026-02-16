import NavLink from "@/app/components/NavLink";
import { auth } from "@/services/auth";
import Image from "next/image";

export default async function Navbar() {
    const navItems = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Category", path: "/category" },
        { title: "Cart", path: "/cart" },
    ];

    const session = await auth();
    console.log(session);

    if (session) {
        navItems.push(
            { title: "Logout", path: "/api/auth/signout" },
        );
    } else {
        navItems.push(
            { title: "Login", path: "/api/auth/signin" },
        );
    }

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
                {
                    session &&
                    (<li>
                        <Image
                            src={session?.user?.image || ""}
                            alt="User Avatar"
                            width={50}
                            height={50}
                            className="ml-4 rounded-full"
                        />
                    </li>)
                }
            </ul>
        </nav>
    );
}