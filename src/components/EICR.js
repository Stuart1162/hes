import React from 'react';
import { FaClipboardCheck, FaSearch, FaFilePdf, FaHome, FaBuilding, FaTools, FaShieldAlt, FaCheck } from 'react-icons/fa';

const EICR = () => {
  const inspectionScope = [
    'Visual inspection of accessories, enclosures and terminations',
    'Continuity, polarity, RCD and insulation resistance tests',
    'Assessment against latest BS 7671 (18th Edition)',
    'Clear observations with coding (C1, C2, C3, FI)',
    'Earth bonding and earthing conductor checks',
    'Consumer unit inspection and testing'
  ];

  const pricing = [
    { type: '1 Bed Home', price: 'from £120 + VAT' },
    { type: '2-3 Bed Home', price: 'from £140–£180 + VAT' },
    { type: '4+ Bed Home', price: 'from £200 + VAT' },
    { type: 'Commercial', price: 'POA' }
  ];

  const benefits = [
    {
      icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
      title: 'Comprehensive Report',
      description: 'Digital PDF with clear observations and photos'
    },
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: 'Thorough Inspection',
      description: 'Detailed testing of all circuits and accessories'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Fully Compliant',
      description: 'Meets all legal requirements for landlords'
    },
    {
      icon: <FaTools className="text-3xl text-blue-600" />,
      title: 'Remedial Works',
      description: 'Transparent pricing for any required fixes'
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EICR Testing & Certification</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Electrical Installation Condition Reports to ensure your property's electrical safety and compliance with BS 7671 (18th Edition) regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md text-center transition-colors duration-200"
              >
                Book an EICR
              </a>
              <a 
                href="tel:+441234567890" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md text-center transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold">WHAT'S INCLUDED</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive EICR Testing</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Scope of Inspection</h3>
                <ul className="space-y-4">
                  {inspectionScope.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Electrician performing EICR testing"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Understanding EICR Codes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-red-600 mb-2">C1 - Danger Present</h4>
                  <p className="text-gray-600">Risk of injury, immediate remedial action required.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-500 mb-2">C2 - Potentially Dangerous</h4>
                  <p className="text-gray-600">Urgent remedial action needed.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-yellow-500 mb-2">C3 - Improvement Recommended</h4>
                  <p className="text-gray-600">Not dangerous but could be improved.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-500 mb-2">FI - Further Investigation</h4>
                  <p className="text-gray-600">Additional investigation needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">PRICING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Competitive rates for comprehensive EICR testing and certification
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.type}</h3>
                  <p className="text-2xl font-bold text-blue-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img 
                  className="h-full w-full object-cover" 
                  src="https://images.unsplash.com/photo-1581093450230-e2c0164d2653?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Electrical testing equipment"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our EICR Service?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                  >
                    Book Your EICR Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an EICR Certificate?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to schedule your Electrical Installation Condition Report and ensure your property meets all safety regulations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+441234567890" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Call Now: 01234 567 890
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EICR;
