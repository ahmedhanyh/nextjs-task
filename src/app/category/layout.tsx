import { Suspense } from "react";

export default function CategoryLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="mt-8 text-2xl font-bold text-center">Categories</h1>
            <Suspense fallback={<p className="text-center font-bold">Loading categories...</p>}>
                {children}
            </Suspense>
        </div>
    )
}
