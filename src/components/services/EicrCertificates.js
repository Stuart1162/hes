import React from 'react';
import { FaClipboardCheck, FaTools, FaShieldAlt, FaHome, FaBuilding, FaSearch, FaCheck } from 'react-icons/fa';

const EicrCertificates = () => {
  const whatIsEICR = [
    'A detailed inspection of your electrical installations',
    'Identifies any potential safety issues',
    'Checks compliance with current regulations',
    'Results in a comprehensive report',
    'Required for landlords, businesses, and homeowners'
  ];

  const benefits = [
    'Compliance with legal requirements',
    'Identification of potential hazards',
    'Peace of mind for property owners',
    'Reduced risk of electrical fires',
    'Professional assessment by certified electricians'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white hero-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">EICR Certificates in Glasgow</h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional Electrical Installation Condition Reports for homes and businesses across Glasgow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="/get-a-quote" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Get a Free Quote
                </a>
                <a 
                  href="tel:01416420611" 
                  className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Call Now: 0141 642 0611
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 pl-12">
              <FaClipboardCheck className="h-48 w-48 text-blue-300 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What is EICR Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is an EICR?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              An Electrical Installation Condition Report (EICR) is an official document that assesses the safety and condition of your electrical installations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Key Aspects of EICR:</h3>
              <ul className="space-y-4">
                {whatIsEICR.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Benefits of EICR Testing</h3>
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

      {/* Who Needs EICR Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Needs an EICR?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Homeowners</h3>
              <p className="text-gray-600 text-center">
                Ensure your home's electrical system is safe for you and your family.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Landlords</h3>
              <p className="text-gray-600 text-center">
                Legal requirement for all rental properties to be tested every 5 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Businesses</h3>
              <p className="text-gray-600 text-center">
                Regular testing ensures workplace safety and compliance with regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need an EICR Certificate?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to book your EICR inspection. Our certified electricians provide thorough testing and comprehensive reports.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Book Your EICR Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default EicrCertificates;
