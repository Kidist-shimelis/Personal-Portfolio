import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from "../../assets/kiii.jpg";
import bg_pattern1 from "../../assets/computer1.png";
import bg_pattern2 from "../../assets/computer2.png";
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    // Add mouse move parallax effect
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.querySelector('.bg-pattern-1').style.transform = 
        `translate(${x * 30}px, ${y * 20}px)`;
      document.querySelector('.bg-pattern-2').style.transform = 
        `translate(${x * -20}px, ${y * -15}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='hero' id='hero'>
      {/* Background patterns with parallax effect */}
      <img src={bg_pattern1} alt="" className="bg-pattern bg-pattern-1" />
      <img src={bg_pattern2} alt="" className="bg-pattern bg-pattern-2" />
      
      {/* Animated gradient overlay */}
      <div className="gradient-overlay"></div>
      
      <div className="hero-content">
        <div className="profile-container">
          <img 
            src={profile_img} 
            alt="Kidist Injibara" 
            className="hero-img"
          />
          <div className="img-border-animation"></div>
          <div className="img-dots"></div>
        </div>
        
        <div className="hero-text">
          <h1>
            <span className="greeting">Hello!! </span>
            I'm <span className="name-highlight">Kidist Shimelis</span>
          </h1>
          <p className="title">
            <span className="title-text">Frontend and backend Developer</span>
            <span className="animated-cursor">|</span>
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-connect">
              Connect with Me <FaArrowRight className="btn-icon" />
            </a>
            <a href="/cvv.pdf" download className="btn btn-resume">
              My Resume <FaArrowRight className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;