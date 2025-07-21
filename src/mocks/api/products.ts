import { PRODUCTS } from "@/constants/products";
import { Product } from "@/types/products";

export const getAllProducts = async (): Promise<Product[]> => {
    return PRODUCTS;
}

export const getProduct = async (id: string): Promise<Product> => {
    if (!id) {
        throw new Error("상품 아이디가 필요합니다.");
    }

    const product = PRODUCTS.find((product) => product.id === id);

    if (!product) {
        throw new Error("상품을 찾을 수 없습니다.");
    }

    return product;
}