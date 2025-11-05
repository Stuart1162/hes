import React from 'react';
import { FaLightbulb, FaTools, FaShieldAlt, FaClock, FaBuilding, FaCheck } from 'react-icons/fa';

const EmergencyLighting = () => {
  const services = [
    'Emergency lighting installation',
    'Regular testing and maintenance',
    'Emergency lighting design',
    'Battery backup systems',
    'Emergency exit signs',
    'Compliance certification'
  ];

  const benefits = [
    'Comply with BS 5266 and other regulations',
    'Ensure safe evacuation in emergencies',
    'Regular maintenance to keep systems operational',
    'Expert advice on emergency lighting requirements',
    '24/7 emergency call-out service'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Emergency Lighting Services in Glasgow</h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional emergency lighting installation, testing, and maintenance to keep your premises safe and compliant.
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Lighting Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our expert electricians provide comprehensive emergency lighting services to ensure your business remains safe and compliant with all regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Services Include:</h3>
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
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
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

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Emergency Lighting Services?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ensure your business is protected with our professional emergency lighting services. Contact us today for a free consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmergencyLighting;
