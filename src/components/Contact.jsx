import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Visit Us</h3>
              <p>123 Victoria Island</p>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 12pm - 11pm</p>
            </div>
            <div className="info-item">
              <h3>Contact</h3>
              <p>Phone: +234 123 456 7890</p>
              <p>Email: info@jollof-junction.com</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
