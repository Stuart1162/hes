import React from 'react';
import { FaClipboardCheck, FaTools, FaBuilding, FaShieldAlt, FaClock, FaCheck } from 'react-icons/fa';

const PatTesting = () => {
  const features = [
    'Comprehensive testing of all portable appliances',
    'Fully compliant with HSE and IET regulations',
    'Detailed reports and certification provided',
    'Minimal disruption to your business operations',
    'Testing for all types of electrical equipment',
    'Regular testing schedules available'
  ];

  const benefits = [
    'Ensure compliance with health and safety regulations',
    'Reduce the risk of electrical accidents',
    'Protect your employees and customers',
    'Maintain insurance validity',
    'Peace of mind with professional testing'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 pt-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">PAT Testing Services in Glasgow</h1>
              <p className="text-xl text-blue-100 mb-6">
                Professional Portable Appliance Testing for businesses across Glasgow. Ensure your electrical equipment is safe and compliant.
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
          
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive PAT Testing Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our certified electricians provide thorough PAT testing to ensure all your portable appliances are safe and compliant with current regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our PAT Testing Includes:</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Benefits of Regular PAT Testing</h3>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need PAT Testing for Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to schedule your PAT testing service. We offer competitive rates and flexible scheduling to minimize disruption to your business.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Book Your PAT Test
          </a>
        </div>
      </section>
    </div>
  );
};

export default PatTesting;
