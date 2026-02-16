import Link from "next/link";
import AddToCart from "@/components/AddToCartButton";

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
                            filteredProducts.map(({ id, title, thumbnail, price }) => {
                                return (
                                    <li key={id} className="p-2 h-full shadow-sm rounded-lg flex flex-col justify-between transition-all duration-200 hover:scale-104 hover:shadow-md">
                                        <Link href={`/products/${id}`} className="flex flex-col justify-between">
                                            <img src={thumbnail} alt="" className="h-3/4 self-center" />
                                            <div>
                                                <h2>{title}</h2>
                                                <p>${price}</p>
                                            </div>
                                        </Link>
                                        <AddToCart id={id} />
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