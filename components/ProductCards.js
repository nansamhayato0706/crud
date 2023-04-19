import Link from "next/link";

export function ProductCards({ product }) {
  return (
    <Link href={`/products/${product.id}`} key={product.id} legacyBehavior>
      <a>
        <div className="border border-gray-200 shadow-md p-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </a>
    </Link>
  );
}
