import React from "react";
import type { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
        <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-md flex flex-col items-center w-80 h-96 max-w-80 max-h-96 transition-shadow duration-200">    
        <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
            style={{ objectFit: "cover", borderRadius: 8, marginBottom: 16 }}
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <div className="text-gray-600 text-sm mb-4">{product.description}</div>
        <div className="text-lg font-bold">{product.price.toLocaleString()}원</div>
        </div>
    </Link>
  );
};

export default React.memo(ProductCard);
