'use client'

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

const variantClass = {
    primary: 'bg-[#e2a23a] text-white hover:bg-[#d18d1c] active:bg-[#b97a13]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
};

const sizeClass = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
};

function Button({ children, onClick, variant = 'primary', size = 'md' }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg font-bold shadow-md transition-colors duration-150 cursor-pointer tracking-wide ${variantClass[variant]} ${sizeClass[size]}`}
        >
            {children}
        </button>
    );
}

export default Button;