import { getAllProducts, getProduct } from '@/mocks/api/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-8">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        style={{ objectFit: 'cover', borderRadius: 12, marginBottom: 24 }}
        priority
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="text-gray-600 text-base mb-6">{product.description}</div>
      <div className="text-2xl font-bold mb-2">{product.price.toLocaleString()}원</div>
      <div className="text-gray-400 text-sm">상품 코드: {product.id}</div>
    </div>
  );
} 