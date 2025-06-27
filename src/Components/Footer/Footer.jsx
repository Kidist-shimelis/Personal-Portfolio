import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mini-footer">
      <div className="footer-content">
        {/* Quick Links - Side by Side */}
        <div className="quick-links">
          <a href="#home" className="quick-link">
            <span>Home</span>
            <div className="link-underline"></div>
          </a>
          <a href="#about" className="quick-link">
            <span>About</span>
            <div className="link-underline"></div>
          </a>
          <a href="#skills" className="quick-link">
            <span>Skills</span>
            <div className="link-underline"></div>
          </a>
          <a href="#portfolio" className="quick-link">
            <span>Portfolio</span>
            <div className="link-underline"></div>
          </a>
          <a href="#contact" className="quick-link">
            <span>Contact</span>
            <div className="link-underline"></div>
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https:github.com/Kidist-shimelis" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon"
             data-tooltip="GitHub">
            <FaGithub />
            <span className="hover-effect"></span>
          </a>
          
          <a href="www.linkedin.com/in/kidist-shimelis" 
             target="_blank" 
             rel="noopener noreferrer"
             className="social-icon"
             data-tooltip="LinkedIn">
            <FaLinkedin />
            <span className="hover-effect"></span>
          </a>
          
         
          
          <a href="mailto:kidshimelis23@gmail.com"
             className="social-icon"
             data-tooltip="Email">
            <FaEnvelope />
            <span className="hover-effect"></span>
          </a>
        </div>

        {/* Back to Top */}
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
          <span className="hover-circle"></span>
        </button>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Kidist Injibara</p>
        <div className="glow-bar"></div>
      </div>
    </footer>
  );
};

export default Footer;