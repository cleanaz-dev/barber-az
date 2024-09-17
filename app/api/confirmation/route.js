import prisma from "../../../lib/db"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Process the incoming data (e.g., log it or save it)
    console.log('Received confirmation data:', body);

    // Assuming we process the booking and need to respond with `user_confirmed`
    const userConfirmed = body?.user_confirmation === "Yes";  // Example logic to check confirmation status

    // Return the data in the required format
    return NextResponse.json({
      user_confirmed: userConfirmed,
      location: body.location,
    });

  } catch (error) {
    console.error("Error processing confirmation:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}