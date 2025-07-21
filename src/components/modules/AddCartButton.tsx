'use client'

import Button from "@/components/atoms/Button";
import { Product } from "@/types/products";

interface AddCartButtonProps {
    product: Product;
}

function AddCartButton({ product }: AddCartButtonProps) {
    const handleAddCart = () => {
        // TODO: 장바구니 담기 로직 구현
        // console.log(product);
    }

    return (
        <Button onClick={handleAddCart} variant="primary" size="md">장바구니 담기</Button>
    )
}

export default AddCartButton;