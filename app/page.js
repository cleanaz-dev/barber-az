"use client";

import VoiceflowScript from "@/components/VoiceFlow";
import HeroSection from "../components/Hero";
import React from "react";


export default function HomePage() {

 return (
  <div className=" bg-gray-900">
   <HeroSection />
   <div id="voiceflow-container"></div>
   <VoiceflowScript />
  </div>
 );
}
