import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="flex justify-center items-center min-h-screen flex-col gap-6 w-11/12 md:w-10/12 mx-auto text-center px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl w-full">
          <Image 
            src="/assets/error.svg" 
            alt="Error" 
            width={120} 
            height={120} 
            className="mx-auto mb-6"
          />
          <h1 className="text-2xl md:text-3xl font-Poppins font-semibold text-gray-800 mb-4">
            {message}
          </h1>
          <p className="text-gray-600 mb-8 text-base md:text-lg">
            Please try again later or go back to the homepage.
          </p>
          <button
            className="py-3 px-8 bg-[#FFCD09] text-white rounded-xl hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out text-base md:text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => router.push("/")}
          >
            Return to Homepage
          </button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
