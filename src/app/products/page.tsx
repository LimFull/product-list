import ProductCard from "@/components/modules/ProductCard";
import { Product } from "@/types/products";

async function Products() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) throw new Error("서버 응답이 올바르지 않습니다.");
    products = await res.json();
  } catch (e) {
    error = "상품 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.";
  }

  if (error) {
    return (
      <div style={{ color: "red", padding: 32, textAlign: "center" }}>
        {error}
      </div>
    );
  }

  return (
    <div className="p-2">
      <ul className="flex flex-wrap gap-2">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;