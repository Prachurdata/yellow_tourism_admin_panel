import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <main>
      <section className="flex justify-center items-center min-h-screen flex-col gap-4 w-10/12 mx-auto text-center">
        <div className="relative ml-24 sm:ml-0">
          {/* First dashed line container */}
          <div className="absolute right-full top-7 w-24">
            <div className="relative h-0.5">
              <div className="dash-animation absolute inset-0 flex gap-2">
                <div className="h-full w-4 bg-gray-400"></div>
                <div className="h-full w-2 bg-gray-400"></div>
                <div className="h-full w-6 bg-gray-400"></div>
                <div className="h-full w-3 bg-gray-400"></div>
                <div className="h-full w-5 bg-gray-400"></div>
                <div className="h-full w-2 bg-gray-400"></div>
              </div>
            </div>
          </div>

          {/* Second dashed line container */}
          <div className="absolute right-full top-14 w-24">
            <div className="relative h-0.5">
              <div className="dash-animation absolute inset-0 flex gap-2">
                <div className="h-full w-5 bg-gray-400"></div>
                <div className="h-full w-2 bg-gray-400"></div>
                <div className="h-full w-4 bg-gray-400"></div>
                <div className="h-full w-6 bg-gray-400"></div>
                <div className="h-full w-3 bg-gray-400"></div>
                <div className="h-full w-2 bg-gray-400"></div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/plane.png"
            width={150}
            height={150}
            alt="plane"
            className="z-50"
          />
        </div>
        <h1 className="text-[24px] font-Poppins font-semibold">
          {" "}
          Hang tight, we&apos;re loading your booking status!
        </h1>
      </section>
    </main>
  );
};

export default Loading;
