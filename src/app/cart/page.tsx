// "use client"

export default async function Cart() {
    return (
        <main className="p-4">
            {/* <ul className="grid grid-cols-4 gap-4">
                {
                    products.map(({ id, title, thumbnail, price }) => {
                        return (
                            <li key={id} className="p-2 h-full shadow-sm rounded-lg flex flex-col justify-between transition-all duration-200 hover:scale-104 hover:shadow-md">
                                <Link href={`/products/${id}`} className="flex flex-col justify-between">
                                    <img src={thumbnail} alt="" className="h-3/4 self-center" />
                                    <div>
                                        <h2>{title}</h2>
                                        <p>${price}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul> */}
            {/* <p className="mt-8 text-3xl text-center font-bold">To be implemented</p> */}
        </main>
    );
}