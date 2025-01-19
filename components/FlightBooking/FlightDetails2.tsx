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
    <div className="mx-auto font-jost bg-white my-5">
      <div className="space-y-6 md:py-2 md:px-6">
        {SIdata.map((segment, index) => (
          <div key={index}>
            {/* Segment Flight Details */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-3 md:gap-10 w-full ">
              <div className="flex items-center gap-3">
                {segment?.fD.aI.name === "Air India" && (
                  <Image
                    width={48}
                    height={48}
                    src={"/assets/AI.png"}
                    alt="img"
                    className="w-12 h-12 bg-gray-200 rounded-full"
                  ></Image>
                )}
                {segment?.fD.aI.name === "SpiceJet" && (
                  <Image
                    width={48}
                    height={48}
                    src={"/assets/SG.png"}
                    alt="img"
                    className="w-12 h-12 bg-gray-200 rounded-full"
                  ></Image>
                )}
                {segment?.fD.aI.name === "Vistara" && (
                  <Image
                    width={48}
                    height={48}
                    src={"/assets/UK.png"}
                    alt="img"
                    className="w-12 h-12 bg-gray-200 rounded-full"
                  ></Image>
                )}
                {segment?.fD.aI.name === "Hahn Air" && (
                  <Image
                    width={48}
                    height={48}
                    src={"/assets/H1.png"}
                    alt="img"
                    className="w-12 h-12 bg-gray-200 rounded-full"
                  ></Image>
                )}
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[14px] md:text-[16px] font-poppins leading-[24px] whitespace-nowrap">
                    {segment.fD.aI.name}
                  </h3>
                  <p className="font-semibold text-[10px] md:text-[12px] font-poppins leading-[14px]">
                    {segment.fD.aI.code}-{segment.fD.fN}
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center text-[12px] md:text-[14px]">
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

            {/* Layover Time if applicable */}
            {index < SIdata.length - 1 && (
              <div className="flex justify-center items-center pt-6 ">
                <div className="bg-gray-100 text-gray-600 font-poppins text-[10px] md:text-sm py-1 px-4 rounded-lg shadow">
                  Layover:{" "}
                  {calculateLayoverTime(SIdata[index].at, SIdata[index + 1].dt)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDetail2;
