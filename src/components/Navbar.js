// components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import image from '../assests/therapy.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid custom-navbar">
          <div className="container-fluid">
            <RouterLink className="navbar-brand" to="/">
              <img
                src={image}
                style={{ margin: '0px 20px 0px 0px' }}
                alt=""
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
              Ek Number Therapy
            </RouterLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <RouterLink className="nav-link active" aria-current="page" to="/">
                  Home
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link active" aria-current="page" to="/appointments">
                  Appointments
                </RouterLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link active"
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  style={{ cursor: 'pointer' }} // Ensure cursor is pointer
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
