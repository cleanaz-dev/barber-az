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
import { ScrollArea } from "./ui/scroll-area";

export default async function AppointmentsPage(props) {
 const numberOfEmployees = await getAllEmployees();
 const bookings = props.booking;

 const totalPrice = bookings.reduce(
  (total, booking) => total + booking.service.price,
  0
 );
 return (
  <div className="flex flex-col h-screen">
    <ScrollArea>
   <main className="p-6 flex flex-col overflow-y-auto ">
    <section className="flex flex-wrap w-full mb-6 gap-6 ">
     <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
       <UsersIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <p className="text-2xl font-bold">111</p>
       <p className="text-xs text-gray-500 ">
        +5.2% from last month
       </p>
      </CardContent>
     </Card>
     <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">
        Total Appointments
       </CardTitle>
       <CalendarIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <p className="text-2xl font-bold">{props.booking.length}</p>
       <p className="text-xs text-gray-500 ">
        +12% from last week
       </p>
      </CardContent>
     </Card>
     <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
       <UsersIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <p className="text-2xl font-bold">{numberOfEmployees.length}</p>
       <p className="text-xs text-gray-500 ">
        +2 new hires this month
       </p>
      </CardContent>
     </Card>
     <Card className="flex-1">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
       <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
       <DollarSignIcon className="w-4 h-4 text-gray-500 " />
      </CardHeader>
      <CardContent>
       <p className="text-2xl font-bold">${totalPrice}</p>
       <p className="text-xs text-gray-500 ">
        +20.1% from last month
       </p>
      </CardContent>
     </Card>
    </section>
    <section className="">
     <Card className=" ">
      <CardHeader>
       <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 ">
       <Table className="text-xs">
        <TableHeader className="sticky top-0 z-10">
         <TableRow>
          <TableHead>Client/Service</TableHead>

          <TableHead>Time/Date</TableHead>
          <TableHead>Employee/Location</TableHead>
          <TableHead>Price</TableHead>
          
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
           
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </CardContent>
     </Card>
    </section>
   </main>
   </ScrollArea>
  </div>
 );
}
