// This component assumes you have Next.js and Tailwind CSS set up in your project.
// You will also need to install lucide-react for icons:
// npm install lucide-react
// or
// yarn add lucide-react

"use client";

import React, { useState } from 'react';
import { Home, Briefcase, Heart, TrendingUp, DollarSign, Award, Lightbulb, CheckCircle, UserCheck, Phone, Mail, MapPin, ArrowRight, Globe2, ChevronLeft, ChevronRight, Linkedin, Instagram, X } from 'lucide-react';

// Define TypeScript interfaces for data structures for better type safety and readability
interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

/**
 * AweNestHostLandingPageV3 React Component
 * This is the third alternative design for the AweNestHost™ landing page,
 * featuring a distinct layout, new color palette (deep blues & vibrant yellows),
 * and enhanced visual elements for investor pitches and full mobile responsiveness.
 */
const AweNestHostLandingPageV3: React.FC = () => {
  // Dummy data for client testimonials to build trust and social proof
  const testimonials: Testimonial[] = [
    { id: 't1', quote: 'AweNestHost™ helped me increase my rental income by 30%! Their professional approach and seamless management are truly impressive.', author: 'Mythreyi' },
    { id: 't2', quote: 'The team at AweNestHost™ provided exceptional service and attention to detail. My property has never been better managed.', author: 'Ashok C Wali' },
    { id: 't3', quote: 'I highly recommend AweNestHost™ for their professionalism and expertise. They truly simplify the short-term rental process.', author: 'Ramakrishna Rao' },
  ];

  // State for testimonial carousel (if implemented)
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-lg py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">
        <div className="text-2xl font-bold text-blue-800">AweNestHost™</div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#services" className="hover:text-blue-700 transition duration-300">Our Services</a>
          <a href="#how-it-works" className="hover:text-blue-700 transition duration-300">How It Works</a>
          <a href="#impact" className="hover:text-blue-700 transition duration-300">Our Impact</a>
          <a href="#testimonials" className="hover:text-blue-700 transition duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-blue-700 transition duration-300">Contact Us</a>
        </div>
        <a href="#list-with-us" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 hidden md:block">
          List With Us
        </a>
        {/* Mobile menu icon (e.g., hamburger) would be implemented here for small screens */}
      </nav>

      {/* Hero Section - Full Width with Central Focus */}
      <section
        className="relative h-screen flex flex-col items-center justify-center text-white pt-20 overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom right, #1e3a8a, #172554)`, backgroundSize: 'cover' }}
      >
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M0 40L40 0H20L0 20V40zm40 0V20L20 40H40zm0-40L0 40V20L20 0H40zM0 0L40 40V20L20 0H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')` }}></div>

        <div className="relative z-10 text-center max-w-5xl p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-up">
            Maximize Your Property's Potential. Effortlessly.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 drop-shadow animate-fade-in-up delay-200">
            AweNestHost™: Premier Management for Vacation Rentals, Corporate Stays & Medical Tourism.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <a href="#list-with-us" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              List Your Property Today
            </a>
            <a href="#services" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-blue-900 font-bold py-3 px-8 rounded-full border border-white transition duration-300 transform hover:scale-105">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Introduction/About Us Section - Clean & Concise */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 animate-fade-in">
          Welcome to AweNestHost™
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          AweNestHost™ is your dedicated partner in elevating property management to an art. We empower owners to unlock full investment potential while crafting unforgettable experiences for guests across diverse needs, including corporate stays and medical tourism.
        </p>
        <div className="mt-10 animate-fade-in delay-200">
          <a href="#contact" className="text-blue-700 hover:text-blue-800 font-semibold text-lg inline-flex items-center group">
            Partner With Us
            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Services Section - Alternating Image/Text Layout */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 animate-fade-in">
          Our Comprehensive Solutions
        </h2>
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Service 1: Vacation Rental Management */}
          <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Vacation Rental"
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-yellow-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <Home size={64} className="text-blue-700 mb-4 mx-auto md:mx-0" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Vacation Rental Management</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Unlock the full earning potential of your property with our expert vacation rental management. We handle everything from dynamic pricing to guest communication, ensuring seamless operations and maximum occupancy.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left mx-auto md:mx-0 max-w-md">
                <li>Comprehensive multi-platform marketing</li>
                <li>Professional guest communication & support</li>
                <li>Meticulous cleaning & maintenance</li>
                <li>Flexible owner access & control</li>
              </ul>
            </div>
          </div>

          {/* Service 2: Corporate Stays */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 animate-fade-in-up delay-100">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1615720554821-1873661d888f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Corporate Stay"
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-yellow-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <Briefcase size={64} className="text-blue-700 mb-4 mx-auto md:ml-auto md:mr-0" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Corporate Stays</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tailored, comfortable, and convenient accommodations for business travelers on extended assignments. Our solutions provide the flexibility and amenities essential for productive corporate stays.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-right mx-auto md:ml-auto md:mr-0 max-w-md">
                <li>Fully furnished, amenity-rich properties</li>
                <li>Flexible lease terms for corporate needs</li>
                <li>Personalized concierge services</li>
                <li>Strategic locations near business hubs</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Medical Tourism */}
          <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in-up delay-200">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1658394182922-fae0590632d6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Tourism"
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-yellow-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <Heart size={64} className="text-blue-700 mb-4 mx-auto md:mx-0" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Medical Tourism</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Compassionate and convenient temporary housing solutions for individuals seeking medical treatment. We provide a supportive environment for recovery, close to leading medical facilities.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-left mx-auto md:mx-0 max-w-md">
                <li>Proximity to major medical centers</li>
                <li>Comfortable, accessible accommodations</li>
                <li>Assistance with local logistics (transport, meals)</li>
                <li>Focus on patient well-being and recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact By The Numbers Section - Horizontal Scrollable on Mobile */}
      {/* Our Impact By The Numbers Section - Horizontal Scrollable on Mobile */}
      <section id="impact" className="py-20 px-6 md:px-12 bg-blue-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Our Impact By The Numbers
        </h2>
        <p className="text-lg text-blue-200 text-center max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          We transform properties into profitable investments with measurable results you can trust.
        </p>
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-4 md:pb-0 scrollbar-hide">
          <div className="flex-shrink-0 w-72 md:w-auto bg-blue-800 p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 text-center animate-fade-in-up">
            <TrendingUp size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">30%</p>
            <p className="text-lg text-blue-200">Average Income Increase</p>
          </div>
          <div className="flex-shrink-0 w-72 md:w-auto bg-blue-800 p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 text-center animate-fade-in-up delay-100">
            <Award size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">98%</p>
            <p className="text-lg text-blue-200">Guest Satisfaction Rating</p>
          </div>
          <div className="flex-shrink-0 w-72 md:w-auto bg-blue-800 p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 text-center animate-fade-in-up delay-200">
            <Globe2 size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">10+</p>
            <p className="text-lg text-blue-200">Booking Platforms</p>
          </div>
          <div className="flex-shrink-0 w-72 md:w-auto bg-blue-800 p-8 rounded-xl shadow-lg border-b-4 border-yellow-400 text-center animate-fade-in-up delay-300">
            <CheckCircle size={72} className="text-yellow-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">100%</p>
            <p className="text-lg text-blue-200">Owner Satisfaction</p>
          </div>
        </div>
      </section>

      {/* How It Works Section (for Owners) - Vertical Timeline Style */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 animate-fade-in">
          For Owners: Your Path to Effortless Income
        </h2>
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line - visible on all screens */}
          <div className="absolute hidden md:block left-1/2 md:left-24 lg:left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 md:bg-gradient-to-b md:from-yellow-400 md:to-blue-500"></div>

          {/* Step 1 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:items-center lg:justify-between animate-fade-in-up">
            {/* Mobile Icon (visible on small screens) */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <Lightbulb size={32} className="text-blue-900" />
              </div>
            </div>
            
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Professional Listing Creation</h3>
              <p className="text-gray-700 leading-relaxed">
                Our experts craft compelling listings with stunning photography and captivating descriptions, ensuring your property stands out across all top platforms.
              </p>
            </div>
            
            {/* Desktop Icon (visible on large screens) */}
            <div className="hidden lg:block lg:w-2/12 flex-shrink-0">
              <div className="relative z-10 w-24 h-24 mx-auto flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <Lightbulb size={48} className="text-blue-900" />
              </div>
            </div>
            
            <div className="lg:w-5/12"></div> {/* Empty spacer for alignment */}
          </div>

          {/* Step 2 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:items-center lg:justify-between animate-fade-in-up delay-100">
            {/* Mobile Icon (visible on small screens) */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <UserCheck size={32} className="text-blue-900" />
              </div>
            </div>
            
            <div className="lg:w-5/12"></div> {/* Empty spacer for alignment */}
            
            {/* Desktop Icon (visible on large screens) */}
            <div className="hidden lg:block lg:w-2/12 flex-shrink-0">
              <div className="relative z-10 w-24 h-24 mx-auto flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <UserCheck size={48} className="text-blue-900" />
              </div>
            </div>
            
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pl-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Dynamic Marketing & Guest Management</h3>
              <p className="text-gray-700 leading-relaxed">
                We ensure extensive platform distribution, optimize pricing for maximum returns, and handle all guest communications, bookings, and calendar synchronization.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative lg:flex lg:items-center lg:justify-between animate-fade-in-up delay-200">
            {/* Mobile Icon (visible on small screens) */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <CheckCircle size={32} className="text-blue-900" />
              </div>
            </div>
            
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Seamless Operations & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                From smooth check-ins and on-the-ground services to meticulous cleaning and 24/7 support, we ensure a truly hassle-free experience for both you and your guests.
              </p>
            </div>
            
            {/* Desktop Icon (visible on large screens) */}
            <div className="hidden lg:block lg:w-2/12 flex-shrink-0">
              <div className="relative z-10 w-24 h-24 mx-auto flex items-center justify-center bg-yellow-400 rounded-full shadow-lg border-4 border-white">
                <CheckCircle size={48} className="text-blue-900" />
              </div>
            </div>
            
            <div className="lg:w-5/12"></div> {/* Empty spacer for alignment */}
          </div>
        </div>
        <div className="text-center mt-16">
          <a 
            href="#list-with-us" 
            className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 transform hover:scale-105 border-b-4 border-blue-900 hover:border-blue-950"
          >
            Ready to Get Started? List Your Property Today!
          </a>
        </div>
      </section>

      {/* Testimonials Section - Carousel/Slider (Conceptual) */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-blue-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          What Our Valued Clients Say
        </h2>
        {/* Testimonial Carousel with external buttons */}
        <div className="relative max-w-3xl mx-auto">
          {/* Left navigation button */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 bg-white hover:bg-yellow-400 p-3 rounded-full text-blue-900 shadow-lg transition duration-300 z-10"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-blue-700 p-8 rounded-xl shadow-xl border-t-4 border-yellow-400 animate-fade-in-up">
            <p className="text-2xl italic text-blue-100 mb-6 text-center">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <p className="font-semibold text-yellow-300 text-xl text-center">
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
          
          {/* Right navigation button */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 bg-white hover:bg-yellow-400 p-3 rounded-full text-blue-900 shadow-lg transition duration-300 z-10"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-yellow-400' : 'bg-blue-400'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Call to Action: List with Us - Bold and inviting */}
      <section id="list-with-us" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Elevate Your Property's Performance?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          Connect with AweNestHost™ and discover how we can transform your investment into a thriving asset.
        </p>
        <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg text-xl transition duration-300 transform hover:scale-105 animate-fade-in delay-200">
          Schedule a Consultation
        </a>
      </section>

      {/* Contact Section - Clean and accessible */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 animate-fade-in">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email*</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" placeholder="your@email.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message*</label>
                <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" placeholder="Tell us how we can help..." required></textarea>
              </div>
              <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center"><MapPin size={20} className="mr-2 text-blue-700" /> 123 Property Lane, Hyderabad, India</p>
              <p className="flex items-center"><a href="mailto:info@awenesthost.com" className="text-blue-700 hover:underline flex items-center"><Mail size={20} className="mr-2" />info@awenesthost.com</a></p>
              <p className="flex items-center"><a href="tel:+918919823564" className="text-blue-700 hover:underline flex items-center"><Phone size={20} className="mr-2" />(+91) 891-982-3564</a></p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900 transition duration-300">
                  <X size={28} />
                </a>
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
                <input type="email" placeholder="Your email" className="p-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                <button className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-r-md transition duration-300">Submit</button>
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

export default AweNestHostLandingPageV3;
