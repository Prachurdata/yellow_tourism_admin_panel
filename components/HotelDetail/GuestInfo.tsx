import React from "react";

const GuestInfo = ({ guestInfos }: { guestInfos: any[] }) => {
  return (
    <section className="p-6 -mt-5 md:mt-0 font-jost text-[12px] md:text-[16px]">
      <h3 className="font-bold text-[15px] md:text-[16px] mb-3">
        Guest Information
      </h3>

      {/* Header Row for lg and above */}
      <div className="hidden md:grid grid-cols-2 text-[#5A5E5F] border-b border-[#898A9D] py-1 mt-1">
        <p>Sr.</p>
        <p>Name</p>
      </div>

      {/* Header Row for smaller screens */}
      <div className="grid grid-cols-2 gap-1 text-[#5A5E5F] border-b border-[#898A9D] py-1 font-semibold md:hidden">
        <p>Sr.</p>
        <p>Details</p>
      </div>

      {/* Guest Information */}
      {guestInfos.map((guest, index) => (
        <div key={index} className="grid grid-cols-2 gap-1 py-2 text-[#1A1A1A]">
          <p>{index + 1}</p>
          <p>
            {guest.ti} {guest.fN} {guest.lN} ({guest.pt === "ADULT" ? "A" : "C"}
            )
          </p>
        </div>
      ))}
    </section>
  );
};

export default GuestInfo;
