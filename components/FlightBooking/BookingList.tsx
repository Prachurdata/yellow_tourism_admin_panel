import Link from "next/link";

const BookingsList = ({ bookings }: any) => {
    return (
      <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4 pt-16 md:pt-20">
        <section className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Bookings</h2>
          
          <ul className="space-y-4">
            {bookings.map((booking: any) => (
              <li key={booking.id} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="text-left space-y-2">
                    <p className="text-lg font-semibold text-gray-800">Booking ID: {booking.bookingId}</p>
                    <p className="text-gray-600">Amount: ₹{booking.amount}</p>
                    <p className="text-gray-600">Created At: {new Date(booking.createdAt).toLocaleDateString()}</p>
                    <p className={`text-gray-600 ${booking.status === 'CONFIRMED' ? 'text-green-600' : 'text-red-600'}`}>
                      Status: {booking.status}
                    </p>
                    <p className={`text-gray-600 ${booking.paymentStatus === 'PAID' ? 'text-green-600' : 'text-red-600'}`}>
                      Payment Status: {booking.paymentStatus}
                    </p>
                  </div>
                  {
                    booking.status === "CONFIRMED" ?    <div className="mt-2 sm:mt-0 text-right sm:text-left">
                    <Link href={`/flight_bookings/bookings/${booking.bookingId}`}
                          className="py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
                      >
                          View Details
                      </Link>
                    </div>

                    : 
                    <></>
                  }
                 
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  };

export default BookingsList; 