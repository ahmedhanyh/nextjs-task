export default async function ProductDetails(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());

    return (
        <main className="flex justify-center">
            <div className="w-96 flex flex-col align-center">
                <img src={product.images[0]} alt="" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">{product.title}</h1>
                    <p>{product.rating}/5 stars</p>
                    <p>{product.description}</p>
                    <p className="font-bold">${product.price}</p>
                </div>
            </div>
        </main>
    );
}