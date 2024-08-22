import { cancelBooking } from "../lib/action";
import { CancelAppointmentButton } from "./SubmitButton";
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


export function CancelCutButton(props) {
 const { booking } = props;

 return (
  <Dialog>
    <DialogTrigger asChild>
     <Button variant="destructive">Cancel</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
    <form action={cancelBooking}>
    <input type="hidden" name="id" value={booking.id} />
    <input type="hidden" name="bookingId" value={booking.bookingId} />
     <DialogHeader className="mb-4">
      <DialogTitle>Cancel Appointment</DialogTitle>
      <DialogDescription>
       Are you sure you want to cancel the appointment?
      </DialogDescription>
     </DialogHeader>
     <DialogFooter>
      <CancelAppointmentButton />
     </DialogFooter>
     </form>
    </DialogContent>
   
  </Dialog>
 );
}
