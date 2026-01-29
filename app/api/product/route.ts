import { NextRequest, NextResponse } from 'next/server';
import { fetchProduct } from '@/lib/product';

// GET /api/product?productId=1
// Simple API route to fetch product data
// In production, this would query a database
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const productId = searchParams.get('productId') || '1';

  console.log(`\n[GET] /api/product?productId=${productId}`);
  
  const product = await fetchProduct(productId);
  
  console.log("Response:", JSON.stringify(product, null, 2));
  return NextResponse.json(product);
}
