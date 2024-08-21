import { PlusIcon } from "lucide-react";
import { addEmployee, cancelBooking } from "../lib/action";
import { AddEmployeeButton, CancelAppointmentButton } from "./SubmitButton";
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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectTrigger,
 SelectValue,
} from "./ui/select";

export default function AddEmployeeDialog() {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button>
     Add Employee
    </Button>
   </DialogTrigger>
   <DialogContent className="sm:max-w-[425px]">
    <form action={addEmployee}>
     <DialogHeader>
      <DialogTitle>Add Employee</DialogTitle>
      <DialogDescription>
       Please verify the details before submitting.
      </DialogDescription>
     </DialogHeader>
     <div className="space-y-4 my-2">
      <div>
       <Label htmlFor="name">Name</Label>
       <Input type="text" name="name" required />
      </div>
      <div>
       <Label htmlFor="email">Email</Label>
       <Input type="email" name="email" required />
      </div>
      <div>
       {" "}
       <Label htmlFor="phone">Phone Number</Label>
       <Input
        type="tel"
        name="phone"
        required
        
        title="Invalid phone number, please enter only numbers"
       />
      </div>
      <div>
       <Label htmlfor="location">Location</Label>
       <Select name="location">
        <SelectTrigger>
         <SelectValue placeholder="Select a location" />
        </SelectTrigger>
        <SelectContent>
         <SelectGroup>
          <SelectLabel>Locations</SelectLabel>
          <SelectItem value="Toronto">Toronto</SelectItem>
          <SelectItem value="Oshawa">Oshawa</SelectItem>
          <SelectItem value="Mississauga">Mississauga</SelectItem>
         </SelectGroup>
        </SelectContent>
       </Select>
      </div>
     </div>
     <DialogFooter>
      <AddEmployeeButton />
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}
