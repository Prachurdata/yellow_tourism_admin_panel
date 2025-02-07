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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <h2 className="font-bold text-white py-4 px-6 bg-[#5A5E5F] text-lg border-b border-gray-100">
        Fare Summary
      </h2>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Base fare</span>
          <span className="font-medium text-gray-900">₹{adjustedBaseFare.toFixed(2)}</span>
        </div>

        <div 
          className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors"
          onClick={toggleTaxBreakdown}
        >
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Taxes and fees</span>
            <MdKeyboardArrowDown className={`transition-transform duration-200 ${isTaxBreakdownVisible ? 'rotate-180' : ''}`} />
          </div>
          <span className="font-medium text-gray-900">₹{totalTaxesAndFees.toFixed(2)}</span>
        </div>

        {isTaxBreakdownVisible && (
          <div className="space-y-3 pl-4 pt-2 border-l-2 border-gray-100">
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

        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Total Amount</span>
            <span className="text-xl font-bold text-[#FFCD09]">₹{totalFare.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareDetail2;
