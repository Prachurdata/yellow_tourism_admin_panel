import React from "react";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  message: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  const router = useRouter();

  return (
    <main>
      <section className="flex justify-center items-center min-h-screen flex-col gap-4 w-10/12 mx-auto text-center">
        <h1 className="text-3xl font-Poppins font-semibold">{message}</h1>
        <p className="text-gray-600">
          Please try again later or go back to the homepage.
        </p>
        <button
          className="mt-4 py-2 px-7 bg-[#FFCD09] text-white rounded-lg hover:bg-[#5A5E5F] transition-all duration-300 ease-in-out"
          onClick={() => router.push("/")}
        >
          Go to Homepage
        </button>
      </section>
    </main>
  );
};

export default ErrorPage;
