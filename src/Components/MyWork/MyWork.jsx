import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/logo.svg';
import mywork_data from '../../assets/mywork_data.js';

const MyWork = () => {
  return (
    <div className='mywork' id="work">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="decoration" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div key={work.id} className="work-item">
            <img src={work.w_img} alt={work.w_name} />
            <div className="work-details">
              <h3>{work.w_name}</h3>
              <p>{work.w_desc}</p>
              <div className="work-tags">
                {work.w_tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;