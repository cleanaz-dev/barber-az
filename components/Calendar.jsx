"use client";

import {
 BellIcon,
 CalendarIcon,
 ChevronLeftIcon,
 ChevronRightIcon,
 EyeIcon,
 HomeIcon,
 SettingsIcon,
 UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "./ui/table";
import { Calendar, Whisper, Popover, Badge } from "rsuite";
import { list } from "postcss";
import CalendarDashboard from "./CalendarDashboard";

function getBookingList(bookings, currentDate) {
 const bookingByDay = {};

 bookings.forEach((booking) => {
  const date = new Date(booking.date);
  if (date.getUTCMonth() === currentDate.getUTCMonth()) {
   const day = date.getUTCDate();

   if (!bookingByDay[day]) {
    bookingByDay[day] = [];
   }

   bookingByDay[day].push(booking);
  }
 });

 return bookingByDay;
}

export default function CalendarApp({ bookings }) {


 function renderCell(date) {
  const bookingByDay = getBookingList(bookings, date);
  const day = date.getDate();
  const list = bookingByDay[day] || [];

  const totalPrice = list.reduce(
   (accumulator, currentItem) => accumulator + currentItem.service.price,
   0
  );
  if (list.length === 0) {
   return null; // Return null if there are no appointments
  }
  return (
   <>
   
    <ul className="calendar-todo-list">
     <li>
      <Dialog>
       <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
         {list.length}
        </Button>
       </DialogTrigger>
       <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
         <DialogTitle>
          <div>
           <p>View Appointments</p>
           <p></p>
          </div>
         </DialogTitle>
         <DialogDescription>View list of appointments.</DialogDescription>
        </DialogHeader>

        <Table>
         <TableCaption>A list of appointments for the day.</TableCaption>
         <TableHeader>
          <TableRow>
           <TableHead className="w-[150px]">Hair Dresser</TableHead>
           <TableHead>Service</TableHead>
           <TableHead>Location</TableHead>
           <TableHead className="text-center">Amount</TableHead>
           <TableHead className="text-center">View</TableHead>
          </TableRow>
         </TableHeader>
         <TableBody>
          {list.map((item, index) => (
           <TableRow key={item.id}>
            <TableCell className="font-medium">{item.barber}</TableCell>
            <TableCell>{item.service.name}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell className="text-center">$ {item.service.price}</TableCell>
            <TableCell>
             <Link href={`/admin/appointments/${item.id}`}>
              <Button variant="outline" size="sm">
               <EyeIcon className="w-4 h-4 text-gray-500" />
              </Button>
             </Link>
            </TableCell>
           </TableRow>
          ))}
         </TableBody>
         <TableRow className="bg-slate-50">
          <TableCell colSpan={4} className="font-medium text-right">
           Total
          </TableCell>
          <TableCell className="text-center font-medium">
           $ {totalPrice}
          </TableCell>
         </TableRow>
        </Table>
       </DialogContent>
      </Dialog>
     </li>
    </ul>
   </>
  );
 }
 return <><Calendar bordered renderCell={renderCell} /></>
 ;
}
