import { getBooking } from "../../../../../lib/action";
import React from "react";
import AppointmentsPage from "../../../../../components/AppointmentsPage";

export default async function AppointmentsHomePage({ params }) {
 const appointmentId = params.id;
 const bookings = await getBooking(appointmentId);
 return (
  <div>
   {bookings.name}
  </div>
 );
}
