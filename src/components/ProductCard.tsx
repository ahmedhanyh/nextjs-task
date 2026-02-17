import Link from "next/link";
import AddToCart from "@/components/AddToCartButton";
import TextExpander from "./TextExpander";

export default function ProductCard({ product }) {
    const { id, title, description, thumbnail, price } = product;
    return (
        <li className="p-2 h-full shadow-sm rounded-lg flex flex-col justify-between gap-2 transition-all duration-200 hover:scale-104 hover:shadow-md">
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
}