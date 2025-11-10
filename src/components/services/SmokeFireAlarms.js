import React from 'react';
import { FaFireExtinguisher, FaTools, FaShieldAlt, FaBell, FaHome, FaBuilding, FaCheck } from 'react-icons/fa';

const SmokeFireAlarms = () => {
  const services = [
    'Smoke alarm installation',
    'Fire alarm system design',
    'Regular testing and maintenance',
    'Emergency lighting installation',
    'Fire alarm upgrades',
    'Commercial fire risk assessments'
  ];

  const benefits = [
    'Compliance with fire safety regulations',
    'Monitoring available',
    'Reduced insurance premiums',
    'Peace of mind',
    'Professional installation and maintenance'
  ];

  return (
    <div className="min-h-screen bg-gray-50 service-hero">
      {/* Hero Section */}
      <section className="bg-red-700 text-white hero-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Smoke & Fire Alarms in Glasgow</h1>
              <p className="text-xl text-red-100 mb-6">
                Professional installation, maintenance, and testing of smoke and fire alarm systems for businesses and homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="/get-a-quote" 
                  className="bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-medium text-center transition-colors"
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
              <FaFireExtinguisher className="h-48 w-48 text-red-300 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fire Safety Services</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Protect your property and people with our comprehensive fire safety solutions. We provide expert installation and maintenance of fire alarm systems.
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
                    <FaShieldAlt className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alarm Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Fire Alarm Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaHome className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Domestic</h3>
              <p className="text-gray-600 text-center">
                Smoke and heat alarms for homes, meeting all current Scottish regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaBuilding className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Commercial</h3>
              <p className="text-gray-600 text-center">
                Comprehensive fire alarm systems for businesses of all sizes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaBell className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Wireless Alarms</h3>
              <p className="text-gray-600 text-center">
                Modern wireless solutions for easy installation and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regular Maintenance</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ensure your fire alarm system is always in perfect working order with our professional maintenance services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">Monthly</div>
              <p className="text-gray-600">Basic visual inspections and testing</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
              <div className="text-4xl font-bold text-red-700 mb-2">Quarterly</div>
              <p className="text-gray-600">Comprehensive system testing</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">Annually</div>
              <p className="text-gray-600">Full system inspection and certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Fire Safety Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote. Our team will assess your needs and recommend the best fire safety solution for your property.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Book Your Fire Safety Assessment
          </a>
        </div>
      </section>
    </div>
  );
};

export default SmokeFireAlarms;
