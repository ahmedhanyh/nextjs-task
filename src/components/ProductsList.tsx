import Link from "next/link";
import AddToCart from "@/components/AddToCartButton";
import TextExpander from "./TextExpander";

export default function ProductsList({ products, rating }) {
    let filteredProducts = products;

    if (rating === "1") {
        filteredProducts = products.filter(product => Math.trunc(product.rating) === 1);
    }
    if (rating === "2") {
        filteredProducts = products.filter(product => Math.trunc(product.rating) === 2);
        console.log(filteredProducts);
    }
    if (rating === "3") {
        filteredProducts = products.filter(product => Math.trunc(product.rating) === 3);
    }
    if (rating === "4") {
        filteredProducts = products.filter(product => Math.trunc(product.rating) === 4);
    }
    if (rating === "5") {
        filteredProducts = products.filter(product => Math.trunc(product.rating) === 5);
    }

    return (
        <>
            {
                filteredProducts.length ?
                    <ul className="grid grid-cols-4 gap-4">
                        {
                            filteredProducts.map(({ id, title, description, thumbnail, price }) => {
                                return (
                                    <li key={id} className="p-2 h-full shadow-sm rounded-lg flex flex-col justify-between gap-2 transition-all duration-200 hover:scale-104 hover:shadow-md">
                                        <img src={thumbnail} alt="" className="h-3/4 self-center" />
                                        <div>
                                            <h2 className="font-extrabold">{title}</h2>
                                            <div className="mt-2 mb-8"><TextExpander>{description}</TextExpander></div>
                                            <p className="font-bold">${price}</p>
                                        </div>
                                        <AddToCart id={id} />
                                        <Link href={`/products/${id}`} className="text-center py-2 border rounded-sm hover:bg-slate-950 hover:text-white">
                                            View Details
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    :
                    <main>
                        <h1 className="mt-8 text-center text-3xl font-bold">No Products Found.</h1>
                    </main>
            }
        </>
    );
}