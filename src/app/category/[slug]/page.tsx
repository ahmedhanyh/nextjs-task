import ProductsList from "@/components/ProductsList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Category Name"
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { products } = await fetch(`https://dummyjson.com/products/category/${slug}`).then(res => res.json());

    return (
        <main className="p-4">
            <ProductsList products={products} />
        </main>
    );
}