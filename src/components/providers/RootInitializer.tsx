'use client'

import { useLayoutEffect } from "react";
import { useCartStore } from "@/store/cart";

function RootInitializer() {
    const { initCart } = useCartStore();

    useLayoutEffect(() => {
        initCart();
    }, [initCart]);

    return null
}

export default RootInitializer;