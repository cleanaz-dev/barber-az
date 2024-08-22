import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

import React from "react";
import { DeleteIcon, EyeIcon, TrashIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export default async function AllCustomers({customers}) {
  
 return (
  <>
   <div className="flex flex-col h-full">
    <header className="px-6 py-4 flex items-center justify-between">
     <h1 className="text-xl font-semibold ">Customers</h1>
     {/* <Button size="sm" >Add Customer</Button> */}
    </header>
    <div className="border shadow-sm m-6 rounded-lg p-2">
     <Table>
      <TableHeader >
       <TableRow>
        <TableHead className="text-slate-300">Name</TableHead>
        <TableHead className="text-slate-300">Email</TableHead>
        <TableHead className="text-slate-300">Phone</TableHead>
        <TableHead className="text-slate-300">VIP</TableHead>
        {/* <TableHead className="text-right">Actions</TableHead> */}
       </TableRow>
      </TableHeader>
      <TableBody className="text-xs">
        {customers?.map((customer) => (
       <TableRow key={customer.id}>
        <TableCell className="font-medium">{customer.name}</TableCell>
        <TableCell>{customer.email}</TableCell>
        <TableCell>{customer.phone}</TableCell>
        {!customer.isVIP ?  <TableCell></TableCell> : <TableCell><Badge>VIP</Badge></TableCell>}
        
        {/* <TableCell className="text-right">
         <Button className="ml-2" size="icon" variant="destructive">
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Delete</span>
         </Button>
         <Button className="ml-2" size="icon" variant="outline">
          <EyeIcon className="h-4 w-4" />
          <span className="sr-only">Delete</span>
         </Button>
        </TableCell> */}
       </TableRow>
       ))}
      </TableBody>
     </Table>
    </div>
   </div>
   </>
 );
}
