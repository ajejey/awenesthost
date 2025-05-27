// This component assumes you have Next.js and Tailwind CSS set up in your project.
// You will also need to install lucide-react for icons:
// npm install lucide-react
// or
// yarn add lucide-react

"use client";

import React, { useState } from 'react';
import { Home, Briefcase, Heart, TrendingUp, DollarSign, Award, Lightbulb, CheckCircle, UserCheck, Phone, Mail, MapPin, ArrowRight, Star, Layers, Zap, Users, ShieldCheck, Globe } from 'lucide-react';

// Define TypeScript interfaces for data structures for better type safety and readability
interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

/**
 * AweNestHostLandingPageV5 React Component
 * This is a completely new design for the AweNestHost™ landing page,
 * featuring a distinct layout, new color palette (soft grays, muted blues/purples, vibrant gold),
 * and enhanced visual elements for investor pitches and full mobile responsiveness.
 */
const AweNestHostLandingPageV5: React.FC = () => {
  // Dummy data for client testimonials to build trust and social proof
  const testimonials: Testimonial[] = [
    { id: 't1', quote: 'AweNestHost™ helped me increase my rental income by 30%! Their professional approach and seamless management are truly impressive.', author: 'Mythreyi' },
    { id: 't2', quote: 'The team at AweNestHost™ provided exceptional service and attention to detail. My property has never been better managed.', author: 'Ashok C Wali' },
    { id: 't3', quote: 'I highly recommend AweNestHost™ for their professionalism and expertise. They truly simplify the short-term rental process.', author: 'Ramakrishna Rao' },
  ];

  // Handler for the contact form submission (for demonstration)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send form data to a backend.
    console.log('Form submitted!');
    // IMPORTANT: Do NOT use alert() in production code for Canvas.
    // Use a custom modal or message box for user feedback.
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen overflow-hidden">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-lg py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">
        <div className="text-2xl font-bold text-purple-800">AweNestHost™</div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#services" className="hover:text-purple-700 transition duration-300">Services</a>
          <a href="#how-it-works" className="hover:text-purple-700 transition duration-300">How It Works</a>
          <a href="#impact" className="hover:text-purple-700 transition duration-300">Impact</a>
          <a href="#testimonials" className="hover:text-purple-700 transition duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-purple-700 transition duration-300">Contact</a>
        </div>
        <a href="#list-with-us" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 hidden md:block">
          List With Us
        </a>
        {/* Mobile menu icon (e.g., hamburger) would be implemented here for small screens */}
      </nav>

      {/* Hero Section - Dynamic & Modern */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-100 to-white pt-20 overflow-hidden">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6 md:p-12">
          <div className="md:w-1/2 text-center md:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900 drop-shadow-sm">
              Unlock Your Property's <span className="text-purple-700">Full Potential.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-700">
              Seamless Vacation Rental & Property Management for a Profitable Future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#list-with-us" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                List Your Property Today
              </a>
              <a href="#services" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern Home Interior"
              className="w-full max-w-md md:max-w-none h-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </section>

      {/* Introduction/About Us Section - Feature Blocks */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Why AweNestHost™?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center animate-fade-in-up">
            <Layers size={64} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              From marketing to maintenance, we handle every detail of your property's management.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center animate-fade-in-up delay-100">
            <Zap size={64} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Maximized Returns</h3>
            <p className="text-gray-700 leading-relaxed">
              Our strategies ensure higher rental income and optimal occupancy for your investment.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center animate-fade-in-up delay-200">
            <ShieldCheck size={64} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hassle-Free Experience</h3>
            <p className="text-gray-700 leading-relaxed">
              Enjoy passive income with complete peace of mind, knowing your property is in expert hands.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Detailed Cards with Icons */}
      <section id="services" className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Our Tailored Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Service 1: Vacation Rental Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition duration-300 ease-in-out animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Home size={48} className="text-purple-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Vacation Rental Management</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlock the full earning potential of your property with our comprehensive management services.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Multi-platform marketing & dynamic pricing</li>
              <li>Professional guest communication & 24/7 support</li>
              <li>Meticulous cleaning, maintenance & inspections</li>
            </ul>
          </div>

          {/* Service 2: Corporate Stays */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition duration-300 ease-in-out animate-fade-in-up delay-100">
            <div className="flex items-center mb-4">
              <Briefcase size={48} className="text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Corporate Stays</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tailored, comfortable, and convenient accommodations for business travelers on extended assignments.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Fully furnished, amenity-rich properties</li>
              <li>Flexible lease terms for corporate needs</li>
              <li>Personalized concierge services & business support</li>
            </ul>
          </div>

          {/* Service 3: Medical Tourism */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition duration-300 ease-in-out animate-fade-in-up delay-200">
            <div className="flex items-center mb-4">
              <Heart size={48} className="text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Medical Tourism</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compassionate and convenient temporary housing solutions for individuals seeking medical treatment.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Proximity to major medical centers</li>
              <li>Comfortable, accessible accommodations for recovery</li>
              <li>Assistance with local logistics (transport, meals)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Impact By The Numbers Section - Infographic Style */}
      <section id="impact" className="py-20 px-6 md:px-12 bg-purple-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Our Impact By The Numbers
        </h2>
        <p className="text-lg text-purple-200 text-center max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          We transform properties into profitable investments with measurable results you can trust.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-purple-700 p-8 rounded-xl shadow-lg animate-fade-in-up">
            <TrendingUp size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">+30%</p>
            <p className="text-lg text-purple-200">Average Rental Income Increase</p>
          </div>
          <div className="bg-purple-700 p-8 rounded-xl shadow-lg animate-fade-in-up delay-100">
            <DollarSign size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">₹10M+</p>
            <p className="text-lg text-purple-200">Generated for Property Owners</p>
          </div>
          <div className="bg-purple-700 p-8 rounded-xl shadow-lg animate-fade-in-up delay-200">
            <Award size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">98%</p>
            <p className="text-lg text-purple-200">Guest Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* How It Works Section (for Owners) - Step-by-Step with Icons & Descriptions */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          For Owners: Your Path to Effortless Income
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center flex flex-col items-center animate-fade-in-up">
            <div className="bg-purple-100 text-purple-600 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mb-6 border-4 border-purple-300">
              <Lightbulb size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Professional Listing</h3>
            <p className="text-gray-700 leading-relaxed">
              We craft compelling listings with stunning photography and captivating descriptions across top platforms.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center flex flex-col items-center animate-fade-in-up delay-100">
            <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mb-6 border-4 border-blue-300">
              <UserCheck size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Dynamic Marketing & Guest Management</h3>
            <p className="text-gray-700 leading-relaxed">
              Extensive platform distribution, optimized pricing, and all guest interactions handled for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center flex flex-col items-center animate-fade-in-up delay-200">
            <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mb-6 border-4 border-green-300">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Seamless Operations & Support</h3>
            <p className="text-gray-700 leading-relaxed">
              From check-ins to meticulous cleaning and 24/7 support, we ensure a truly hassle-free experience.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#list-with-us" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Ready to Get Started? List Your Property Today!
          </a>
        </div>
      </section>

      {/* Testimonials Section - Carousel with larger quotes */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-purple-50 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          What Our Valued Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-yellow-500 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" className="text-yellow-400" />
            ))}
          </div>
          <p className="text-xl md:text-2xl italic text-gray-700 mb-6 text-center leading-relaxed">
            "{testimonials[0].quote}" {/* Displaying first testimonial for static example */}
          </p>
          <p className="font-semibold text-gray-900 text-xl text-center">
            - {testimonials[0].author}
          </p>
          {/* In a real app, you'd add carousel navigation here using state */}
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="text-purple-700 hover:text-purple-800 font-semibold text-lg inline-flex items-center group">
            Read More Success Stories
            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Call to Action: List with Us - Prominent & Engaging */}
      <section id="list-with-us" className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-700 to-purple-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Elevate Your Property's Performance?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          Connect with AweNestHost™ and discover how we can transform your investment into a thriving asset.
        </p>
        <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-4 px-10 rounded-full shadow-lg text-xl transition duration-300 transform hover:scale-105 animate-fade-in delay-200">
          Schedule a Consultation
        </a>
      </section>

      {/* Contact Section - Modern Form with Icon Contact Info */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Get In Touch
        </h2>
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email*</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="your@email.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message*</label>
                <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="Tell us how we can help..." required></textarea>
              </div>
              <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="flex items-center"><MapPin size={20} className="mr-2 text-purple-700" /> [Your Business Address Here - e.g., 123 Property Lane, Bengaluru, India]</p>
                <p className="flex items-center"><a href="mailto:info@awenesthost.com" className="text-purple-700 hover:underline flex items-center"><Mail size={20} className="mr-2" />info@awenesthost.com</a></p>
                <p className="flex items-center"><a href="tel:+918919823564" className="text-purple-700 hover:underline flex items-center"><Phone size={20} className="mr-2" />(+91) 891-982-3564</a></p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Placeholder for social media icons. Replace with actual SVG or Font Awesome icons. */}
                <a href="#" className="text-purple-700 hover:text-purple-900 text-3xl transition duration-300">🔗</a> {/* LinkedIn */}
                <a href="#" className="text-purple-700 hover:text-purple-900 text-3xl transition duration-300">📸</a> {/* Instagram */}
                <a href="#" className="text-purple-700 hover:text-purple-900 text-3xl transition duration-300">🐦</a> {/* Twitter */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AweNestHost™</h3>
            <p className="text-gray-400 text-sm">
              Redefining vacation home management and unlocking the full potential of your property investment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Owners</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#list-with-us" className="hover:text-white transition duration-300">List With Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Owner Login</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Partner With Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Guests</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">Explore AweNest Homes</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Guest Login</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about-us" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="p-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" />
                <button className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-r-md transition duration-300">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AweNestHost™. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AweNestHostLandingPageV5;