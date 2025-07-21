import { PRODUCTS } from '@/constants/products';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(PRODUCTS);
}