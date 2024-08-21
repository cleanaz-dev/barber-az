"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

export default function CancelPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/"; // Redirect to home page after 4 seconds
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup function to clear timeout on unmount
  }, []);

  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
    >
      <div className="flex justify-center items-center mb-4 bg-[#834333] px-4 rounded-xl">
        <ScissorsIcon className="h-6 w-6 text-white mr-4" />{" "}
        <h1 className="text-2xl tracking-wide text-white">Clean AZ Cutz</h1>
      </div>
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <p className=" text-2xl ">Your Appointment has been cancelled.</p>
        <p>Thank you for your service.</p>
        <p className="mt-1">You'll be redirected to the home page shortly.</p>
        
      </div>
    </main>
  );
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}
