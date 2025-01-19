import Image from 'next/image';
import React from 'react'

interface SegmentInfo {
    id: string;
    fD: {
        aI: {
            code: string;
            name: string;
            isLcc: boolean;
        };
        fN: string; // Flight Number
        eT: string; // Equipment Type
    };
    stops: number;
    duration: number;
    da: {
        code: string;
        name: string;
        city: string;
        cityCode: string;
        country: string;
        countryCode: string;
        terminal: string;
    };
    aa: {
        code: string;
        name: string;
        city: string;
        cityCode: string;
        country: string;
        countryCode: string;
        terminal: string;
    };
    dt: string; // Departure Time
    at: string;  // Optional operating airline for codeshare flights
}

// Props for Flight Detail Component
interface FlightDetailProps {
    SIdata: SegmentInfo[];  // Flight segment information
    flightType: string;
}
const FlightDetail: React.FC<FlightDetailProps> = ({ SIdata, flightType }) => {

    console.log("the si data is ", SIdata);

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
        <div className={`bg-white shadow-lg rounded-lg ${flightType === 'roundtrip' ? 'px-3' : 'px-3 md:px-7 '} py-5 text-[10px] md:text-sm font-jost space-y-1 border-t`}>
            {SIdata.map((segment, index) => (
                <div key={index}>
                    {/* Segment Flight Details */}
                    <div className={`flex ${flightType === 'roundtrip' ? 'flex-col gap-3 justify-center' : 'flex-col md:flex-row justify-center md:justify-between gap-3 md:gap-6 xl:gap-10'} w-full`}>
                        <div className="flex items-center gap-4">
                        {segment?.fD.aI.name === "Air India" && (
                            <Image  width={48} 
                            height={48}  src={'/assets/AI.png'} alt="img" className="w-12 h-12 bg-gray-200 rounded-full" ></Image>
                        )}
                        {segment?.fD.aI.name === "SpiceJet" && (
                            <Image  width={48} 
                            height={48}  src={'/assets/SG.png'} alt="img" className="w-12 h-12 bg-gray-200 rounded-full" ></Image>
                        )}
                        {segment?.fD.aI.name === "Vistara" && (
                            <Image  width={48} 
                            height={48}  src={'/assets/UK.png'} alt="img" className="w-12 h-12 bg-gray-200 rounded-full" ></Image>
                        )}
                        {segment?.fD.aI.name === "Hahn Air" && (
                            <Image  width={48} 
                            height={48}  src={'/assets/H1.png'} alt="img" className="w-12 h-12 bg-gray-200 rounded-full" ></Image>
                        )}
                            <div className="space-y-1.5">
                                <h3 className="font-bold font-poppins leading-[24px] whitespace-nowrap">{segment.fD.aI.name}</h3>
                                <p className="font-semibold text-[10px] font-poppins leading-[14px]">
                                    {segment.fD.aI.code}-{segment.fD.fN}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <div className="space-y-1">
                                <h3 className={`font-bold font-poppins text-[10px] leading-[14.5px] ${flightType === 'roundtrip' ? '' : 'md:whitespace-nowrap'}`}>
                                    {new Date(segment.dt).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}{", "}
                                    {new Date(segment.dt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                                </h3>
                                <p className="font-jost text-[#5A5E5F] text-[10px] leading-[14.5px]">
                                    {segment.da.city}, {segment.da.name} ({segment.da.code}) {segment.da.terminal && `, Terminal: ${segment.da.terminal}`}
                                </p>

                            </div>

                            <div className="flex flex-col items-center justify-center w-full px-1.5 md:px-3 gap-0.5">
                                <p className="font-poppins text-[10px] leading-[14.5px]">
                                    {formatDuration(segment.duration)}
                                </p>
                                <div className="bg-[#50E33C] h-0.5 w-full"></div>
                                <p className="font-bold font-poppins text-[10px] leading-[14.5px]">
                                    Non-Stop
                                </p>
                            </div>

                            <div className="space-y-1">
                                <h3 className={`font-bold font-poppins text-[10px] leading-[14.5px] ${flightType === 'roundtrip' ? '' : 'md:whitespace-nowrap'}`}>
                                    {new Date(segment.at).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}{", "}
                                    {new Date(segment.at).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                                </h3>
                                <p className="font-jost text-[#5A5E5F] text-[10px] leading-[14.5px]">
                                    {segment.aa.city}, {segment.aa.name} ({segment.aa.code}) {segment.aa.terminal && `, Terminal: ${segment.aa.terminal}`}
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Layover Time if applicable */}
                    {index < SIdata.length - 1 && (
                        <div className="flex justify-center items-center py-2 ">
                            <div className="bg-gray-100 text-gray-600 font-poppins text-[10px] md:text-sm py-1 px-4 rounded-lg shadow">
                                Layover: {calculateLayoverTime(SIdata[index].at, SIdata[index + 1].dt)}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlightDetail; 
