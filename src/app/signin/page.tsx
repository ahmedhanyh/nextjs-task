import SignInButton from "@/components/SignInButton";
import { signInWithGoogle, signInWithFacebook } from "../../signin/action";

export default function page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
            <form action={signInWithGoogle}>
                <SignInButton provider="Google" />
            </form>
            <form action={signInWithFacebook}>
                <SignInButton provider="Facebook" />
            </form>
        </main>
    );
}