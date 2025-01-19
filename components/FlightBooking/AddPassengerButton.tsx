// AddPassengerButton.tsx
import React from 'react';

const AddPassengerButton = () => {
  const handleAddPassenger = () => {
    console.log('Redirecting to Add Passenger step...');
    // Add logic to redirect to the next step or open a form
  };

  return (
    <button
      onClick={handleAddPassenger}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Add Passenger
    </button>
  );
};

export default AddPassengerButton;
