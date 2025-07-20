import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-light px-4">
      <div className=" shadow-md rounded-lg p-8 max-w-xl text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-brandColor mb-2">Submission Received!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for submitting your car. Our team will review your listing shortly.
          We’ll contact you to inspect the vehicle before publishing it on the site.
        </p>
        <p className="text-gray-600 mt-4 text-sm">
          You’ll be notified once your car is approved and visible to buyers.
        </p>

        <Link href="/" className="inline-block mt-6 bg-brandColor text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
