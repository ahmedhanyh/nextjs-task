import ProductCard from "./ProductCard";

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
                            filteredProducts.map((product) => {
                                return (
                                    <ProductCard key={product.id} product={product} />
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