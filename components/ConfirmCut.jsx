import React from "react";
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
 Dia,
 DialogClose,
} from "./ui/dialog";
import { ConfirmAppointmentButton } from "./SubmitButton";
import { Button } from "./ui/button";
import { confirmAppointmentAction } from "../lib/action";

export default function ConfirmCut(props) {
 const { booking } = props;

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button className="hover:bg-blue-600 bg-blue-900 transition-colors duration-300">Confirm</Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[425px]">
    <form action={confirmAppointmentAction}>
     <input type="hidden" name="id" value={booking.id} />
     <input type="hidden" name="bookingId" value={booking.bookingId} />
     <DialogHeader>
      <DialogTitle>Confirm Appointment</DialogTitle>
      <DialogDescription>
       <p className="mb-4">Please click to confirm</p>
      </DialogDescription>
     </DialogHeader>

     <DialogFooter>
      <DialogClose>
       <ConfirmAppointmentButton />
      </DialogClose>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}
