import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
 try {
  const data = await request.json();
  // console.log("Hello from makecall API:", data);

  // Destructuring the object to extract needed values
  const {
   name,
   phone,
   email,
   startsAt, // Use quotes for keys with spaces, and assign to variable `startsAt`
   endsAt, // Use quotes for keys with spaces, and assign to variable `endsAt`
   timeSlot,
   locationId,
   serviceId,
   location,
   service,
   barber,
   barberId,
   serviceWebAppID,
  } = data;

  const blandAiResponse = await axios.post(
    "https://api.bland.ai/v1/calls", // Replace with the actual URL
    {
      "phone_number": phone,
        "from": null,
        "task": `BACKGROUND INFO: \n  Your name is Sabrina and you're part of the Customer Service (Hair Salon) team at Clean AZ Cutz, your job is to call and confirm appointment bookings by telling them the details. Sounds happy and energetic from the beginning of the call. Use ConfirmBooking tool after you confirm all details with user and always use ConfirmBooking tool before ending call.  Use ModifyBooking tool only if user says "no" to details,ask what needs to be changed. 
        Here are the details:
        Client name: ${name}
        Location: ${location}
        Date: ${startsAt}
        Service: ${service}
        Hair Stylist: ${barber}
        Do not repeat the details twice.
        always advise to show up 5-10 minutes early before ending call`,
        "model": "enhanced",
        "language": "eng",
        "voice": "alexa",
        "voice_settings": {},
        "local_dialing": false,
        "max_duration": 12,
        "answered_by_enabled": false,
        "wait_for_greeting": true,
        "record": false,
        "amd": false,
        "interruption_threshold": 50,
        "temperature": null,
        "transfer_list": {},
        "metadata": {
          "location_id": locationId,
          "service_id": serviceId,
          "timeSlot": timeSlot,
          "name": name,
          "phone": phone,
          "email": email,
          "location": location,
          "service": service,
          "barber": barber,
          "barberId": barberId,
          "serviceWebAppID": serviceWebAppID,
          "starts_at": startsAt,
          "ends_at": endsAt,
        },
        "pronunciation_guide": [],
        "start_time": null,
        "request_data": {},
        "tools": [
                  { 
                    "name": "ConfirmBooking",
                    "description": "Confirms an appointment for the customer",
                    "url": "https://llmgem.ngrok.app/api/confirmation",
                    "method": "POST",
                    "body": {
                        "user_confirmation": "{{input.user_confirmation}}",
                    },
                    "input_schema": {
                        "example": {
                            "speech": "Got it - one second while I confirm your appointment.",
                            "user_confirmation":"Yes",
                        },
                        "type": "object",
                        "properties": {
                            "speech": "string",
                            "user_confirmation": "string"
                        },
                        
                    },
                    "response": {
                        "user_confirmed": "$.user_confirmed",
                    }
                  },
                  { 
                    "name": "ModifyBooking",
                    "description": "Modify an appointment for the customer",
                    "url": "https://llmgem.ngrok.app/api/confirmation",
                    "method": "POST",
                    "body": {
                        "location": "{{input.location}}",
                        "service": "{{input.service}}",
                        "barber": "{{input.barber}}"
                    },
                    "input_schema": {
                        "example": {
                            "speech": "Got it - I'll change your booking",
                            "location":"New York",
                            "service":"Haircut",
                            "barber": "Barber #2"
                        },
                        "type": "object",
                        "properties": {
                            "speech": "string",
                            "location":"Missisauga, New York, Toronto, Oshawa",
                            "service": "Haircut, Coloring, Trim, or Other"
                        },
                        
                    },
                    "response": {
                        "succesfully_booked_slot": "$.success",
                        "stylist_name": "$.stylist_name"
                    }
                  },           
        ],
              
        "webhook": "https://llmgem.ngrok.app/api/booking",
      },
    {
      // Configuration object where headers are set
      headers: {
        authorization: process.env.BLAND_API_KEY, // Replace with the correct environment variable for the API key
        "Content-Type": "application/json", // Specify the content type if needed
      },
    }
  );

  

  // Simulate a successful operation or additional processing if needed
  const successData = {
   status: "success",
   message: "Data received successfully",
   receivedData: data, // Optional: include the received data in the response
  };

 // Return the success data as a JSON response
  return NextResponse.json(successData);
 } catch (error) {
  console.error("Error handling the request:", error.response.data);

  // Return an error response with a status code of 500
  return new NextResponse("Internal Server Error", { status: 500 });
 }
}
