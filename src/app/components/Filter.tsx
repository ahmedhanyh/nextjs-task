"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter({ }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    function filterByRating(rating) {
        const params = new URLSearchParams(searchParams);
        params.set("rating", rating);
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="ratings-filter mb-4 flex justify-center items-center gap-2">
            <p className="text-lg font-bold">Rating: </p>
            <button
                onClick={() => filterByRating("all")}
                className="size-12 border rounded-sm hover:bg-slate-950 hover:text-white flex justify-center items-center cursor-pointer">
                All
            </button>
            {

                [1, 2, 3, 4, 5].map(rating => (
                    <button
                        key={rating}
                        onClick={() => filterByRating(rating)}
                        className="size-12 border rounded-sm hover:bg-slate-950 hover:text-white flex justify-center items-center cursor-pointer">
                        {rating}+
                    </button>
                ))
            }
        </div>
    );
}