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
    <main className="w-10/12 mx-auto flex flex-col xl:flex-row gap-5 pt-24 pb-10">
      <div className="shadow-md rounded-b-lg w-full xl:w-[70%] bg-white">
        <h2 className="font-bold font-jost text-white py-3 px-5 md:px-10 bg-[#5A5E5F] text-[15px] md:text-[16px] rounded-t-lg">
          Booking Status
        </h2>

        <div className="flex items-center space-x-3 mt-6 px-4 md:px-6">
          {status ? (
            <div className="flex items-center space-x-2">
              <div className="bg-[#208C25] rounded-full p-2 flex items-center justify-center">
                <FaCheck className="text-white text-[10px] md:text-[1rem]" />
              </div>
              <h1 className="text-[#208C25] font-bold text-xl md:text-2xl">
                Booking Confirmed
              </h1>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="bg-red-500 rounded-full p-2 flex items-center justify-center">
                <FaTimes className="text-white text-[10px] md:text-[1rem]" />
              </div>
              <h1 className="text-red-600 font-bold text-xl md:text-2xl">
                Booking Failed
              </h1>
            </div>
          )}
        </div>

        <div className="mt-3 md:mt-5">
          <h3 className="font-bold mb-3 md:mb-2 px-6 pt-4 font-jost">
            Flight Details
          </h3>
          <div className="mx-6 md:mx-0 md:-my-2">
            {tripInfos?.map((tripInfo: any, index: number) => (
              <FlightDetail2 key={index} SIdata={tripInfo.sI} />
            ))}
          </div>
        </div>

        <div className="">
          <TravellerInfo travellerInfos={travellerInfos} />
        </div>

        <div className="w-full mb-6 mt-1 md:mt-2 flex justify-center font-jost text-[12px] md:text-[16px]">
          <Link
            href={"/"}
            className="font-jost text-white transition-all duration-300 ease-in-out bg-[#FFCD09] hover:bg-[#5A5E5F] py-2 px-10 md:px-12 rounded-lg"
          >
            Home
          </Link>
        </div>
      </div>

      <div className="xl:w-[30%]">
        {totalPriceInfo && (
          <FareDetail2
            totalPriceInfo={totalPriceInfo}
            travellerInfo={travellerInfos}
          />
        )}
      </div>
    </main>
  );
};

export default Page;
