import SignOutButton from "@/components/SignOutButton";
import { signOutAction } from "@/signout/action";

export default function page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
            <form action={signOutAction}>
                <SignOutButton />
            </form>
        </main>
    );
}