import {
 LocateFixedIcon,
 LocateIcon,
 Mail,
 MailCheck,
 Map,
 MapPinIcon,
 PhoneIcon,
} from "lucide-react";
import {
 Avatar,
 AvatarFallback,
 AvatarImage,
} from "../../../../../components/ui/avatar";
import { getEmployeeById } from "../../../../../lib/action";
import React from "react";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import CreateWeeklySchedule from "@/components/CreateWeeklySchedule";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default async function SingleEmployeePage({ params }) {
 const employeeId = params.id;

 const employee = await getEmployeeById(employeeId);

 return (
  <div className="flex flex-col min-h-[100dvh]">
   <main className="flex-1 py-12 px-6">
    <div className="container mx-auto grid grid-cols-1">
     <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4">
       <div className="flex flex-col">
        <div>
         <h2 className="text-2xl font-bold">{employee.name}</h2>
         <div className="flex items-center">
          <Mail size="12" className="mr-1 text-amber-900" />
          <p className="text-gray-500 text-xs flex">{employee.email}</p>
         </div>
         <div className="flex items-center">
          <PhoneIcon size="12" className="mr-1 text-amber-900" />
          <p className="text-gray-500 text-xs flex">{employee.phone}</p>
         </div>
         <div className="flex items-center">
          <MapPinIcon size="12" className="mr-1 text-amber-900" />
          <p className="text-gray-500 text-xs flex">{employee.location}</p>
         </div>
        </div>

        <div className="pr-2 py-2">
         <h1 className="text-gray-500">Schedule</h1>
         <div className="overflow-x-auto rounded-lg ">
          <table className="w-full table-auto">
           <thead className="">
            <tr>
             <th className="w-1/3  text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Weekday
             </th>
             <th className="  text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              Start
             </th>
             <th className="  text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              End
             </th>
             <th className=" text-right text-xs font-medium text-gray-500 dark:text-gray-400">
              Notes
             </th>
            </tr>
           </thead>
           <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
             <td className=" text-xs font-medium text-gray-900 dark:text-gray-50">
              M-F
             </td>
             <td className=" text-center text-xs text-gray-900 dark:text-gray-50">
              9 AM
             </td>
             <td className=" text-center text-xs text-gray-900 dark:text-gray-50">
              5 PM
             </td>
             <td className="  text-xs text-gray-900 dark:text-gray-50"></td>
            </tr>
           </tbody>
          </table>
          <table className="w-full table-auto mt-2">
           <thead className="">
            <tr>
             <th className="w-1/3  text-left text-xs font-medium text-gray-500 dark:text-gray-400">
              Weekends
             </th>
             <th className="  text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              Start
             </th>
             <th className="  text-center text-xs font-medium text-gray-500 dark:text-gray-400">
              End
             </th>
             <th className=" text-right text-xs font-medium text-gray-500 dark:text-gray-400">
              Notes
             </th>
            </tr>
           </thead>
           <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
             <td className=" text-xs font-medium text-gray-900 dark:text-gray-50"></td>
             <td className=" text-center text-xs text-gray-900 dark:text-gray-50">
              -
             </td>
             <td className=" text-center text-xs text-gray-900 dark:text-gray-50">
              -
             </td>
             <td className="  text-xs text-gray-900 dark:text-gray-50"></td>
            </tr>
           </tbody>
          </table>
         </div>
         <p className="text-gray-500 mt-2">Employee ID:</p>
         <h2 className="text-2xl font-bold mb-4 truncate">{employee.id}</h2>
        </div>
       </div>
      </div>
     </div>
    </div>
    <CreateWeeklySchedule />
   </main>
   
  </div>
 );
}
