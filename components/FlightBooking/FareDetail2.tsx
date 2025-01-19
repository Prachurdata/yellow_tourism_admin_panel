import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

interface FareSummaryProps {
  totalPriceInfo: {
    totalFareDetail: {
      fC: {
        TF: number;
        NF: number;
        BF: number;
        TAF: number;
      };
      afC: {
        TAF: {
          YQ?: number;
          YR?: number;
          OT: number;
          AGST: number;
        };
      };
    };
  };
  travellerInfo: any
}

const FareDetail2: React.FC<FareSummaryProps> = ({ totalPriceInfo, travellerInfo }) => {

  // const  {ADULT,CHILD, INFANT} = flightData?.searchQuery?.paxInfo ;
  const passengerCount = travellerInfo.length; 

  console.log("the total passengers in fare detail 2 is ", passengerCount);
  const [isTaxBreakdownVisible, setTaxBreakdownVisible] = useState(false);

  const {
    fC: { BF, TAF },
    afC: {
      TAF: { YQ = 0, YR = 0, OT, AGST },
    },
  } = totalPriceInfo.totalFareDetail;

  console.log("the base fare is ", BF);

  const additionalFarePerPassenger = 300;
  const adjustedBaseFare = BF + (additionalFarePerPassenger * passengerCount);

  const totalTaxesAndFees = YQ + YR + OT + AGST;
  const totalFare = adjustedBaseFare + TAF;

  const toggleTaxBreakdown = () => {
    setTaxBreakdownVisible(!isTaxBreakdownVisible);
  };

  return (
    <div className="mx-auto font-jost bg-white shadow-md rounded-lg text-[14px] md:text-[15px]">
      <h2 className="font-bold text-white py-3 px-6 bg-[#5A5E5F] rounded-t-lg text-[15px] md:text-[16px]">Fare Summary</h2>
      <div className="space-y-2 py-3 px-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Base fare</span>
          <span className="font-medium">₹{adjustedBaseFare.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center cursor-pointer" onClick={toggleTaxBreakdown}>
          <div className="flex items-center">
            <span className="text-gray-600">Taxes and fees</span>
            <span className={`ml-2 transform transition-transform ${isTaxBreakdownVisible ? 'rotate-180' : 'rotate-0'}`}>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <span className="font-medium">₹{totalTaxesAndFees.toFixed(2)}</span>
        </div>

        {/* Tax Breakdown */}
        {isTaxBreakdownVisible && (
          <div className="mx-0.5 mt-2 space-y-1 text-[12px]">
            {YQ > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">YQ (Fuel Surcharge)</span>
                <span className="font-medium">₹{YQ.toFixed(2)}</span>
              </div>
            )}
            {YR > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">YR (Other Surcharge)</span>
                <span className="font-medium">₹{YR.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">OT (Other Taxes)</span>
              <span className="font-medium">₹{OT.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">AGST (Government Taxes)</span>
              <span className="font-medium">₹{AGST.toFixed(2)}</span>
            </div>
          </div>
        )}

        <hr className="my-2 text-[15px]" />
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount</span>
          <span className="font-medium">₹{totalFare.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FareDetail2;
