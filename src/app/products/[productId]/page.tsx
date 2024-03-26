import Link from "next/link";

export default function ProductDetails({ params }: {
    params: { productId: string }
}) {
    return (
        <>
        <Link href="/products">Products</Link>
        <h1>Product Details {params.productId} </h1>
        </>
    )
}