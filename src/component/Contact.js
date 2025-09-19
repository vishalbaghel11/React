import React, { useState } from "react";
// import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Fill out the form below and we’ll get in
        touch with you.
      </p>

      <div className="contact-grid">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
          />

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Address: 123 Food Street, Jaipur, Rajasthan</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>✉️ Email: baghelvishal927@gmail.com</p>

          <h3 style={{ marginTop: "1rem" }}>Follow us:</h3>
          <p>
            <a href="#">Facebook</a> |
             <a href="https://www.instagram.com/vishal_bghl/">Instagram</a> 
            <a href="https://x.com/Vishalpallll">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
