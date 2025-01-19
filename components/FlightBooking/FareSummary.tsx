// FareSummary.tsx
import React from 'react';

const FareSummary = () => {
  const fare = {
    baseFare: 5745.00,
    taxesAndFees: 855.00,
    total: 6600.00
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Fare Summary is</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Base Fare</p>
          <p>₹{fare.baseFare.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Taxes and fees</p>
          <p>₹{fare.taxesAndFees.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <p>Amount to Pay</p>
          <p>₹{fare.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
