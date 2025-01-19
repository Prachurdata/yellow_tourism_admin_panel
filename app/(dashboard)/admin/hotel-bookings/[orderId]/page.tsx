import { prisma } from "@/lib/db";
import Link from "next/link";
import React from 'react';

const Page = async ({ params }: { params: { orderId: string } }) => {

    const bookingData = await prisma.hotelBooking.findMany({
        where: {
            orderId: params.orderId,
        },
        include: {
            user: true,
        },
    });

    console.log("the booking data of hotel  is ", bookingData);
    const booking = bookingData[0];

    if(booking.paymentStatus === "UNPAID"){
        return (
            <main>
            <section className='flex justify-center items-center min-h-screen flex-col gap-4 w-10/12 mx-auto text-center'>
                {/* <h1 className='text-3xl font-Poppins font-semibold'>Oops! Payment Failed.</h1> */}
                <p className='text-3xl font-Poppins text-red-400'> Payment status:  UNPAID</p>

                <div className="text-left space-y-4">
                    <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Booking Information</h2>
                    <p><span className="font-medium">Booking ID:</span> {booking.bookingId}</p>
                    <p><span className="font-medium">Amount:</span> ₹{parseFloat(booking.amount).toFixed(2)}</p>
                    <p><span className="font-medium">Bookings Status:</span> {booking.status}</p>
                    <p><span className="font-medium">Payment ID:</span> {booking.paymentId ? booking.paymentId : "N/A"}</p>
                    <p><span className="font-medium">Created At:</span> {new Date(booking.createdAt).toLocaleString()}</p>
                </div>
                <Link href={'/'}
                    className="mt-4 py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
                
                >
                    Go to Homepage
                </Link>
            </section>
        </main>
        )
    }

    if (bookingData.length === 0) {
        return (
            <main className="flex justify-center items-center min-h-screen flex-col gap-4 w-10/12 mx-auto text-center">
                <h1 className="text-3xl font-Poppins font-semibold">No booking found for Order ID {params.orderId}</h1>
                <Link href={'/'}
                    className="mt-4 py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
                    
                >
                    Go to Homepage
                </Link>
            </main>
        );
    }

     // Assuming a single booking for the given orderId

    return (
        <main className="flex justify-center items-center min-h-screen flex-col gap-4 w-11/12 max-w-lg mx-auto text-center">
            <section className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
                {/* <h1 className="text-2xl md:text-3xl font-Poppins font-semibold text-[#5A5E5F] mb-6">
                    Booking Details for Order ID: {booking.orderId}
                </h1> */}

                {/* Booking Details */}
                <div className="text-left space-y-4">
                    <h2 className="text-lg md:text-3xl font-semibold text-gray-800">Booking Information</h2>
                    <p><span className="font-medium">Booking ID:</span> {booking.bookingId}</p>
                    <p><span className="font-medium">Amount:</span> ₹{parseFloat(booking.amount).toFixed(2)}</p>
                    <p><span className="font-medium">Payment Status:</span> {booking.paymentStatus}</p>
                    <p><span className="font-medium">Payment ID:</span> {booking.paymentId}</p>
                    <p><span className="font-medium">Created At:</span> {new Date(booking.createdAt).toLocaleString()}</p>
                </div>

                {/* User Information */}
                <div className="text-left space-y-4 mt-6">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">User Information</h2>
                    <p><span className="font-medium">Name:</span> {booking.user.name}</p>
                    <p><span className="font-medium">Email:</span> {booking.user.email || "Not provided"}</p>
                    <p><span className="font-medium">Phone:</span> {booking.user.phone}</p>
                </div>

                <div className="flex justify-center mt-8">
                    <Link href={`/flight_bookings/bookings/${booking.bookingId}`}
                        className="py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
                    >
                        View Details
                    </Link>
                </div>

                {/* Redirect Button */}

                <div className="flex justify-center mt-8">
                    <Link href={'/'}
                        className="py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Page;
