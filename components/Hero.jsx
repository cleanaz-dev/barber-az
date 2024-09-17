/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FUMXu193cOp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";
import heroImage from "../public/hero-section.jpg";
import {
 DiamondIcon,
 GemIcon,
 MessageCircle,
 User,
 UserCircle,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const serviceItems = [
 {
  id: 1,
  title: "Haricuts",
  description:
   "Our precision haircuts are tailored to your unique style and face shape, providing excellence.",
 },
 {
  id: 2,
  title: "Shaves",
  description:
   "Experience the ultimate in relaxation with our traditional straight-razor shaves.",
 },
 {
  id: 3,
  title: "Grooming",
  description:
   "Maintain your look with our range of grooming services, including beard trims and hot towel treatments.",
 },
];
const barberItems = [
 {
  id: 1,
  name: "John Doe",
  image: "/barber1.jpg",
  title: "VIP Barber",
 },
 {
  id: 2,
  name: "Jane Smith",
  image: "/barber2.jpg",
  title: "HOF Barber",
 },
 {
  id: 3,
  name: "Mike Johnson",
  image: "/barber3.jpg",
  title: "MVP Barber",
 },
];
export default function HeroSection() {
 return (
  <div className="flex flex-col min-h-[100dvh] max-w-7xl mx-auto">
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
      <p className="inline-flex">Admin Login</p>
     </Link>
    </div>
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
    <section className="flex flex-col w-full pb-12 md:pb-24 lg:pb-16 bg-gray-800">
     {" "}
     <div className="flex gap-10 items-center justify-center text-center text-white px-3 py-1 text-5xl pt-16 mb-16 ">
      <GemIcon className="animate-pulse mb-2"/>
      <span className={`${greatVibes.className} border-b` }>Our Services</span>
      <GemIcon className="animate-pulse mb-2"/>
     </div>
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
         Tailored to Your Needs
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
         From classic cuts to modern styles, our skilled barbers offer a wide
         range of services to ensure you leave feeling refreshed and confident.
        </p>
       </div>
       <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        {serviceItems.map((service) => (
         <div key={service.id} className="grid gap-1">
          <div className="flex items-center space-x-4">
           <div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
           </div>
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>
    <section className="flex flex-col w-full pb-12 md:pb-24 lg:pb-16">
     {" "}
     <div className="flex gap-10 items-center justify-center text-center text-white rounded-lg px-3 py-1 text-5xl pt-16 mb-16">
      <GemIcon className="animate-pulse mb-2"/><span className={`${greatVibes.className} text-[#834333] border-b`}>
       Our Barbers
      </span>
      <GemIcon className="animate-pulse mb-2"/>
     </div>
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
         Skilled Hands, Timeless Expertise
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
         Our team of experienced barbers are dedicated to providing exceptional
         service and ensuring you leave feeling refreshed and confident.
        </p>
       </div>
       <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        {barberItems.map((barber) => (
         <div key={barber.id} className="grid gap-1">
          <div className="flex items-center space-x-4">
           <div>
              <h3 className="text-xl font-bold text-white">{barber.name}</h3>
            <p className="text-gray-400">{barber.title}</p>
           </div>
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>
    <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-gray-800">
     {" "}
     <div className="flex gap-10 items-center justify-center text-center text-white rounded-lg px-3 py-1 text-5xl pt-16 mb-16">
      <GemIcon className="animate-pulse mb-2"/>
      <span className={`${greatVibes.className} border-b` }>Testimonials</span>
      <GemIcon className="animate-pulse mb-2"/>
     </div>
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
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
