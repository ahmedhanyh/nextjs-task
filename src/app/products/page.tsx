import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products"
};

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  return (
    <ul>
      {
        products.map(product => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li>{product.title}</li>
            </Link>
          );
        })
      }
    </ul>
  );
}
