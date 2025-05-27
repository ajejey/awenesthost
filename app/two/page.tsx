

"use client";


import React, { useState } from 'react';
import { Home, Briefcase, Heart, Users, MapPin, TrendingUp, DollarSign, Award, Globe2, CheckCircle, Facebook, Instagram, X, Linkedin, Mail, PhoneCall } from 'lucide-react'; // Added TrendingUp, DollarSign, Award for new section

interface Property {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
  rating: number;
  pricePerNight: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

/**
 * AweNestHostLandingPage React Component
 * This component serves as a modern, elegant, and high-converting landing page
 * for a vacation rental and property management service, focusing on clarity and impact.
 */
const AweNestHostLandingPage: React.FC = () => {
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
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">
        <div className="text-2xl font-bold text-blue-700">AweNestHost™</div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition duration-300">Our Services</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition duration-300">How It Works</a>
          <a href="#impact" className="hover:text-blue-600 transition duration-300">Our Impact</a>
          <a href="#testimonials" className="hover:text-blue-600 transition duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact Us</a>
        </div>
        <a href="#list-with-us" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 hidden md:block">
          List With Us
        </a>
        {/* Mobile menu icon (e.g., hamburger) would be implemented here for small screens */}
        
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white pt-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }} // High-quality Unsplash image
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for text readability */}
        <div className="z-10 text-center max-w-4xl p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-up">
            Unlock Your Property's Full Potential
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light drop-shadow animate-fade-in-up delay-200">
            Your Premier Partner for Vacation Rental & Property Management
          </p>
          <div className="mt-8 flex justify-center space-x-4 animate-fade-in-up delay-400">
            <a href="#list-with-us" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              List Your Property
            </a>
            <a href="#services" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-blue-600 font-bold py-3 px-8 rounded-full border border-white transition duration-300 transform hover:scale-105">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Introduction/About Us Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 animate-fade-in">
          Welcome to AweNestHost™
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          At AweNestHost™, we transform short-stay vacation home management into an art,
          empowering property owners to unlock the full potential of their investments.
          We create unforgettable experiences for guests, offering bespoke solutions for corporate stays and medical tourism.
          Join us in redefining vacation home management.
        </p>
        <div className="mt-10 animate-fade-in delay-200">
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold text-lg inline-flex items-center group">
            Learn More & Get Started
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </section>

      {/* Services Overview Section - Quick to grasp with icons and bullet points */}
      <section id="services" className="py-20 px-6 md:px-12 bg-blue-700 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Our Tailored Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Service Card 1: Vacation Rental Management */}
          <div className="bg-blue-800 rounded-xl shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-blue-400 animate-fade-in-up">
            <Home size={48} className="text-blue-300 mb-4" /> {/* Lucide icon */}
            <h3 className="text-2xl font-semibold mb-4">Vacation Rental Management</h3>
            <ul className="text-blue-100 list-disc list-inside space-y-2">
              <li>Maximize occupancy & income</li>
              <li>Seamless guest experiences</li>
              <li>24/7 support & maintenance</li>
            </ul>
          </div>

          {/* Service Card 2: Corporate Stays */}
          <div className="bg-blue-800 rounded-xl shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-emerald-400 animate-fade-in-up delay-100">
            <Briefcase size={48} className="text-emerald-300 mb-4" /> {/* Lucide icon */}
            <h3 className="text-2xl font-semibold mb-4">Corporate Stays</h3>
            <ul className="text-blue-100 list-disc list-inside space-y-2">
              <li>Comfort & convenience for professionals</li>
              <li>Flexible long-term options</li>
              <li>Personalized concierge services</li>
            </ul>
          </div>

          {/* Service Card 3: Medical Tourism */}
          <div className="bg-blue-800 rounded-xl shadow-xl p-8 transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-blue-400 animate-fade-in-up delay-200">
            <Heart size={48} className="text-blue-300 mb-4" /> {/* Lucide icon */}
            <h3 className="text-2xl font-semibold mb-4">Medical Tourism</h3>
            <ul className="text-blue-100 list-disc list-inside space-y-2">
              <li>Proximity to medical facilities</li>
              <li>Supportive recovery environment</li>
              <li>Logistical assistance provided</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Impact By The Numbers Section */}
      <section id="impact" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8 animate-fade-in">
          Our Impact By The Numbers
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          We transform properties into profitable investments with measurable results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-fade-in-up delay-100">
            <TrendingUp size={48} className="text-emerald-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-900 mb-2">30%</p>
            <p className="text-sm text-gray-600">Average Income Increase</p>
          </div>
   
          <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-fade-in-up delay-300">
            <Award size={48} className="text-purple-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-900 mb-2">98%</p>
            <p className="text-sm text-gray-600">Guest Satisfaction Rating</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-fade-in-up delay-400">
            <Globe2 size={48} className="text-orange-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-900 mb-2">10+</p>
            <p className="text-sm text-gray-600">Booking Platforms</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md animate-fade-in-up delay-500">
            <CheckCircle size={48} className="text-green-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-900 mb-2">100%</p>
            <p className="text-sm text-gray-600">Owner Satisfaction</p>
          </div>
        </div>
      </section>

      {/* How It Works Section (for Owners) - Simplified steps */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fade-in">
          For Owners: Unlock Your Property's Potential in 3 Simple Steps
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up">
            <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Listing</h3>
            <p className="text-gray-600 leading-relaxed">
              We craft stunning listings with professional photography and captivating descriptions across top platforms.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up delay-100">
            <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Marketing & Guest Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Extensive platform distribution, optimized pricing, and all guest interactions handled for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up delay-200">
            <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Operations & Support</h3>
            <p className="text-gray-600 leading-relaxed">
              From check-ins to meticulous cleaning and 24/7 support, we ensure a truly hassle-free experience.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a 
            href="#list-with-us" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 md:px-8 text-sm md:text-base rounded-full shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Ready to Get Started? List Your Property Today!
          </a>
        </div>
      </section>

      {/* Testimonials Section - Social proof */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fade-in">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-md animate-fade-in-up">
              <p className="text-lg italic text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-gray-900">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action: List with Us - Prominent for owners */}
      <section id="list-with-us" className="py-20 px-6 md:px-12 bg-blue-700 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to See Your Property Thrive?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          Join AweNestHost™ and transform your vacant property into a lucrative, hassle-free income stream.
        </p>
        <a href="#contact" className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-10 rounded-full shadow-lg text-xl transition duration-300 transform hover:scale-105 animate-fade-in delay-200">
          List Your Property With Us!
        </a>
      </section>

      {/* Contact Section - For inquiries */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fade-in">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
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
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center"><MapPin size={20} className="mr-2 text-blue-600" /> 123 Property Lane, Hyderabad, India</p>
              <p className="flex items-center"><Mail size={20} className="mr-2 text-blue-600" /><a href="mailto:info@awenesthost.com" className="text-blue-600 hover:underline">info@awenesthost.com</a></p>
              <p className="flex items-center"><PhoneCall size={20} className="mr-2 text-blue-600" /><a href="tel:+918919823564" className="text-blue-600 hover:underline">(+91) 891-982-3564</a></p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <X size={24} />
                </a>
                <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 px-6 md:px-12">
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
              <li><a href="#featured-properties" className="hover:text-white transition duration-300">Explore AweNest Homes</a></li>
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
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 rounded-l-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md transition duration-300">Submit</button>
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

export default AweNestHostLandingPage;