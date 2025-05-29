// This component assumes you have Next.js and Tailwind CSS set up in your project.
// You will also need to install lucide-react for icons:
// npm install lucide-react
// or
// yarn add lucide-react

"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Home, Briefcase, Heart, TrendingUp, DollarSign, Award, Lightbulb, CheckCircle, UserCheck, Phone, Mail, MapPin, ArrowRight, Star, Layers, Zap, Users, ShieldCheck, Globe, Link, Linkedin, Instagram, X } from 'lucide-react';

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
    { id: 't1', quote: 'AweNestHost™ helped me increase my rental income by 30%!', author: 'Mythreyi' },
    { id: 't2', quote: 'The team at AweNestHost™ provided exceptional service and attention to detail.', author: 'Ashok C Wali' },
    { id: 't3', quote: 'I highly recommend AweNestHost™ for their professionalism and expertise.', author: 'Ramakrishna Rao' },
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
        <div className="flex items-center">
          <img src="/images/logo.png" alt="AweNestHost™ Logo" className="h-12 mr-2" />
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#services" className="hover:text-sky-700 transition duration-300">Services</a>
          <a href="#how-it-works" className="hover:text-sky-700 transition duration-300">How It Works</a>
          <a href="#impact" className="hover:text-sky-700 transition duration-300">Impact</a>
          <a href="#testimonials" className="hover:text-sky-700 transition duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-sky-700 transition duration-300">Contact</a>
        </div>
        <a href="#list-with-us" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hidden md:block">
          List With Us
        </a>
        {/* Mobile menu icon (e.g., hamburger) would be implemented here for small screens */}
      </nav>

      {/* Hero Section - Dynamic & Modern */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-sky-100 to-white pt-20 overflow-hidden">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto p-6 md:p-12">
          <div className="md:w-1/2 text-center md:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900 drop-shadow-sm">
              Unlock Your Property's <span className="text-sky-600">Full Potential.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-700">
              Seamless Vacation Rental & Property Management for a Profitable Future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#list-with-us" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                List Your Property Today
              </a>
              <a href="#services" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 ml mt-10 md:mt-0 flex justify-center animate-slide-in-right">
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
            <Layers size={64} className="text-sky-600 mx-auto mb-4" />
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

      {/* Services Section - Alternating Image/Text Layout */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Our Comprehensive Solutions
        </h2>
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Service 1: Vacation Rental Management */}
          <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Vacation Rental"
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-sky-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <Home size={64} className="text-sky-700 mb-4 mx-auto md:mx-0" />
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
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-sky-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <Briefcase size={64} className="text-sky-700 mb-4 mx-auto md:ml-auto md:mr-0" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Corporate Stays</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tailored, comfortable, and convenient accommodations for business travelers on extended assignments. Our solutions provide the flexibility and amenities essential for productive corporate stays.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2 text-center md:text-right mx-auto md:ml-auto md:mr-0 max-w-md">
                <li className="text-left">Fully furnished, amenity-rich properties</li>
                <li className="text-left">Flexible lease terms for corporate needs</li>
                <li className="text-left">Personalized concierge services</li>
                <li className="text-left">Strategic locations near business hubs</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Medical Tourism */}
          <div className="flex flex-col md:flex-row items-center gap-10 animate-fade-in-up delay-200">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1658394182922-fae0590632d6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Tourism"
                className="w-full h-72 object-cover rounded-xl shadow-xl border-4 border-sky-400"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <Heart size={64} className="text-sky-700 mb-4 mx-auto md:mx-0" />
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

      {/* Our Impact By The Numbers Section - Infographic Style */}
      <section id="impact" className="py-20 px-6 md:px-12 bg-sky-50 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Our Impact By The Numbers
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          We transform properties into profitable investments with measurable results you can trust.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-sky-600 p-8 rounded-xl shadow-lg animate-fade-in-up">
            <TrendingUp size={72} className="text-sky-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">+30%</p>
            <p className="text-lg text-white">Average Rental Income Increase</p>
          </div>
          <div className="bg-sky-600 p-8 rounded-xl shadow-lg animate-fade-in-up delay-100">
            <DollarSign size={72} className="text-sky-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">₹10M+</p>
            <p className="text-lg text-white">Generated for Property Owners</p>
          </div>
          <div className="bg-sky-600 p-8 rounded-xl shadow-lg animate-fade-in-up delay-200">
            <Award size={72} className="text-sky-400 mx-auto mb-4" />
            <p className="text-6xl font-extrabold text-white mb-2">98%</p>
            <p className="text-lg text-white">Guest Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Our Process Section - Vertical Timeline Style */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Our Process: How We Transform Your Property
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 animate-fade-in delay-100">
          Our proven 5-step process ensures your property reaches its maximum earning potential with minimal effort from you.
        </p>
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line - visible on all screens */}
          <div className="absolute hidden md:block left-1/2 md:left-24 lg:left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-400 md:bg-gradient-to-b md:from-sky-400 md:to-sky-700"></div>

          {/* Step 1 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:items-center lg:justify-between animate-fade-in-up">
            {/* Mobile Icon (visible on small screens) */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white">
                <Lightbulb size={32} className="text-sky-900" />
              </div>
            </div>
            
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Professional Onboarding</h3>
              <p className="text-gray-700 leading-relaxed">
                We start with professional photography, compelling content creation, and optimized listings across all major booking platforms with SEO-focused descriptions.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12 text-center">
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white mx-auto">
                <Lightbulb size={40} className="text-sky-900" />
              </div>
            </div>
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-left hidden lg:block">
              {/* This div is intentionally left empty for alignment in desktop view */}
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between animate-fade-in-up delay-100">
            {/* Mobile Icon */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white">
                <TrendingUp size={32} className="text-sky-900" />
              </div>
            </div>

            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pl-8 mb-8 lg:mb-0 lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. Strategic Marketing Launch</h3>
              <p className="text-gray-700 leading-relaxed">
                Launch comprehensive marketing campaigns including social media promotion, Google keyword optimization, and targeted email marketing to maximize visibility.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12 text-center">
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white mx-auto">
                <TrendingUp size={40} className="text-sky-900" />
              </div>
            </div>
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-right hidden lg:block">
              {/* This div is intentionally left empty for alignment in desktop view */}
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:items-center lg:justify-between animate-fade-in-up delay-200">
            {/* Mobile Icon */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white">
                <Users size={32} className="text-sky-900" />
              </div>
            </div>

            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">3. Guest Experience Management</h3>
              <p className="text-gray-700 leading-relaxed">
                Handle all guest interactions from booking approval to post-stay follow-up, including check-in coordination, housekeeping, and local support services.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12 text-center">
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white mx-auto">
                <Users size={40} className="text-sky-900" />
              </div>
            </div>
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-left hidden lg:block">
              {/* This div is intentionally left empty for alignment in desktop view */}
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between animate-fade-in-up delay-300">
            {/* Mobile Icon */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white">
                <ShieldCheck size={32} className="text-sky-900" />
              </div>
            </div>

            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pl-8 mb-8 lg:mb-0 lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">4. Property Care & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                Conduct regular property inspections, inventory checks, cleanliness maintenance, and provide detailed reports to keep your property in perfect condition.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12 text-center">
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white mx-auto">
                <ShieldCheck size={40} className="text-sky-900" />
              </div>
            </div>
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-right hidden lg:block">
              {/* This div is intentionally left empty for alignment in desktop view */}
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative mb-16 md:pl-32 lg:pl-0 lg:flex lg:items-center lg:justify-between animate-fade-in-up delay-400">
            {/* Mobile Icon */}
            <div className="absolute left-0 md:left-24 lg:left-1/2 transform -translate-x-1/2 top-0 lg:hidden">
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white">
                <DollarSign size={32} className="text-sky-900" />
              </div>
            </div>

            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">5. Revenue Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Continuously analyze performance data, adjust pricing based on demand trends, and provide detailed analytics to maximize your rental income potential.
              </p>
            </div>
            <div className="hidden lg:block lg:w-2/12 text-center">
              <div className="relative z-10 w-20 h-20 flex items-center justify-center bg-sky-400 rounded-full shadow-lg border-4 border-white mx-auto">
                <DollarSign size={40} className="text-sky-900" />
              </div>
            </div>
            <div className="pl-8 md:pl-0 lg:w-5/12 lg:pr-8 mb-8 lg:mb-0 lg:text-left hidden lg:block">
              {/* This div is intentionally left empty for alignment in desktop view */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel with larger quotes */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-sky-50 text-gray-900">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          What Our Valued Clients Say
        </h2>
        <div className="relative max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-sky-500 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" className="text-sky-400" />
            ))}
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <p className="text-xl md:text-2xl italic text-gray-700 mb-6 text-center leading-relaxed min-h-[120px] flex items-center justify-center">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-900 text-xl text-center">
                  - {testimonial.author}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </section>

      {/* Call to Action: List with Us - Prominent & Engaging */}
      <section id="list-with-us" className="py-20 px-6 md:px-12 bg-gradient-to-r from-sky-700 to-sky-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Elevate Your Property's Performance?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
          Connect with AweNestHost™ and discover how we can transform your investment into a thriving asset.
        </p>
        <a href="#contact" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl transition duration-300 transform hover:scale-105 animate-fade-in delay-200">
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
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email*</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300" placeholder="your@email.com" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message*</label>
                <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300" placeholder="Tell us how we can help..." required></textarea>
              </div>
              <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="flex items-center"><MapPin size={20} className="mr-2 text-sky-700" /> [Your Business Address Here - e.g., 123 Property Lane, Bengaluru, India]</p>
                <p className="flex items-center"><a href="mailto:info@awenesthost.com" className="text-sky-700 hover:underline flex items-center"><Mail size={20} className="mr-2" />info@awenesthost.com</a></p>
                <p className="flex items-center"><a href="tel:+918919823564" className="text-sky-700 hover:underline flex items-center"><Phone size={20} className="mr-2" />(+91) 891-982-3564</a></p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-sky-700 hover:text-sky-900 transition duration-300">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="text-sky-700 hover:text-sky-900 transition duration-300">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-sky-700 hover:text-sky-900 transition duration-300">
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
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 rounded-l-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full border border-gray-300" 
                />
                <button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-r-md transition duration-300">Submit</button>
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