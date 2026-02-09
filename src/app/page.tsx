"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-linear-135 from-cyan-500 to-blue-500 grow flex flex-col justify-center items-center gap-16">
      <h1 className="text-4xl font-black">Welcome to our Website!</h1>
      <div className="text-lg font-bold flex flex-col justify-center items-center gap-4">
        <Link href="/products" className="px-4 py-2 border border-slate-950 rounded-sm hover:bg-slate-950 hover:text-white">View all our Products</Link>
        <Link href="/category" className="px-4 py-2 border border-slate-950 rounded-sm hover:bg-slate-950 hover:text-white">View Categories</Link>
      </div>
    </main>
  );
}
