"use client"

export default function AddToCart({ id }) {
    const addToCart = (productId) => {
        const oldCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        const cart = JSON.stringify([ ...oldCart, productId ]);
        localStorage.setItem("cart", cart);
    }

    return (
        <button
            onClick={() => addToCart(id)}
            className="py-2 border rounded-sm hover:bg-green-600 hover:text-white flex justify-center items-center cursor-pointer">
            Add to Cart
        </button>
    );
}