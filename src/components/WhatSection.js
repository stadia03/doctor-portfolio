import React from 'react'
import "../styles/WhatSection.css"
import img from "../assests/autism_child.png"
import Behaviour_Therapy_logo from "../assests/Behavior_therapy_logo.jpg"
import Speech_logo from "../assests/speech_logo.png"

export default function WhatSection() {
  return (
    <div>
      {/* <!-- About 1 - Bootstrap Brain Component --> */}
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img className="img-fluid rounded" loading="lazy" src={img} alt="About 1" />
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3">What is Autism?</h2>
                  <p className="lead fs-4 text-secondary mb-3">Autism Spectrum Disorder (ASD), is a developmental condition that impacts communication, behavior, and social interaction. It's characterized by a wide range of symptoms and levels of impairment, affecting each individual differently.</p>
                  <p className="mb-5">While there is no known cure, evidence-based interventions and early therapy can effectively manage symptoms, enhance communication skills, and foster independence, significantly improving the lives of those affected.</p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                        <img src={Behaviour_Therapy_logo} alt="Behaviour Therapy" width="70" height="70"/>

                        </div>
                        <div>
                          <h2 className="h4 mb-3">Behaviour Therapy</h2>
                          <p className="text-secondary mb-0">Focuses on modifying maladaptive behaviors through techniques such as reinforcement and conditioning.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">

                          <img src={Speech_logo} alt="Speech Therapy" width="65" height="65"/>

                        </div>
                        <div>
                          <h2 className="h4 mb-3">Speech Therapy</h2>
                          <p className="text-secondary mb-0">Speech therapy is a specialized form of treatment aimed at improving communication and language skills.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
