"use client"

import ProductsList from "@/components/ProductsList";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Cart() {
    const [productsIdsInCart, setProductsIdsInCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        setProductsIdsInCart(cartItems);
    }, []);

    const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        return await response.json();
    };

    const { data, isSuccess } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    return (
        <main className="p-4">
            {
                isSuccess && productsIdsInCart &&
                <ProductsList products={data.products.filter((product) =>
                    productsIdsInCart.includes(product.id)
                )} rating={"all"} />
            }
        </main>
    );
}