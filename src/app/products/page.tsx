import { Metadata } from "next";
import ProductsList from "../components/productsList/ProductsList";
import Filter from "../components/Filter";

export const metadata: Metadata = {
  title: "Products"
};

export const revalidate = 20;

export default async function Products({ searchParams }) {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  const { rating } = await searchParams;
  const ratingFilter = rating ?? "all";

  return (
    <main className="p-4">
      <Filter />
      <ProductsList products={products} rating={ratingFilter} />
    </main>
  );
}
