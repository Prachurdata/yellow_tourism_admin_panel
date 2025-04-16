import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

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

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string
) => {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const { orderCreationId, razorpayPaymentId, razorpaySignature } =
    await request.json();

  const signature = generatedSignature(orderCreationId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false, status: 400 },
      { headers: corsHeaders(origin) }
    );
  }
  return NextResponse.json(
    {
      message: "payment verified successfully",
      isOk: true,
      status: 200,
      orderID: orderCreationId,
    },
    { headers: corsHeaders(origin) }
  );
}
