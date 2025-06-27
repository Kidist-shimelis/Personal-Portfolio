import React from 'react';
import './Skills.css';
import { FaCode, FaUsers, FaBrain, FaHandshake, FaClock, FaComments } from 'react-icons/fa';

const Skills = () => {
  // Technical Skills (Left Side)
  const technicalSkills = [
    { name: "HTML/CSS", level: 90, icon: <FaCode />, color: "#6C63FF" },
    { name: "JavaScript", level: 85, icon: <FaCode />, color: "#FF6584" },
    { name: "React", level: 80, icon: <FaCode />, color: "#20B2AA" },
    { name: "Node.js", level: 75, icon: <FaCode />, color: "#FFA630" },
    { name: "Python", level: 70, icon: <FaCode />, color: "#4CAF50" },
            { name: "MySql", level: 75, icon: <FaCode />, color: "#FFA630" },
    { name: "GitHub", level: 80, icon: <FaCode />, color: "#9C27B0" },
    { name: "Laravel", level: 75, icon: <FaCode />, color: "#FFA630" },


  ];

  // Soft Skills (Right Side)
  const softSkills = [
    { name: "Communication", icon: <FaComments />, color: "#2196F3" },
    { name: "Teamwork", icon: <FaHandshake />, color: "#FF9800" },
    { name: "Problem Solving", icon: <FaBrain />, color: "#E91E63" },
    { name: "Time Management", icon: <FaClock />, color: "#4CAF50" },
    { name: "Adaptability", icon: <FaUsers />, color: "#9C27B0" },
    { name: "Leadership", icon: <FaUsers />, color: "#6C63FF" }
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="section-title">My <span>Skills</span></h2>
      <div className="title-divider"></div>
      
      <div className="skills-columns">
        {/* Left Column - Technical Skills */}
        <div className="skills-column technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <div key={`tech-${index}`} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent" style={{ color: skill.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Soft Skills */}
        <div className="skills-column soft-skills">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <div key={`soft-${index}`} className="skill-item">
                <div className="soft-skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="soft-skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;