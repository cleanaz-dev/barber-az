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
import { SendAppointmentReminderButton } from "./SubmitButton";
import { Button } from "./ui/button";
import { sendReminderEmail } from "../lib/action";

export default function SendAppointmentEmail(props) {
 const { bookings } = props;

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button className="hover:bg-slate-800 bg-slate-500 transition-colors duration-300">Send Reminder</Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[425px]">
    <form action={sendReminderEmail}>
     <input type="hidden" name="email" value={bookings.email} />
     <input type="hidden" name="id" value={bookings.id} />
     <input type="hidden" name="bookingId" value={bookings.bookingId} />
     <DialogHeader>
      <DialogTitle>Send Reminder</DialogTitle>
      <DialogDescription>
       <p className="mb-4">Are you sure you want to send email reminder?</p>
       <p></p>
      </DialogDescription>
     </DialogHeader>

     <DialogFooter>
      <DialogClose>
       <SendAppointmentReminderButton />
      </DialogClose>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}
