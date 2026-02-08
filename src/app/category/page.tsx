import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category"
};

export default async function Category() {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();

  return (
    <ul>
      {
        categories.map(category => {
          return (
            <li key={category.slug}>{category.name}</li>
          );
        })
      }
    </ul>
  );
}
