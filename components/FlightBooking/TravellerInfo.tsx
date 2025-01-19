import React from 'react';

const TravellerInfo = ({ travellerInfos }: any) => {
  console.log("the traveller info is ", travellerInfos);
  return (
    <section className="p-6 -mt-5 md:mt-0 font-jost text-[12px] md:text-[16px]">
      <h3 className="font-bold text-[15px] md:text-[16px] mb-3">Passenger Information</h3>

      {/* Header Row for lg and above */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(30px,auto)_2fr_2fr_2fr_2fr] gap-1 text-[#5A5E5F] border-b border-[#898A9D] py-1 font-semibold">
        <p>Sr.</p>
        <p>Name</p>
        <p>Route / PNR</p>
        <p>Ticket Number</p>
        <p>Check-in Status</p>
      </div>

      {/* Header Row for smaller screens */}
      <div className="grid grid-cols-2 gap-1 text-[#5A5E5F] border-b border-[#898A9D] py-1 font-semibold lg:hidden">
        <p>Sr.</p>
        <p>Details</p>
      </div>

      {/* Data Rows */}
      {travellerInfos.map((traveller: any, index: number) => {
        const passengerTypeAbbreviation = traveller.pt === "ADULT" ? "A" : traveller.pt === "INFANT" ? "I" : "C";
        const routes = Object.keys(traveller.pnrDetails);

        return (
          <div key={index} className="py-1 gap-1">
            {/* Layout for lg screens */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-[minmax(30px,auto)_2fr_2fr_2fr_2fr] gap-1">
                <p>{index + 1}</p>
                <p>
                  {traveller.ti} {traveller.fN} {traveller.lN} <span>({passengerTypeAbbreviation})</span>
                </p>

                <div>
                  {routes.map((route) => (
                    <p key={route}>
                      <strong className='font-medium'>{route}</strong>: {traveller.pnrDetails[route] ?? "N/A"}
                    </p>
                  ))}
                </div>

                <div>
                  {routes.map((route) => (
                    <p key={route}>
                      {traveller.ticketNumberDetails?.[route] ?? "N/A"}
                    </p>
                  ))}
                </div>


                <div>
                  {routes.map((route) => (
                    <p key={route} className={traveller.checkinStatusMap[route] ? "text-green-600" : "text-red-600"}>
                      {traveller.checkinStatusMap[route] ? "Checked in" : "Not checked in"}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Layout for smaller screens (two columns) */}
            <div className="grid grid-cols-2 lg:hidden py-1 gap-1">
              <p className="font-semibold">{index + 1}</p>
              <div>
                <p>
                  {traveller.ti} {traveller.fN} {traveller.lN} <span>({passengerTypeAbbreviation})</span>
                </p>
                {routes.map((route) => (
                  <div key={route} className="mt-2">
                    <p>Route: {route}</p>
                    <p>PNR: {traveller.pnrDetails[route]}</p>
                    <p>Ticket Number: {traveller.ticketNumberDetails?.[route] ?? "N/A"}</p>
                    <p className={traveller.checkinStatusMap[route] ? "text-green-600" : "text-red-600"}>
                      {traveller.checkinStatusMap[route] ? "Checked in" : "Not checked in"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};


export default TravellerInfo;
