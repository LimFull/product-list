import ProductCard from "@/components/modules/ProductCard";
import { Product } from "@/types/products";

async function Products() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;