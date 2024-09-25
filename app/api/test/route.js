import prisma from "@/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Log received data
    // console.log("Voiceflow data:", data);
    

    const makeCallResponse = await axios.post("https://barber-az.vercel.app/api/makecall", data);
    
    console.log("Call API Response:",makeCallResponse.data)
   
    // Return success response
    return NextResponse.json({
      success: true,
      message: "Booking successfully created",
      data: bookingData,
    });

  } catch (error) {
    // Log and return error response
    console.error("Error making booking request:", error.response?.data || error.message);
    
    return NextResponse.json({
      success: false,
      message: "Failed to create booking",
      error: error.response?.data || error.message,
    });
  }
}
