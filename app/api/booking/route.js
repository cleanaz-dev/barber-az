
import prisma from "../../../lib/db";

export async function POST(request) {
 try {
  const data = await request.json();
  console.log(data);

  const { name, email, phone, time, serviceId, barber, location, bookingId, date } = data;

  const newBooking = await prisma.booking.create({
   data: {
    name,
    email,
    phone,
    time,
    serviceId,
    barber,
    location,
    bookingId,
    date
   },
  });
  return new Response(JSON.stringify(newBooking), {
   headers: {
    "Content-Type": "application/json",
   },
   status: 200, // Status code 200 for successful processing (can be adjusted based on logic)
  });
 } catch (error) {
  console.error("Creating booking:", error);
  return new Response(
   JSON.stringify({
    error: "Internal Server Error",
   }),
   {
    headers: {
     "Content-Type": "application/json",
    },
    status: 500, // Status code 500 for internal server error
   }
  );
 }
}
