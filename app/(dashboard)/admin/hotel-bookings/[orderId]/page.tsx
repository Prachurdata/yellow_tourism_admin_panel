import { prisma } from "@/lib/db";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CreditCard, Phone, User, Mail, Clock } from "lucide-react";

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

    if (!booking) {
        return (
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        No booking found for Order ID {params.orderId}
                    </h1>
                    <Link
                        href={'/'}
                        className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                        Return to Homepage
                    </Link>
                </div>
            </main>
        );
    }

    if (booking.paymentStatus === "UNPAID") {
        return (
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-red-200 dark:border-red-800">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    Booking Details
                                </span>
                                <Badge variant="destructive">Payment Status: UNPAID</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <BookingDetails booking={booking} />
                            <div className="flex justify-center">
                                <Link
                                    href={'/'}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                >
                                    Return to Homepage
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Booking Details
                            </span>
                            <Badge variant="success" className="bg-green-500">
                                Payment Status: PAID
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Booking Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                        <CalendarDays className="h-5 w-5 text-cyan-500" />
                                        Booking Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <BookingDetails booking={booking} />
                                </CardContent>
                            </Card>

                            {/* User Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                        <User className="h-5 w-5 text-cyan-500" />
                                        User Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <UserDetails user={booking.user} />
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <Link
                                href={`/flight_bookings/bookings/${booking.bookingId}`}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                View Full Details
                            </Link>
                            <Link
                                href={'/'}
                                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                Return to Homepage
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

const BookingDetails = ({ booking }: { booking: any }) => (
    <div className="space-y-3">
        <InfoRow icon={<CreditCard className="h-5 w-5 text-gray-400" />} label="Booking ID" value={booking.bookingId} />
        <InfoRow icon={<CreditCard className="h-5 w-5 text-gray-400" />} label="Amount" value={`₹${parseFloat(booking.amount).toFixed(2)}`} />
        <InfoRow icon={<Clock className="h-5 w-5 text-gray-400" />} label="Created At" value={new Date(booking.createdAt).toLocaleString()} />
        <InfoRow icon={<CreditCard className="h-5 w-5 text-gray-400" />} label="Payment ID" value={booking.paymentId || "N/A"} />
    </div>
);

const UserDetails = ({ user }: { user: any }) => (
    <div className="space-y-3">
        <InfoRow icon={<User className="h-5 w-5 text-gray-400" />} label="Name" value={user.name} />
        <InfoRow icon={<Mail className="h-5 w-5 text-gray-400" />} label="Email" value={user.email || "Not provided"} />
        <InfoRow icon={<Phone className="h-5 w-5 text-gray-400" />} label="Phone" value={user.phone} />
    </div>
);

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center space-x-3 text-sm">
        {icon}
        <span className="text-gray-500 dark:text-gray-400">{label}:</span>
        <span className="font-medium text-gray-900 dark:text-gray-100">{value}</span>
    </div>
);

export default Page;
