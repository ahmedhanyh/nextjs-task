import Link from "next/link";

export default function ProductsList({ products }) {
    return (
        <ul className="grid grid-cols-4 gap-4">
            {
                products.map(({ id, title, thumbnail, price }) => {
                    return (
                        <Link href={`/products/${id}`} key={id}>
                            <li className="p-2 h-full shadow-sm rounded-lg flex flex-col justify-between transition-all duration-200 hover:scale-104 hover:shadow-md">
                                <img src={thumbnail} alt="" className="h-3/4 self-center" />
                                <div>
                                    <h2>{title}</h2>
                                    <p>${price}</p>
                                </div>
                            </li>
                        </Link>
                    );
                })
            }
        </ul>

    );
}