import React from 'react';
import './About.css';
import logo from "../../assets/leaf-1.svg";
import profileImage from "../../assets/kiii.jpg";
import { FaCode, FaPalette, FaServer, FaMobileAlt, FaRocket, FaMedal, FaChartLine } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 90, icon: <FaCode />, color: "#6C63FF" },
    { name: "UI Design", level: 85, icon: <FaPalette />, color: "#FF6584" },
    { name: "Backend Development", level: 75, icon: <FaServer />, color: "#20B2AA" },
  ];

  const achievements = [
    { number: "", title: "Active Participations In projects", icon: <FaRocket />, color: "#6C63FF" },
    { text: "Team Works", title: "Team Works", icon: <FaMedal />, color: "#20B2AA" },
    
  ];

  return (
    <div className='about' id="about">
      <div className="about-title">
        <h1>About <span>Me</span></h1>
        <img src={logo} alt="decoration" className="floating" />

        <img src={logo} alt="decoration" className="floating" />

      </div>
      
      <div className="about-sections">
        {/* Profile Image Section */}
        <div className="about-left">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
            <div className="image-highlight"></div>
          </div>
          
          {/* Achievements moved here to balance the layout */}
          <div className="about-achievments">
            <h3>Key <span>Achievements</span></h3>
            <div className="title-divider"></div>
            <div className="achievments-grid">
              {achievements.map((item, index) => (
                <div key={index} className="achievment-card" style={{ borderTop: `3px solid ${item.color}` }}>
                  <div className="achievment-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  
                  <h1>{item.number}</h1>
                  <p className="achievment-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="about-right">
          <div className="about-content">
            <div className="about-para">
              
              <p>
                I'm a <span className="highlight">passionate full-stack developer</span> with expertise in modern web technologies. 
                I specialize in creating <span className="highlight">responsive, performant applications</span> with clean, maintainable code 
                and intuitive interfaces that users love.
              </p>
              <div className="divider"></div>
            <p>
                Having <span className="highlight">some experience</span> across the stack, I bring projects from concept 
                to completion with  attention to detail. My approach combines <span className="highlight">technical excellence</span> 
                with <span className="highlight">user-centric design</span> principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;