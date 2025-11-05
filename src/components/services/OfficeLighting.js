import React from 'react';
import { FaLightbulb, FaTools, FaBuilding, FaShieldAlt, FaRegLightbulb, FaCheck } from 'react-icons/fa';

const OfficeLighting = () => {
  const services = [
    'LED lighting installation',
    'Office lighting design',
    'Emergency lighting systems',
    'Lighting control systems',
    'Suspended ceiling lighting',
    'Task lighting solutions'
  ];

  const benefits = [
    'Reduced energy costs',
    'Improved employee productivity',
    'Enhanced office aesthetics',
    'Reduced maintenance requirements',
    'Customizable lighting solutions'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Office Lighting in Glasgow</h1>
              <p className="text-xl text-blue-100 mb-6">
                Transform your workspace with professional office lighting solutions that enhance productivity and reduce energy costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="/get-a-quote" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Get a Free Quote
                </a>
                <a 
                  href="tel:01415552233" 
                  className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Call Now: 0141 555 2233
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 pl-12">
              <FaLightbulb className="h-48 w-48 text-blue-300 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Office Lighting Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive office lighting solutions tailored to your business needs, from design to installation and maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaShieldAlt className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lighting Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Office Lighting Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">LED Lighting</h3>
              <p className="text-gray-600 text-center">
                Energy-efficient LED lighting solutions that reduce costs and maintenance while providing excellent light quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaRegLightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Task Lighting</h3>
              <p className="text-gray-600 text-center">
                Focused lighting solutions for workstations to reduce eye strain and improve productivity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Ambient Lighting</h3>
              <p className="text-gray-600 text-center">
                General lighting solutions that create a comfortable and well-lit office environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Upgrade Your Office Lighting?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and let us help you create the perfect lighting solution for your office space.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Book Your Lighting Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default OfficeLighting;
