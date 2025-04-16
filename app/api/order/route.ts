import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = [
  'https://theyellowtourism.com',
  'https://yellow-diaries-admin.vercel.app',
  'https://yellow-tourism-admin-panel.vercel.app',
  'http://localhost:3000'
];

const corsHeaders = (origin: string | null) => {
  // Always return the actual origin if it's in the allowed list
  const validOrigin = origin && allowedOrigins.includes(origin) 
    ? origin 
    : allowedOrigins[0];
  
  return {
    "Access-Control-Allow-Origin": validOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, Accept, X-CSRF-Token",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
};

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  
  // Return response with CORS headers for preflight
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin)
  });
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const { amount, currency } = (await request.json()) as {
    amount: string;
    currency: string;
  };

  console.log(amount, currency);

  const options = {
    amount: amount,
    currency: currency,
    receipt: 'rcp1',
  };
  
  const order = await razorpay.orders.create(options);
  console.log(order);
  return NextResponse.json({ orderId: order.id, status: 200 }, { headers: corsHeaders(origin) });
}