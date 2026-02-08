import { Metadata } from "next";

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
            <li key={product.id}>{product.title}</li>
          );
        })
      }
    </ul>
  );
}
