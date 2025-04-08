import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://theyellowtourism.com",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true"
};


export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

const razorpay = new Razorpay({
 key_id: process.env.RAZORPAY_KEY_ID!,
 key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request: NextRequest) {
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
 return NextResponse.json({ orderId: order.id, status: 200 }, { headers: corsHeaders });
}