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
        <div style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 20,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 320,
        height: 350,
        maxWidth: 320,
        maxHeight: 350,
        transition: "box-shadow 0.2s",
        }}>
        <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
            style={{ objectFit: "cover", borderRadius: 8, marginBottom: 16 }}
        />
        <h2 style={{ fontSize: 20, margin: "8px 0 4px 0", fontWeight: 600 }}>{product.name}</h2>
        <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>{product.description}</div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{product.price.toLocaleString()}원</div>
        </div>
    </Link>
  );
};

export default React.memo(ProductCard);
