import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "./ui/table";

import React from "react";
import {
 CalendarIcon,
 DollarSignIcon,
 EyeIcon,
 TelescopeIcon,
 UsersIcon,
 View,
} from "lucide-react";
import { getAllEmployees } from "@/lib/action";

export default async function AppointmentsPage(props) {
 const numberOfEmployees = await getAllEmployees();
 const bookings = props.booking;

 const totalPrice = bookings.reduce(
  (total, booking) => total + booking.service.price,
  0
 );
 return (
  <div className="flex flex-col min-h-screen">
   <main className="p-6 flex flex-col">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
     <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
       <UsersIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">111</div>
       <p className="text-xs text-gray-500 ">
        +5.2% from last month
       </p>
      </CardContent>
     </Card>
     <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">
        Total Appointments
       </CardTitle>
       <CalendarIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">{props.booking.length}</div>
       <p className="text-xs text-gray-500 ">
        +12% from last week
       </p>
      </CardContent>
     </Card>
     <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
       <UsersIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">{numberOfEmployees.length}</div>
       <p className="text-xs text-gray-500 ">
        +2 new hires this month
       </p>
      </CardContent>
     </Card>
     <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
       <DollarSignIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <div className="text-2xl font-bold">${totalPrice}</div>
       <p className="text-xs text-gray-500 ">
        +20.1% from last month
       </p>
      </CardContent>
     </Card>
    </div>
    <div className="flex-1">
     <Card>
      <CardHeader>
       <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto min-h-[300px] max-h-[600px]">
       <Table className="text-xs">
        <TableHeader className="sticky top-0 z-10">
         <TableRow>
          <TableHead>Client/Service</TableHead>

          <TableHead>Time/Date</TableHead>
          <TableHead>Employee/Location</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-center">View</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody >
         {bookings?.map((booking) => (
          <TableRow key={booking.id}>
           <TableCell>
            <p>{booking.name}</p>
            <p className="text-slate-500">{booking.service.name}</p>
           </TableCell>

           <TableCell>
            <p>{booking.time}</p>
            <p className="text-slate-500">{booking.date}</p>
           </TableCell>

           <TableCell>
            <p>{booking.barber}</p>
            <p className="text-slate-500">{booking.location}</p>
           </TableCell>
           <TableCell>
            <p className="font-bold">$ {booking.service.price}</p>
           </TableCell>
           <TableCell className="text-center">
            <button className="bg-amber-900 py-3 px-4 rounded-lg hover:bg-slate-100 text-white hover:text-amber-900 transition-colors duration-300">
             <Link href="/">
              <TelescopeIcon className="size-4" />
             </Link>
            </button>
           </TableCell>
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </CardContent>
     </Card>
    </div>
   </main>
  </div>
 );
}
