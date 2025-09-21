import React, { useState } from "react";

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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or feedback? Fill out the form below and we’ll get in touch with you.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
      
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <label className="font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p>📍 Address: 123 Food Street, Jaipur, Rajasthan</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>✉️ Email: baghelvishal927@gmail.com</p>

          <h3 className="mt-4 font-semibold">Follow us:</h3>
          <p className="flex gap-4">
            <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            <a href="https://www.instagram.com/vishal_bghl/" className="text-pink-500 hover:underline">Instagram</a>
            <a href="https://x.com/Vishalpallll" className="text-blue-400 hover:underline">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
