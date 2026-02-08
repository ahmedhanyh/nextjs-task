export default async function ProductDetails(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    );
}