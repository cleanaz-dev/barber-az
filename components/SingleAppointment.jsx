import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 DialogFooter,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { SendAppointmentReminderButton } from "./SubmitButton";
import SendAppointmentEmail from "./SendAppointmentEmail";
import { CancelCutButton } from "./CancelCut";

export default function SingleAppointment({ bookings }) {

 return (
  <>
   <Dialog>
    <DialogTrigger asChild>
     <Button variant="outline">View</Button>
    </DialogTrigger>
    <DialogContent>
     <DialogHeader>
      <DialogTitle>Appointment Details</DialogTitle>
      <DialogDescription>
        <div className="flex justify-between">
          <p>View appointment details.</p>
          <p>{bookings.reminderSent ? <Badge className="bg-[#834333] font-light hover:bg-[#834333]"> Reminder Sent</Badge> : null }</p>
        </div>
    </DialogDescription>
     </DialogHeader>
     <div className="grid grid-cols-2 gap-2">
      <div>
       <h1 className="text-gray-400">Client Name</h1>
       <p>
        {bookings.name}{" "}
        {bookings.name === "Paul" && (
         <Badge className="bg-[#834333]">VIP</Badge>
        )}
       </p>
      </div>
      <div>
       <h1 className="text-gray-400">Service</h1>
       <p>{bookings.service.name}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Time</h1>
       <p>{bookings.time}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Date</h1>
       <p>{bookings.date}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Stylist</h1>
       <p>{bookings.barber}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Location</h1>
       <p>{bookings.location}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Satus</h1>
       <p>{bookings.status}</p>
      </div>
      <div>
       <h1 className="text-gray-400">Price</h1>
       <p>${bookings.service.price}.00 USD </p>
      </div>
     </div>
     <DialogFooter>
      <div className="mt-2 space-x-2">
       {new Date(bookings.date) > new Date() && !bookings.reminderSent ? (
        <SendAppointmentEmail bookings={bookings}/>
       ) : (
        null
       )}
       <CancelCutButton booking={bookings} />
      </div>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  </>
 );
}
