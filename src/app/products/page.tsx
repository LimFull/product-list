import { Product } from "@/types/products";

async function Products() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;