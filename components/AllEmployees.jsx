import Link from "next/link";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import React from "react";
import { MoveHorizontalIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
 Table,
 TableHead,
 TableRow,
 TableFooter,
 TableCell,
 TableBody,
 TableHeader,
 TableCaption,
} from "./ui/table";
import AddEmployeeDialog from "./AddEmployeeDialog";

export default function AllEmployees(props) {
 const { employees } = props;

 return (
  <div className="flex flex-col h-full">
   <header className="px-6 py-4 flex items-center justify-between">
    <h1 className="text-xl font-semibold ">Employees</h1>
    {/* <AddEmployeeDialog /> */}
   </header>
   <div className="border shadow-sm">
    <Table>
     <TableHeader>
      <TableRow>
       <TableHead>Name</TableHead>
       <TableHead>Contact</TableHead>
       <TableHead>Location</TableHead>
       <TableHead>Schedule</TableHead>
       <TableHead className="text-right">Actions</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody className="text-xs">
      {employees.map((employee) => (
       <TableRow key={employee.id}>
        <TableCell className="font-medium">{employee.name}</TableCell>
        <TableCell>
         <div className="flex flex-col">
          <span>{employee.email}</span>
          <span>{employee.phone}</span>
         </div>
        </TableCell>

        <TableCell className="font-medium">{employee.location}</TableCell>
        <TableCell>
         <div className="flex flex-col">
          <p className="text-xs">Mon-Fri</p>
          <p className="text-xs text-slate-500">9AM-5PM</p>
         </div>
        </TableCell>
        <TableCell className="text-right">
         <DropdownMenu>
          <DropdownMenuTrigger asChild>
           <Button size="icon" variant="ghost">
            <MoveHorizontalIcon className="w-4 h-4" />
            <span className="sr-only">Actions</span>
           </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex-col">
            <Link href={`/admin/employees/${employee.id}`}> 
              <DropdownMenuItem className="cursor-pointer">
                <span >View</span>
              </DropdownMenuItem>
            </Link>
           {/* <DropdownMenuItem className="cursor-pointer "><span className="hover:text-rose-800">Delete</span></DropdownMenuItem> */}
           </div>
          </DropdownMenuContent>
         </DropdownMenu>
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </div>
  </div>
 );
}
