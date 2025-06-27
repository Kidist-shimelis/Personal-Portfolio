import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    { 
      type: 'Email', 
      value: 'kidshimelis23@gmail.com', 
      link: 'mailto:kidshimelis23@gmail.com',
      icon: '✉️'
    },
    { 
      type: 'Phone', 
      value: '+251 986622329', 
      link: 'tel:+251 986622329',
      icon: '📱'
    },
    { 
      type: 'LinkedIn', 
      value: 'www.linkedin.com/in/kidist-shimelis', 
      link: 'www.linkedin.com/in/kidist-shimelis',
      icon: '🔗'
    },
    { 
      type: 'GitHub', 
      value: 'github.com/Kidist-shimelis', 
      link: 'github.com/Kidist-shimelis',
      icon: '💻'
    },
  ];

  return (
    <div className='contact' id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in touch</h1>
          <p>Feel free to reach out through any of these methods</p>
        </div>

        <div className="contact-options">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send me a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {isSubmitted && (
                <div className="success-message">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>

          {/* Direct Contact Methods */}
          <div className="direct-contact">
            <h2>Contact me directly</h2>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="contact-icon">{method.icon}</span>
                  <div>
                    <h3>{method.type}</h3>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;