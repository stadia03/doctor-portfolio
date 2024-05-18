// screens/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import WhatSection from '../components/WhatSection';
import ContactUs from '../components/ContactUs';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatSection />
      <Testimonials />
      <Element name="contact-us">
        <ContactUs />
      </Element>
    </div>
  );
}
