"use client"

export default function error({ error }) {
    return (
        <main className="grow flex flex-col justify-center items-center gap-4">
            <p className="text-3xl font-bold">Oops! Something went wrong</p>
            <h2 className="text-3xl font-bold"><span className="text-red-600">Error:</span> {error.message}</h2>
        </main>
    );
}