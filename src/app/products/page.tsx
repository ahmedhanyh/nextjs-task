import { Metadata } from "next";
import ProductsList from "../components/productsList/ProductsList";

export const metadata: Metadata = {
  title: "Products"
};

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  return (
    <main className="p-4">
      <ProductsList products={products} />
    </main>
  );
}
