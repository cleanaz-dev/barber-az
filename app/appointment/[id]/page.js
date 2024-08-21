import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import React from "react";
import { getBooking } from "../../../lib/action";
import { CancelCutButton } from "@/components/CancelCut";
import Link from "next/link";
import { ConfirmAppointmentButton } from "@/components/SubmitButton";
import ConfirmCut from "@/components/ConfirmCut";

export default async function AppointmentPage({ params }) {
 const appointmentId = params.id;
 const booking = await getBooking(appointmentId);
 return (
  <main
   key="1"
   className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4"
  >
   <div className="flex justify-center items-center mb-4 bg-[#834333] px-4 rounded-xl">
    <ScissorsIcon className="h-6 w-6 text-white mr-4" />{" "}
    <h1 className="text-2xl tracking-wide text-white">Clean AZ Cutz</h1>
   </div>
   <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
    <div className="flex justify-between">
     <div>
      <h1 className="text-2xl font-bold mb-4 text-gray-100">
       Appointment Details
      </h1>
     </div>
     <div>
      <Badge className="bg-[#834333]">{booking.status}</Badge>
     </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
     <div className="col-span-1">
      <p className="text-gray-400 font-medium mb-1">Client Name</p>
      <p className="text-gray-100 ">{booking.name}</p>
     </div>
     <div className="col-span-1">
      <p className="text-gray-400 font-medium mb-1">Barber Name</p>
      <p className="text-gray-100 ">{booking.barber}</p>
     </div>
     <div className="col-span-1">
      <p className="text-gray-400 font-medium mb-1">Appointment Location</p>
      <p className="text-gray-100 ">{booking.location}</p>
     </div>
     <div className="col-span-1">
      <p className="text-gray-400 font-medium mb-1">Service Booked</p>
      <p className="text-gray-100 ">{booking.service.name}</p>
     </div>
     <div className="col-span-2">
      <p className="text-gray-400 font-medium mb-1">Appointment Time</p>
      <p className="text-gray-100 ">
       {booking.time} {booking.date}
      </p>
     </div>
     <div className="col-span-1">
      <p className="text-gray-400 font-medium mb-1">Price</p>
      <p className="text-gray-100 ">
       ${booking.service.price}.00 USD
      </p>
     </div>
    </div>
    <div className="flex justify-end mt-4 gap-2">
     {/* <Button className="hover:bg-slate-500">Edit</Button> */}
     {booking.status !== "Pending" ? (
      null
     ) : (
      <ConfirmCut booking={booking} />
     )}
     <Button className="hover:bg-green-600 transition-all duration-300 bg-green-900">
      <Link href={booking.service.stripeLink}>Pay Now</Link>
     </Button>
     <CancelCutButton booking={booking} />
    </div>
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
