import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import WhatSection from '../components/WhatSection';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <WhatSection/>
      <Testimonials/>
      <ContactUs/>
     
    </div>
  )
}
