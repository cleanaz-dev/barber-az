"use client";

import VoiceflowScript from "@/components/VoiceFlow";
import HeroSection from "../components/Hero";
import React from "react";
import { usePathname } from "next/navigation";

export default function HomePage() {
 const pathName = usePathname();
 return (
  <div className=" bg-gray-900">
   <HeroSection />
   {pathName === '/' && <VoiceflowScript />}
  </div>
 );
}
