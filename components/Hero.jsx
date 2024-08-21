/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FUMXu193cOp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/hero-section.jpg";
import { MessageCircle, User, UserCircle } from "lucide-react";

export default function HeroSection() {
 return (
  <div className="flex flex-col min-h-[100dvh]">
   <header className="px-4 lg:px-6 h-14 flex items-center mt-2">
    <Link className="flex items-center justify-center" href="#">
     <ScissorsIcon className="h-6 w-6 text-white mr-4" />
     <span className="text-white"> Clean AZ Cutz</span>
    </Link>
    <div className="ml-auto">
    <Link
     className="inline-flex h-10 items-center justify-center rounded-md bg-[#834333] px-4 text-sm  text-white font-medium hover:bg-amber-900"
     href="/admin"
    >
     <p className="inline-flex">
      Admin Login
     </p>
    </Link>
    </div>
    {/* <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm text-white font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm text-white font-medium hover:underline underline-offset-4" href="#">
            Barbers
          </Link>
          <Link className="text-sm text-white font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
          <Link className="text-sm text-white font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav> */}
   </header>
   <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32">
     <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
       <Image
        alt="Barbershop Interior"
        className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-[3/2]"
        height={800}
        src={heroImage}
        width={800}
        priority="true"
       />
       <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
         <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Experience the Finest Barbershop Tradition
         </h1>
         <p className="max-w-[600px] md:text-xl text-gray-400">
          Step into our classic barbershop and let our experienced barbers
          transform your look with precision and style.
         </p>
        </div>
        <div className="">
         {/* <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-[#834333] px-8 text-sm  text-white font-medium hover:bg-amber-900"
          href="#"
         > */}
          <p className="flex  justify-center h-10 items-center bg-[#834333] rounded-lg text-white">
           Click <MessageCircle className="w-4 h-5 mx-2" /> to Book Now!
          </p>
         {/* </Link> */}
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <div className="inline-block text-white rounded-lg px-3 py-1 text-sm bg-[#834333] mb-2">
         Our Services
        </div>
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
         Tailored to Your Needs
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
         From classic cuts to modern styles, our skilled barbers offer a wide
         range of services to ensure you leave feeling refreshed and confident.
        </p>
       </div>
       <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="grid gap-1">
         <h3 className="text-xl font-bold text-white">Haircuts</h3>
         <p className="text-gray-400">
          Our precision haircuts are tailored to your unique style and face
          shape, providing excellence.
         </p>
        </div>
        <div className="grid gap-1">
         <h3 className="text-xl font-bold text-white">Shaves</h3>
         <p className="text-gray-400">
          Experience the ultimate in relaxation with our traditional
          straight-razor shaves.
         </p>
        </div>
        <div className="grid gap-1">
         <h3 className="text-xl font-bold text-white">Grooming</h3>
         <p className="text-gray-400">
          Maintain your look with our range of grooming services, including
          beard trims and hot towel treatments.
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <div className="inline-block rounded-lg bg-[#834333] px-3 py-1 text-sm text-white mb-2">
         Our Barbers
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
         Skilled Hands, Timeless Expertise
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
         Our team of experienced barbers are dedicated to providing exceptional
         service and ensuring you leave feeling refreshed and confident.
        </p>
       </div>
       <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="grid gap-4">
         {/* <img
                    alt="Barber 1"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  /> */}
         <div className="text-center">
          <h3 className="text-xl font-bold text-white">John Doe</h3>
          <p className="text-gray-400">VP Barber</p>
         </div>
        </div>
        <div className="grid gap-4">
         {/* <img
                    alt="Barber 2"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  /> */}
         <div className="text-center text-white">
          <h3 className="text-xl font-bold">Eric Smith</h3>
          <p className="text-gray-400">Senior Barber</p>
         </div>
        </div>
        <div className="grid gap-4">
         {/* <img
                    alt="Barber 3"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  /> */}
         <div className="text-center">
          <h3 className="text-xl font-bold text-white">Michael Johnson</h3>
          <p className="text-gray-400 ">Apprentice Barber</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <div className="inline-block rounded-lg bg-[#834333] px-3 py-1 text-sm text-white mb-2">
         Testimonials
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
         What Our Customers Say
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
         Hear from our satisfied customers about their experiences at Barber's
         Delight.
        </p>
       </div>
       <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="grid gap-4">
         <blockquote className="rounded-md border border-gray-800 bg-gray-950 p-6 shadow-sm">
          <p className="text-lg font-semibold leading-snug text-white">
           "The best barbershop experience I've ever had. The attention to
           detail and level of service is unmatched."
          </p>
          <div className="mt-4 flex items-center">
           <UserCircle className="text-white" />
           <div className="ml-4">
            <div className="font-semibold text-white text-left">
             Allen Anderson
            </div>
            <div className="text-sm text-gray-400 text-left">
             Satisfied Customer
            </div>
           </div>
          </div>
         </blockquote>
        </div>
        <div className="grid gap-4">
         <blockquote className="rounded-md border border-gray-800 bg-gray-950 p-6 shadow-sm ">
          <p className="text-lg font-semibold leading-snug text-white ">
           "I've been coming to Barber's Delight for years, and the quality of
           the cuts and the friendly atmosphere keep me coming back."
          </p>
          <div className="mt-4 flex items-center">
           <UserCircle className="text-white" />
           <div className="ml-4">
            <div className="font-semibold text-white text-left">
             Jason Brown
            </div>
            <div className="text-sm text-gray-400 text-left">
             Loyal Customer
            </div>
           </div>
          </div>
         </blockquote>
        </div>
       </div>
      </div>
     </div>
    </section>
   </main>
   <footer className="bg-gray-900 p-6 md:py-12 w-full ">
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-white">
     <div className="grid gap-1">
      <h3 className="font-semibold">About</h3>
      <Link href="#">Our Story</Link>
      <Link href="#">Our Team</Link>
      <Link href="#">Careers</Link>
     </div>
     <div className="grid gap-1">
      <h3 className="font-semibold">Services</h3>
      <Link href="#">Haircuts</Link>
      <Link href="#">Shaves</Link>
      <Link href="#">Grooming</Link>
     </div>
     <div className="grid gap-1">
      <h3 className="font-semibold">Resources</h3>
      <Link href="#">Blog</Link>
      <Link href="#">FAQs</Link>
      <Link href="#">Book Online</Link>
     </div>
     <div className="grid gap-1">
      <h3 className="font-semibold">Legal</h3>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms of Service</Link>
     </div>
     <div className="grid gap-1">
      <h3 className="font-semibold">Contact</h3>
      <Link href="#">Phone</Link>
      <Link href="#">Email</Link>
      <Link href="#">Address</Link>
     </div>
    </div>
   </footer>
  </div>
 );
}

function ScissorsIcon(props) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <circle cx="6" cy="6" r="3" />
   <path d="M8.12 8.12 12 12" />
   <path d="M20 4 8.12 15.88" />
   <circle cx="6" cy="18" r="3" />
   <path d="M14.8 14.8 20 20" />
  </svg>
 );
}
