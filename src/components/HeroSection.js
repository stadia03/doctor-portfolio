import React from 'react'
import img from '../assests/profile.png'

import '../styles/HeroSection.css'
export default function HeroSection() {
  return (
    <div>
      <div class="container col-xxl-12   ">
        <div class="row flex-lg-row-reverse align-items-center heroContainer g-5 ">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={img} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>

          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">I am Nandini, a Dedicated Speech Therapist</h1>
            <p class="lead">Specialized in speech and language disorders such as autism, ADHD, DSL, and misarticulation. Our team is committed to providing valuable speech, language, and communication services. We work tirelessly to empower individuals to reach their full potential.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Book a session</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
