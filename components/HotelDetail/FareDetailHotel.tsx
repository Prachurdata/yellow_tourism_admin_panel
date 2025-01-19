import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FareDetailHotel: React.FC<any> = ({ totalPriceInfo }) => {
  const [isTaxBreakdownVisible, setTaxBreakdownVisible] = useState(false);
  // Extract pricing information from the first room option
  const roomOption = totalPriceInfo?.hInfo?.ops?.[0].ris?.[0];
  console.log("asdfhkasdhfjksdhfkjsahdfjksdf", totalPriceInfo);
  const baseFare = roomOption?.tfcs?.BF || 0;
  const totalFare = roomOption?.tfcs?.TF || 0;
  const taxesAndFees = roomOption?.tfcs?.TAF || 0;

  // Extract tax breakdown if available
  const taxBreakdown = roomOption?.tafcs?.TAF || {};

  const toggleTaxBreakdown = () => {
    setTaxBreakdownVisible((prev) => !prev);
  };

  return (
    <div className="mx-auto font-jost bg-white shadow-md rounded-lg text-[14px] md:text-[15px]">
      {/* Header */}
      <h2 className="font-bold text-white py-3 px-6 bg-[#5A5E5F] rounded-t-lg text-[15px] md:text-[16px]">
        Fare Summary
      </h2>

      {/* Fare Details */}
      <div className="space-y-2 py-3 px-6">
        {/* Base Fare */}
        <div className="flex justify-between">
          <span className="text-gray-600">Base Fare</span>
          <span className="font-medium">₹{baseFare.toFixed(2)}</span>
        </div>

        {/* Taxes and Fees */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleTaxBreakdown}
        >
          <div className="flex items-center">
            <span className="text-gray-600">Taxes and Fees</span>
            <span
              className={`ml-2 transform transition-transform ${
                isTaxBreakdownVisible ? "rotate-180" : "rotate-0"
              }`}
            >
              <MdKeyboardArrowDown />
            </span>
          </div>
          <span className="font-medium">₹{taxesAndFees.toFixed(2)}</span>
        </div>

        {/* Tax Breakdown */}
        {isTaxBreakdownVisible && (
          <div className="mx-0.5 mt-2 space-y-1 text-[12px]">
            <div className="flex justify-between">
              <span className="text-gray-500">TTSF (Total Service Fee)</span>
              <span className="font-medium">
                ₹{taxBreakdown.TTSF?.toFixed(2) || "0.00"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">TMF (Tax Management Fee)</span>
              <span className="font-medium">
                ₹{taxBreakdown.TMF?.toFixed(2) || "0.00"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">IGST (Integrated GST)</span>
              <span className="font-medium">
                ₹{taxBreakdown.IGST?.toFixed(2) || "0.00"}
              </span>
            </div>
          </div>
        )}

        <hr className="my-2 text-[15px]" />

        {/* Total Amount */}
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount</span>
          <span className="font-medium">₹{totalFare.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FareDetailHotel;
