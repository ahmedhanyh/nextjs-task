import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Category"
};

export default async function Category() {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();

  return (
    <main className="p-4">
      <ul className="flex flex-wrap gap-2">
        {
          categories.map(category => {
            return (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <li className="w-max px-4 py-2 border rounded-sm text-center hover:bg-slate-950 hover:text-white">{category.name}</li>
              </Link>
            );
          })
        }
      </ul>
    </main>
  );
}
