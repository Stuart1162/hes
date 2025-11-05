import React from 'react';
import { FaLightbulb, FaHome, FaLeaf, FaCog, FaTools, FaCheck } from 'react-icons/fa';

const Lighting = () => {
  const services = [
    {
      icon: FaLightbulb,
      title: "LED Conversions",
      description: "Energy-efficient LED upgrades that reduce electricity bills and improve lighting quality."
    },
    {
      icon: FaHome,
      title: "Indoor Lighting",
      description: "Downlights, pendants, under-cabinet lighting and feature installations for every room."
    },
    {
      icon: FaCog,
      title: "Smart Controls",
      description: "Smart dimmers, scene control, motion sensors and automated lighting systems."
    },
    {
      icon: FaLeaf,
      title: "Outdoor Lighting",
      description: "Garden lighting, security lights, pathway illumination and exterior features."
    }
  ];

  const features = [
    "LED conversions and energy‑efficient upgrades",
    "Downlights, pendants and feature lighting",
    "Smart dimmers, scene control and sensors",
    "Garden, security and external lighting",
    "Fault finding and replacements"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaLightbulb className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lighting & Fixtures</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Design, upgrades and repairs for indoor, outdoor and feature lighting
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Lighting Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From energy-efficient LED upgrades to smart lighting systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600 mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What We Do
            </h2>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <NavLink 
                  to="/get-a-quote" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                >
                  Get Lighting Quote
                </NavLink>
                <a 
                  href="/services#lighting" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                >
                  Back to Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose LED Lighting?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-600">LED lights use up to 80% less energy than traditional bulbs, reducing your electricity bills significantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long Lasting</h3>
              <p className="text-gray-600">LED bulbs last 25 times longer than incandescent bulbs, reducing replacement costs and maintenance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Quality</h3>
              <p className="text-gray-600">Superior light quality with instant brightness, dimming capabilities, and various color temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Ready to Upgrade Your Lighting?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Get a free quote for your lighting project today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/get-a-quote" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-white hover:bg-yellow-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Free Quote
              </NavLink>
              <a 
                href="tel:+441234567890" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-yellow-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lighting;
