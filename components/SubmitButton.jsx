"use client";

import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

export function CancelAppointmentButton() {
 const { pending } = useFormStatus();
 return (
  <>
   {pending ? (
    <Button disabled className="">
     <Loader2Icon className="h-4 w-4  animate-spin" />
    </Button>
   ) : (
    <Button type="submit" variant="destructive">
     Yes, Cancel
    </Button>
   )}
  </>
 );
}

export function AddEmployeeButton() {
    const { pending } = useFormStatus();
    return (
     <>
      {pending ? (
       <Button disabled className="">
        <Loader2Icon className="h-4 w-4  animate-spin" />
       </Button>
      ) : (
       <Button type="submit" className="bg-green-600 mt-2">
        Add Employee
       </Button>
      )}
     </>
    );
   }


export function ConfirmAppointmentButton() {
    const { pending } = useFormStatus();
    return (
     <>
      {pending? (
       <Button disabled className="">
        <Loader2Icon className="h-4 w-4  animate-spin" />
       </Button>
      ) : (
       <Button type="submit"  className="hover:bg-blue-600 bg-blue-900 transition-all duration-300">
        Confirm
       </Button>
      )}
     </>
    );
   
}

export function SendAppointmentReminderButton() {
    const { pending } = useFormStatus();
    return (
     <>
      {pending? (
       <Button disabled className="">
        <Loader2Icon className="h-4 w-4  animate-spin" />
       </Button>
      ) : (
       <Button type="submit"  className="hover:bg-slate-800 bg-slate-500 transition-all duration-300">
        Yes, Send Reminder
       </Button>
      )}
     </>
    );
}