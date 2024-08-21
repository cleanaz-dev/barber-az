import { getAllBookings } from "../../../../lib/action";
import React from "react";
import AppointmentsPage from "../../../../components/AppointmentsPage";

export default async function AppointmentsHomePage({ params }) {
 const appointmentId = params.id;
 const bookings = await getAllBookings(appointmentId);
 return (
  <div>
   <AppointmentsPage booking={bookings} />
  </div>
 );
}
