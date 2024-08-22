import Calendar from "@/components/Calendar";

import React from "react";

import { getAllBookings } from "../../../lib/action";

export default async function AdminPage() {
 const bookings = await getAllBookings();
 return (
  <div>
   <Calendar bookings={bookings}/>
  </div>
 );
}
