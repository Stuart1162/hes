import React from 'react';
import { FaBolt, FaShieldAlt, FaCertificate, FaTools, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const ConsumerUnit = () => {
  const services = [
    {
      icon: FaBolt,
      title: "RCBO/RCD Upgrades",
      description: "Modern consumer units with individual circuit protection and earth leakage detection."
    },
    {
      icon: FaShieldAlt,
      title: "Safety Testing",
      description: "Comprehensive earthing, bonding and circuit testing to ensure complete safety."
    },
    {
      icon: FaCertificate,
      title: "Certification",
      description: "Digital certificates and compliance documentation for building control and insurance."
    },
    {
      icon: FaTools,
      title: "Professional Install",
      description: "Clean, labeled installation with minimal disruption to your power supply."
    }
  ];

  const features = [
    "Upgrade to RCBO/RCD consumer units (18th Edition)",
    "Earthing and bonding verification",
    "Circuit labeling, testing and documentation",
    "Digital certificate issued on completion"
  ];

  const warningSigns = [
    "Old rewirable fuses or MCBs without RCD protection",
    "Frequent tripping or electrical faults",
    "No labeling on circuits",
    "Consumer unit over 15 years old",
    "Planning major electrical work or extensions"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaBolt className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Consumer Unit Upgrades</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Modern RCBO/RCD protection to BS 7671 with testing and certification
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FaExclamationTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Does Your Consumer Unit Need Upgrading?
              </h2>
              <p className="text-gray-700 mb-6">
                If you notice any of these warning signs, it may be time for a consumer unit upgrade:
              </p>
              <ul className="space-y-3">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Consumer Unit Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Complete upgrade service with modern safety features
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600 mb-4">
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
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                  Get Consumer Unit Quote
                </NavLink>
                <a 
                  href="/services#consumer-unit" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
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
              Benefits of Modern Consumer Units
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">RCD protection detects earth faults and prevents electric shock, while MCBs provide better circuit protection than old fuses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Power</h3>
              <p className="text-gray-600">Modern MCBs are more reliable than rewirable fuses and can be easily reset after a fault is cleared.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
              <p className="text-gray-600">Meets current BS 7671 (18th Edition) regulations and building control requirements for safety and insurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Installation Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Survey & Quote</h3>
              <p className="text-sm text-gray-600">We assess your current installation and provide a detailed quote</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe Isolation</h3>
              <p className="text-sm text-gray-600">Power is safely isolated and the old consumer unit removed</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Install & Test</h3>
              <p className="text-sm text-gray-600">New unit installed, circuits labeled and thoroughly tested</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certification</h3>
              <p className="text-sm text-gray-600">Digital certificate provided and building control notified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Upgrade Your Consumer Unit Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Ensure your home's electrical safety with a modern consumer unit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/get-a-quote" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Free Quote
              </NavLink>
              <a 
                href="tel:+441234567890" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
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

export default ConsumerUnit;
