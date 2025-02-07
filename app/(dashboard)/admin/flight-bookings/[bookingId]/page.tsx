"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import ErrorPage from "@/components/Error/Error";
import FareDetail2 from "@/components/FlightBooking/FareDetail2";
import FlightDetail2 from "@/components/FlightBooking/FlightDetails2";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";
import TravellerInfo from "@/components/FlightBooking/TravellerInfo";

const Page = ({ params }: { params: { bookingId: string } }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [tripInfos, setTripInfos] = useState([]);

  const [travellerInfos, setTravellerInfos] = useState([]);
  const [totalPriceInfo, setTotalPriceInfo] = useState();
  const [status, setStatus] = useState();

  console.log("the booking id is ", params.bookingId);
  console.log("the tripInfo is ", tripInfos);
  console.log("the travellerInfo is ", travellerInfos);
  console.log("the totalpriceinfo is ", totalPriceInfo);
  console.log("the status is ", status);

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const response = await axios.post("/api/booking-details", {
          bookingId: params.bookingId,
        });

        setTripInfos(response.data.itemInfos.AIR.tripInfos);
        setTravellerInfos(response.data.itemInfos.AIR.travellerInfos);
        setTotalPriceInfo(response.data.itemInfos.AIR.totalPriceInfo);
        setStatus(response.data.status.success);

        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        console.log("error", error);
        setLoading(false);
      }
    };

    if (params.bookingId) {
      fetchFlightData();
    }
  }, [params.bookingId]);

  if (loading) return <Loading />;

  // Show error if one occurs
  // if (error) return <div>Error: {error}</div>;
  if (error)
    return (
      <ErrorPage
        message={"Booking Pending for Booking ID " + params.bookingId}
      />
    );

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col xl:flex-row gap-6 py-24">
        <div className="flex-1 xl:w-[70%]">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <h2 className="font-bold font-jost text-white py-4 px-6 md:px-10 bg-[#5A5E5F] text-lg">
              Booking Status
            </h2>

            <div className="p-6">
              {status ? (
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full p-3">
                    <FaCheck className="text-lg" />
                  </div>
                  <h1 className="text-green-600 font-bold text-xl md:text-2xl">
                    Booking Confirmed
                  </h1>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 text-red-500 rounded-full p-3">
                    <FaTimes className="text-lg" />
                  </div>
                  <h1 className="text-red-500 font-bold text-xl md:text-2xl">
                    Booking Failed
                  </h1>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <h3 className="font-bold px-6 py-4 font-jost text-lg border-b">
              Flight Details
            </h3>
            <div className="p-4">
              {tripInfos?.map((tripInfo: any, index: number) => (
                <FlightDetail2 key={index} SIdata={tripInfo.sI} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <TravellerInfo travellerInfos={travellerInfos} />
          </div>

          <div className="flex justify-center py-6">
            <Link
              href={"/"}
              className="inline-flex items-center justify-center font-jost text-white transition-all duration-300 ease-in-out bg-[#FFCD09] hover:bg-[#5A5E5F] py-3 px-12 rounded-xl text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="xl:w-[30%]">
          {totalPriceInfo && (
            <div className="sticky top-24">
              <FareDetail2
                totalPriceInfo={totalPriceInfo}
                travellerInfo={travellerInfos}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
