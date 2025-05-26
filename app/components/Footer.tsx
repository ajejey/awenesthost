'use client';

import React from 'react';
import { Mail, Phone, Send, Facebook, Instagram, Twitter, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ownerLinks = [
    { name: 'List With Us', href: '#' },
    { name: 'Owner Login', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Partner With Us', href: '#' },
  ];

  const guestLinks = [
    { name: 'Explore AweNest Homes', href: '#' },
    { name: 'Guest Login', href: '#' },
    { name: 'How It Works', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Portfolio', href: '#' }, 
    { name: 'Contact Us', href: '#' },
    { name: 'Help', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-100 text-slate-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">AweNest</h3>
            <p className="text-sm text-slate-600 mb-6">
              Your trusted partner for exceptional vacation rental experiences.
            </p>
            <h4 className="font-semibold text-slate-800 mb-2">Subscribe to our newsletter</h4>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 text-sm text-slate-700 bg-white border border-slate-300 rounded-l-md focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white p-2.5 rounded-r-md transition-colors duration-300 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Column 2: For Owner */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">For Owners</h4>
            <ul className="space-y-2.5">
              {ownerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-amber-600 hover:underline transition-colors duration-300 flex items-center">
                    <ChevronRight size={16} className="mr-1 text-amber-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Guests */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">For Guests</h4>
            <ul className="space-y-2.5">
              {guestLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-amber-600 hover:underline transition-colors duration-300 flex items-center">
                    <ChevronRight size={16} className="mr-1 text-amber-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Contacts */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Company</h4>
            <ul className="space-y-2.5 mb-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-600 hover:text-amber-600 hover:underline transition-colors duration-300 flex items-center">
                    <ChevronRight size={16} className="mr-1 text-amber-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Contacts</h4>
            <a href="mailto:info@awenesthost.com" className="flex items-center text-sm text-slate-600 hover:text-amber-600 transition-colors duration-300 mb-2">
              <Mail size={16} className="mr-2 text-amber-500" />
              info@awenesthost.com
            </a>
            <a href="tel:+918919823564" className="flex items-center text-sm text-slate-600 hover:text-amber-600 transition-colors duration-300">
              <Phone size={16} className="mr-2 text-amber-500" />
              (+91) 891-982-3564
            </a>
          </div>
        </div>

        {/* Bottom bar: Copyright and Socials */}
        <div className="border-t border-slate-300 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 mb-4 md:mb-0">
            &copy; {currentYear} AweNest Vacation Rentals. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-slate-500 hover:text-amber-600 transition-colors duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;