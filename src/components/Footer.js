import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              Henderson Electrical Services
            </h3>
            <p className="text-gray-400 mb-4">
              Professional, reliable electrical services for homes and businesses across Glasgow and surrounding areas. Fully certified and insured electricians you can trust.
            </p>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="/domestic" className="text-gray-400 hover:text-yellow-400 transition-colors">Domestic Services</a></li>
              <li><a href="/commercial" className="text-gray-400 hover:text-yellow-400 transition-colors">Commercial Services</a></li>
              <li><a href="/landlords" className="text-gray-400 hover:text-yellow-400 transition-colors">Landlord Services</a></li>
              <li><a href="/eicr" className="text-gray-400 hover:text-yellow-400 transition-colors">EICR Testing</a></li>
              <li><a href="/get-a-quote" className="text-gray-400 hover:text-yellow-400 transition-colors">Get a Quote</a></li>
              <li><a href="/locations" className="text-gray-400 hover:text-yellow-400 transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/service/lighting" className="text-gray-400 hover:text-yellow-400 transition-colors">Lighting Installation</a></li>
              <li><a href="/service/sockets" className="text-gray-400 hover:text-yellow-400 transition-colors">Sockets & Switches</a></li>
              <li><a href="/service/pat-testing" className="text-gray-400 hover:text-yellow-400 transition-colors">PAT Testing</a></li>
              <li><a href="/service/fault-finding" className="text-gray-400 hover:text-yellow-400 transition-colors">Fault Finding</a></li>
              <li><a href="/service/electrical-repairs" className="text-gray-400 hover:text-yellow-400 transition-colors">Electrical Repairs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">68 MacArthur Wynd,<br /> Cambuslang, Glasgow</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="tel:+441416420611" className="text-gray-400 hover:text-yellow-400 transition-colors">0141 642 0611</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="mailto:hes.glasgow@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">hes.glasgow@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <p className="text-sm text-gray-400">
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: Emergency callouts<br />
                Sun: Emergency callouts
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Henderson Electrical Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
            <a href="/locations" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">Locations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
