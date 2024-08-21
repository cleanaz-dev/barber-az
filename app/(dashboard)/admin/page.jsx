import Calendar from "@/components/Calendar";

import React from "react";

import { getAllBookings } from "../../../lib/action";
import CalendarDashboard from "@/components/CalendarDashboard";
import AppointmentPage from "@/app/appointment/[id]/page";

export default async function AdminPage() {
 const bookings = await getAllBookings();

 return (
  <div>
  
    
   <Calendar bookings={bookings}/>
  </div>
 );
}
