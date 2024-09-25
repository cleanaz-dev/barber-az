import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

export default function CalendarDashboard(props) {
 const bookings = props.bookings;
 const cellRender = props.renderCell;
 

 function getLocationCounts(bookings) {
  // Initialize an empty object to store location counts
  const locationCounts = {};

  // Iterate over the bookings array
  bookings.forEach((booking) => {
   // Extract the location from each booking
   const location = booking.location;

   // If the location is already in the locationCounts object, increment its count
   if (locationCounts[location]) {
    locationCounts[location]++;
   } else {
    // If the location is not yet in the locationCounts object, initialize its count to 1
    locationCounts[location] = 1;
   }
  });

  return locationCounts;
 }
 const locationCounts = getLocationCounts(bookings);
;
 const locationEntries = Object.entries(locationCounts);
 
 return (
  <div className="flex flex-col h-full">
   <header className="px-6 py-4 flex items-center justify-between">
    <h1 className="text-xl font-semibold">Calendar</h1>
    <Button size="sm">
     Create Schedule
    </Button>
   </header>
   <div className="px-6 py-4 flex flex-col lg:flex-row ">
    <div className="pt-4 px-4 bg-slate-100 lg:col-span-1 rounded-lg shadow-sm">
     <h1 className="text-lg font-semibold">Bookings per location:</h1>
     {cellRender}
     <div>
      {locationEntries.map(([location, count]) => (
       <div key={location} className=" mb-2">
        <p>
         {location}: {count}
        </p>
        
       </div>
      ))}
     </div>
     
    </div>
   </div>
  </div>
 );
}
