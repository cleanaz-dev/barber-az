"use client";

import React, { useState } from 'react'

import { Button } from "./ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { BookCheck, CalendarIcon, LayoutDashboard, OrigamiIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export default function SmallMenu() {
    const [sheetOpen, setSheetOpen] = useState(false)
    const pathname = usePathname()
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
       <p className='flex gap-2'> <LayoutDashboard className='animate-pulse'/> Dashboard</p>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 border-gray-900 border-2">
        <SheetHeader>
          <SheetTitle><h1 className="text-white">Menu</h1></SheetTitle>
          <SheetDescription>
            <p className="text-slate-300 mb-4"></p>
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-2 ">
      <nav className="grid items-start px-4 text-sm font-medium">
       {navigationData.map((navItem) => (
        <Link
         key={navItem.label}
         className={`flex items-center gap-3 mb-2 rounded-lg px-3 py-2 text-white transition-all hover:bg-slate-700 ${
          pathname === navItem.href ? "bg-[#834333]" : "bg-transparent"
         }`}
         href={navItem.href}
         onClick={() => setSheetOpen(false)}
        >
         <span className={`flex gap-2 space-y-4 items-center`}>
          <span className="">{navItem.icon}</span>
          {navItem.label}
         </span>
        </Link>
       ))}
      </nav>
     </div>
        
      </SheetContent>
    </Sheet>
  )
}
