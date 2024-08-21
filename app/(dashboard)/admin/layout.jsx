import { LayoutDashboardIcon } from "lucide-react";
import SideBar from "../../../components/SideBar";
import { getAllBookings } from "../../../lib/action";
import SmallMenu from "@/components/SmallMenu";

export default async function AdminLayout({ children }) {
 const bookings = await getAllBookings();
 return (
  <div className="flex">
   <aside>
    <SideBar bookings={bookings} />
   </aside>
   <main className="flex-grow">
    <div class="flex md:hidden bg-gray-900 text-white items-center py-2 px-6">
     
     <div className="cursor-pointer">
      <SmallMenu />
     </div>
    </div>
    {children}
   </main>
  </div>
 );
}
