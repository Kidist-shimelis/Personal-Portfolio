import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (id) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
<div className="logo-container">
  <img src="kidLogo.png" alt="Portfolio Logo" className="logo-image" />
</div>          <span className="logo-dot"></span>
        </div>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
            >
              {link.label}
              <span className="link-underline"></span>
            </button>
          ))}
        </div>
        
        <div className="navbar-socials">
          {[
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/kidist-shimelis" },
            { icon: <FaGithub />, url: "https://github.com/Kidist-shimelis" },
            { icon: <HiOutlineMail />, url: "kidshimelis23@gmail.com" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;