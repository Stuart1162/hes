import React from 'react';
import { FaPlug, FaHome, FaUsb, FaCog, FaWrench, FaCheck } from 'react-icons/fa';

const Sockets = () => {
  const services = [
    {
      icon: FaPlug,
      title: "Additional Sockets",
      description: "Add new power outlets where you need them most, safely installed to current regulations."
    },
    {
      icon: FaUsb,
      title: "USB-C Outlets",
      description: "Modern fast-charge USB-C outlets for phones, tablets and other devices."
    },
    {
      icon: FaCog,
      title: "Smart Switches",
      description: "WiFi-enabled smart switches for remote control and automation of your lighting."
    },
    {
      icon: FaWrench,
      title: "Appliance Points",
      description: "Dedicated outlets for cookers, ovens, shavers and other high-power appliances."
    }
  ];

  const features = [
    "Additional or relocated sockets and spurs",
    "USB‑C fast charge outlets and smart switches",
    "Cooker, shaver and appliance points",
    "Repairs, replacements and testing"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaPlug className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sockets & Switches</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Additions, relocations and upgrades including USB‑C and smart controls
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Socket & Switch Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Modern electrical outlets and controls for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
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
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Get Sockets Quote
                </NavLink>
                <a 
                  href="/services#sockets" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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
              Why Upgrade Your Sockets?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Convenience</h3>
              <p className="text-gray-600">Add sockets exactly where you need them, eliminating the need for extension leads and improving safety.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Charging</h3>
              <p className="text-gray-600">Built-in USB-C outlets provide fast charging for modern devices without bulky adapters.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Home Ready</h3>
              <p className="text-gray-600">Smart switches enable remote control and automation, making your home more efficient and convenient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Socket Locations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🍳</div>
              <h3 className="font-semibold text-gray-900">Kitchen Islands</h3>
              <p className="text-sm text-gray-600">Power for appliances and device charging</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🛏️</div>
              <h3 className="font-semibold text-gray-900">Bedside Tables</h3>
              <p className="text-sm text-gray-600">Convenient charging for phones and lamps</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-semibold text-gray-900">Home Offices</h3>
              <p className="text-sm text-gray-600">Multiple outlets for computers and equipment</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-semibold text-gray-900">Garden Areas</h3>
              <p className="text-sm text-gray-600">Weatherproof outdoor power points</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Need More Power Points?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free quote for socket installation or upgrades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/get-a-quote" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Free Quote
              </NavLink>
              <a 
                href="tel:+441234567890" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
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

export default Sockets;
