import { LayoutDashboardIcon } from "lucide-react";
import SideBar from "../../../components/SideBar";
import { getAllBookings } from "../../../lib/action";
import SmallMenu from "@/components/SmallMenu";
import { Scissors } from "lucide-react";

export default async function AdminLayout({ children }) {
 const bookings = await getAllBookings();
 return (
  <div className="flex">
   <aside>
    <SideBar bookings={bookings} />
   </aside>
   <main className="flex-grow ">
    <div className="flex md:hidden bg-gray-900 text-white items-center py-2 px-6">
     
     <div className="flex w-full justify-between">
      <div className="cursor-pointer "><SmallMenu /></div>
      
      <div className="flex gap-4 "><Scissors /><p>Clean AZ Cutz</p></div>
     </div>
    </div>
    {children}
   </main>
  </div>
 );
}
