'use client'

import Button from "@/components/atoms/Button";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types/products";

interface AddCartButtonProps {
    product: Product;
}

function AddCartButton({ product }: AddCartButtonProps) {
    const { addCart } = useCartStore();

    const handleAddCart = () => {
        addCart(product);
    }

    return (
        <Button onClick={handleAddCart} variant="primary" size="md">장바구니 담기</Button>
    )
}

export default AddCartButton;