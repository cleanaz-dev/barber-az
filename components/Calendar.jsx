"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "./ui/dialog";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "./ui/table";
import { Calendar } from "rsuite";

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
        <Button variant="secondary" className="w-full bg-green-400 hover:bg-cyan-400 transition-colors duration-300">
         {list.length}
        </Button>
       </DialogTrigger>
       <DialogContent className="max-w-[400px] md:max-w-[800px]">
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
           <TableHead className="w-[150px] md:w-auto text-xs md:text-base">Stylist</TableHead>
           <TableHead className="w-[150px] text-xs md:text-base">Service</TableHead>
           <TableHead className="text-xs md:text-base">Location</TableHead>
           <TableHead className="text-xs md:text-base ">Time</TableHead>
           <TableHead className="text-center text-xs md:text-base">Amount</TableHead>
          </TableRow>
         </TableHeader>
         <TableBody>
          {list.map((item) => (
           <TableRow key={item.id}>
            <TableCell className="font-medium text-xs md:text-sm">{item.barber}</TableCell>
            <TableCell className="font-medium text-xs md:text-sm">{item.service.name}</TableCell>
            <TableCell className="font-medium text-xs md:text-sm">{item.location}</TableCell>
            <TableCell className="font-medium text-xs md:text-sm  ">{item.time}</TableCell>
            <TableCell className="text-center font-medium">
             $ {item.service.price}
            </TableCell>
           </TableRow>
          ))}
          <TableRow className="bg-gradient-to-r from-slate-50 to-transparent">
           <TableCell colSpan={4} className="font-medium text-left">
            Total: <span className="text-green-500">${totalPrice}</span>
           </TableCell>
          </TableRow>
         </TableBody>
        </Table>
       </DialogContent>
      </Dialog>
     </li>
    </ul>
   </>
  );
 }
 return (
  <>
   <Calendar bordered renderCell={renderCell} />
  </>
 );
}
