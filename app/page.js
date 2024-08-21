
import VoiceflowScript from '@/components/VoiceFlow'
import HeroSection from '../components/Hero'
import React from 'react'

export default function HomePage() {
  return (
    <div className='container flex mx-auto bg-gray-900'>
      <HeroSection />
      <VoiceflowScript />
    </div>
  )
}
