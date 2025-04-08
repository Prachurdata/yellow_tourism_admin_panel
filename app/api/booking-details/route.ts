import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { prisma } from "@/lib/db";

const allowedOrigins = [
  'https://theyellowtourism.com',
  'https://yellow-diaries-admin.vercel.app'
];

const corsHeaders = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true"
});

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  return NextResponse.json({}, { headers: corsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  try {
    const { bookingId } = await req.json();

    const booking = await prisma.flightBooking.findUnique({
      where: {
        bookingId,
      },
      select: {
        status: true,
      },
    });

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 401, headers: corsHeaders(origin) });
    }

    if (booking.status === "PENDING") {
      return NextResponse.json({ error: "Booking Pending" }, { status: 402, headers: corsHeaders(origin) });
    }

    const response = await axios.post(
      `${process.env.TRIPJACK_HOST}/oms/v1/booking-details`,
      { bookingId },
      {
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.TRIPJACK_API_KEY,
        },
      }
    );

    return NextResponse.json(response.data, { headers: corsHeaders(origin) });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders(origin) });
  }
}
