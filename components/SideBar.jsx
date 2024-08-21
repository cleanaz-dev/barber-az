"use client";

import {
 BellIcon,
 BookCheck,
 CalendarIcon,
 ChevronLeftCircleIcon,
 ChevronLeftIcon,
 ChevronRightCircleIcon,
 ChevronRightIcon,
 Home,
 HomeIcon,
 LayoutDashboardIcon,
 OrigamiIcon,
 PlusIcon,
 SettingsIcon,
 UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import SingleAppointment from "./SingleAppointment";

const navigationData = [
 {
  icon: <BookCheck className="h-5 w-5" />,
  label: "Appointments",
  href: "/admin/appointments",
 },
 {
  icon: <CalendarIcon className="h-5 w-5" />,
  label: "Calendar",
  href: "/admin",
 },
 {
  icon: <UsersIcon className="h-5 w-5" />,
  label: "Customers",
  href: "/admin/customers",
 },
 {
  icon: <OrigamiIcon className="h-5 w-5" />,
  label: "Employees",
  href: "/admin/employees",
 },
];

const UpcomingAppointments = ({ bookings }) => {
  const upcomingBookings = bookings.filter((booking) => {
    // Get the booking date as a Date object
    const bookingDate = new Date(booking.date);
    // Get today's date
    const today = new Date();
    // Get yesterday's date
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Check if the booking date is today, yesterday, or in the future
    return (
      bookingDate.toDateString() === today.toDateString() ||
      bookingDate.toDateString() === yesterday.toDateString() ||
      bookingDate > today
    );
  });

  return (
    <div className="mt-auto p-4">
      <Card className="">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm">Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingBookings.length > 0 ? (
            upcomingBookings.map((booking) => (
              <div key={booking.date} className="grid gap-4">
                <div className="flex items-center justify-between space-y-6 mb-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="font-medium text-xs">{booking.barber}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <div>
                          <p>{booking.date}</p>
                          <p>{booking.time}</p>
                          <p className="text-[#834333] font-bold tracking-widest underline">
                            {booking.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <SingleAppointment bookings={booking} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-500 tracking-wide">No upcoming bookings</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default function SideBar({ bookings }) {
 const [isCollapsed, setIsCollapsed] = useState(false);

 const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
 };

 const pathname = usePathname();

 return (
  <div className={`hidden md:grid h-screen w-full `}>
   <div className={`border-r bg-gray-900 ${isCollapsed ? "w-20" : "w-72"} `}>
    <div className="flex h-full max-h-screen flex-col gap-2">
     <div className="flex h-[60px] items-center border-b-2 px-6">
      {!isCollapsed && (
       <>
        <LayoutDashboardIcon className="h-6 w-6 text-white mr-2" />{" "}
        <span className="text-white tracking-wider">Dashboard</span>
       </>
      )}

      <button className="ml-auto focus:outline-none" onClick={toggleSidebar}>
       {isCollapsed ? (
        <ChevronRightCircleIcon className="h-4 w-4 text-white mr-2" />
       ) : (
        <ChevronLeftCircleIcon className="h-4 w-4 text-white" />
       )}
      </button>
     </div>
     <div className="flex-1  py-2">
      <nav className="flex-col items-start px-4 text-sm font-medium">
       {navigationData.map((navItem) => (
        <Link
         key={navItem.label}
         className={`flex items-center gap-3 mb-2 rounded-lg px-3 py-2 text-white transition-all hover:bg-slate-700 ${
          pathname === navItem.href ? "bg-[#834333]" : "bg-transparent"
         }`}
         href={navItem.href}
        >
         <span className={`flex gap-2 space-y-4 items-center`}>
          <span className="">{navItem.icon}</span>
          {isCollapsed ? "" : navItem.label}
         </span>
        </Link>
       ))}
      </nav>
     </div>

     <div
      className={`${
       isCollapsed ? "opacity-0 invisible" : "opcatiy-100"
      } transition-opacity duration-1000 ease-in-out overflow-auto`}
     >
      <UpcomingAppointments bookings={bookings} />
     </div>
    </div>
   </div>
  </div>
 );
}
