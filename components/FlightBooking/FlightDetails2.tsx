/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

interface SegmentInfo {
  id: string;
  fD: FlightDetails; // Flight details
  stops: number;
  so: any[]; // List of stopovers
  duration: number; // Flight duration
  cT?: number; // Optional connection time
  da: AirportDetails; // Departure airport
  aa: AirportDetails; // Arrival airport
  dt: string; // Departure time (ISO format)
  at: string; // Arrival time (ISO format)
  iand: boolean; // Flag for international/domestic
  isRs: boolean; // Red-eye flight flag
  sN: number; // Segment number
  oB?: AirlineInfo; // Optional operating airline for codeshare flights
}

interface AirlineInfo {
  code: string;
  name: string;
  isLcc: boolean; // Low-cost carrier flag
}

interface FlightDetails {
  aI: AirlineInfo;
  fN: string; // Flight number
  eT: string; // Equipment type (plane model/type)
}

interface AirportDetails {
  code: string;
  name: string;
  cityCode: string;
  city: string;
  country: string;
  countryCode: string;
  terminal?: string; // Optional terminal
}

// Props for Flight Detail Component
interface FlightDetailProps {
  SIdata: SegmentInfo[]; // Flight segment information
}
const FlightDetail2: React.FC<FlightDetailProps> = ({ SIdata }) => {
  // console.log("the si data is ", SIdata);

  const calculateLayoverTime = (arrivalTime: string, departureTime: string) => {
    const arrival = new Date(arrivalTime);
    const departure = new Date(departureTime);
    const diffMs = Math.abs(departure.getTime() - arrival.getTime());
    const diffHours = Math.floor(diffMs / 1000 / 60 / 60);
    const diffMinutes = Math.floor((diffMs / 1000 / 60) % 60);
    return `${diffHours}h ${diffMinutes}m`;
  };

  const formatDuration = (durationInMinutes: number) => {
    const hours = Math.floor(durationInMinutes / 60); // Get the hours
    const minutes = durationInMinutes % 60; // Get the remaining minutes
    return `${hours}h ${minutes}min`;
  };

  return (
    <div className="space-y-8">
      {SIdata.map((segment, index) => (
        <div key={index} className="relative">
          <div className="bg-white rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow duration-200">
            {/* Airline Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="relative w-16 h-16">
                  <Image
                    width={64}
                    height={64}
                    src={`/assets/${segment.fD.aI.code}.png`}
                    alt={segment.fD.aI.name}
                    className="rounded-full bg-gray-50 p-2"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {segment.fD.aI.name}
                  </h3>
                  <p className="text-gray-600">
                    {segment.fD.aI.code}-{segment.fD.fN}
                  </p>
                </div>
              </div>
              
              <div className="bg-[#FFEFB0] px-4 py-2 rounded-full">
                <p className="text-sm font-medium text-gray-700">
                  {formatDuration(segment.duration)}
                </p>
              </div>
            </div>

            {/* Flight Route Details */}
            <div className="flex justify-between items-center relative">
              <div className="space-y-1 max-w-[250px]">
                <p className="font-poppins  md:whitespace-nowrap text-[#5A5E5F]">
                  {new Date(segment.dt).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                <h3 className="font-bold font-poppins text-[12px] md:text-[15px] md:whitespace-nowrap">
                  {new Date(segment.dt).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  ({segment.da.code})
                </h3>
                <p className="font-jost text-[#5A5E5F] leading-[120%]">
                  {segment.da.city}, {segment.da.name}{" "}
                  {segment.da.terminal &&
                    `, Terminal: ${segment.da.terminal}`}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-full px-1.5 md:px-3 relative">
                {/* Time display */}
                <p className="absolute left-1/2 -translate-x-1/2 top-1 md:top-4 font-poppins text-[9px] md:text-[15px] text-[#5A5E5F] leading-[14.5px] px-2 md:px-3 py-0.5 md:py-1.5 rounded-3xl bg-[#FFEFB0] whitespace-nowrap">
                  {formatDuration(segment.duration)}
                </p>

                <div className="flex items-center w-full mt-6">
                  <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-[#FFCD09]" />

                  <div className="flex-1 h-0.5 mx-1 border-0 border-t-2 md:border-t-4 border-dotted border-[#FFCD09]" />

                  <div className="w-1.5 md:w-2.5 h-1.5 md:h-2.5 rounded-full bg-[#FFCD09]" />

                  <div className="w-2 md:w-4 h-2 md:h-4 text-[#5A5E5F] ml-1 md:ml-2">
                    <Image
                      src={"/assets/flight.png"}
                      alt="flight"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1 max-w-[250px]">
                <p className="font-poppins  md:whitespace-nowrap text-[#5A5E5F]">
                  {new Date(segment.at).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                <h3 className="font-bold font-poppins text-[12px] md:text-[15px] md:whitespace-nowrap">
                  {new Date(segment.at).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  {", "}({segment.aa.code})
                </h3>
                <p className="font-jost text-[#5A5E5F] leading-[120%]">
                  {segment.aa.city}, {segment.aa.name}{" "}
                  {segment.aa.terminal &&
                    `, Terminal: ${segment.aa.terminal}`}
                </p>
              </div>
            </div>
          </div>

          {/* Layover indicator */}
          {index < SIdata.length - 1 && (
            <div className="flex justify-center my-4">
              <div className="bg-gray-50 text-gray-600 px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium">Layover: </span>
                {calculateLayoverTime(SIdata[index].at, SIdata[index + 1].dt)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightDetail2;
