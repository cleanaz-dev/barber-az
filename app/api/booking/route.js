import prisma from "../../../lib/db";
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { variables, metadata } = await request.json();
    console.log(metadata)

    const isUserConfirmed = variables?.user_confirmed === true;
    if (!isUserConfirmed) {
      return NextResponse.json({ message: "User not confirmed" }, { status: 400 });
    }

    const hapioResponse = await axios.post(
      "https://eu-central-1.hapio.net/v1/bookings",
      {
        location_id: metadata.location_id,
        service_id: metadata.service_id,
        starts_at: metadata.starts_at,
        ends_at: metadata.ends_at,
        resource_id: metadata.barberId,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.HAPIO_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("Hapio Response:", hapioResponse.data);

    const formattedDate = formatDate(metadata.starts_at);
    const newBooking = await prisma.booking.create({
      data: {
        name: metadata.name,
        email: metadata.email,
        phone: metadata.phone,
        time: metadata.timeSlot,
        serviceId: metadata.serviceWebAppID,
        barber: metadata.barber,
        location: metadata.location,
        bookingId: hapioResponse.data.id,
        date: formattedDate,
      },
    });

    return NextResponse.json({ 
      hapioBooking: hapioResponse.data, 
      newBooking 
    }, { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // This will give you YYYY-MM-DD
}