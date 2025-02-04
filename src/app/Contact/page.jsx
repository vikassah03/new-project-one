'use client';
import React from 'react';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "1abd0aeb-6db7-42b9-9b8f-c3f076a75c97",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Success");
    }
  }

  return (
    <>
      <Navbar />
      
        <h5 className='text-center pt-28 text-3xl '>Contact US</h5>
        <hr/>
      <div className="flex items-center justify-center pt-20  bg-white lg:py-28 sm:px-16">
        <form onSubmit={handleSubmit} className="w-full ml-10 mr-10 p-8 bg-white rounded shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-500">Message</label>
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Enter Message"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
