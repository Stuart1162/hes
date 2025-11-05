import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTools, FaClock, FaShieldAlt, FaBroom, FaHome, FaPlug, FaLightbulb, FaBath, FaTree, FaClipboardCheck, FaSearch, FaBolt, FaFan, FaWrench } from 'react-icons/fa';

const Domestic = () => {
  const popularJobs = [
    { 
      title: 'Fuse Boards', 
      description: 'Upgrades and earthing/bonding checks',
      icon: <FaTools className="text-blue-600 text-2xl" />,
      path: '/service/fuseboards'
    },
    { 
      title: 'Sockets & Switches', 
      description: 'Additional sockets, USB-C outlets and smart switches',
      icon: <FaPlug className="text-blue-600 text-2xl" />,
      path: '/service/sockets'
    },
    { 
      title: 'Lighting', 
      description: 'LED upgrades, downlights and feature lighting',
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
      path: '/service/lighting'
    },
    { 
      title: 'Electric Showers', 
      description: 'Professional installation and maintenance',
      icon: <FaBath className="text-blue-600 text-2xl" />,
      path: '/service/shower-installations'
    },
    { 
      title: 'Electrical Testing', 
      description: 'EICR and PAT testing services',
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
      path: '/eicr'
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaBroom className="text-3xl text-blue-600" />,
      title: 'Tidy & Respectful',
      description: 'Shoes off, dust sheets down, and we clean as we go.'
    },
    {
      icon: <FaTools className="text-3xl text-blue-600" />,
      title: 'Fully Equipped',
      description: 'Stocked vans and diagnostic tools for efficient fixes.'
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: 'On-Time Service',
      description: 'Reliable time slots with live updates.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Fully Certified',
      description: 'Work to BS 7671 with digital certificates.'
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Domestic Electrical Services</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Reliable, tidy and fully certified domestic electricians for homes and apartments across the region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/get-a-quote" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md text-center transition-colors duration-200"
              >
                Get a Free Quote
              </NavLink>
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

      {/* Popular Jobs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Domestic Jobs</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularJobs.map((job, index) => (
              <NavLink 
                key={index} 
                to={job.path}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600">{job.description}</p>
                    <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                      Learn more <span className="ml-1">→</span>
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">COMPREHENSIVE SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Domestic Electrical Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Smoke Alarms */}
            <NavLink 
              to="/service/smoke-alarms" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaLightbulb className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Smoke Alarms</h3>
                  <p className="text-gray-600 mb-4">Professional installation and maintenance of smoke and heat alarms to keep your home safe and compliant with current regulations.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interconnected smoke alarm installation
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Battery replacement services
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about smoke alarms <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* New Sockets */}
            <NavLink 
              to="/service/sockets" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaPlug className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sockets & Switches</h3>
                  <p className="text-gray-600 mb-4">Professional installation of additional power points, USB outlets, and modern switch upgrades throughout your home.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Additional power points
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      USB charging outlets
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about sockets & switches <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Lighting */}
            <NavLink 
              to="/service/lighting" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaLightbulb className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Lighting Solutions</h3>
                  <p className="text-gray-600 mb-4">From energy-efficient LED upgrades to complete lighting redesigns, we create the perfect ambiance for every room.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      LED lighting upgrades
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Recessed downlights
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about lighting solutions <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Electrical Testing */}
            <NavLink 
              to="/eicr" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaClipboardCheck className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Testing</h3>
                  <p className="text-gray-600 mb-4">Comprehensive electrical testing and inspection services to ensure your home's electrical system is safe and compliant.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      EICR testing and certification
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      PAT testing for appliances
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about electrical testing <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Fuse Boards */}
            <NavLink 
              to="/service/fuseboards" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaBolt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fuse Boards & Consumer Units</h3>
                  <p className="text-gray-600 mb-4">Professional installation and upgrades of consumer units to ensure your home's electrical system is safe and up to current regulations.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Consumer unit upgrades
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      RCD/RCBO installations
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about fuse boards <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Fault Finding */}
            <NavLink 
              to="/service/fault-finding" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaSearch className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Fault Finding</h3>
                  <p className="text-gray-600 mb-4">Diagnosis and repair of electrical faults to get your home's power back to normal as quickly as possible.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Circuit breaker tripping
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Power outages & flickering lights
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about fault finding <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Extraction Fans */}
            <NavLink 
              to="/service/extraction-fans" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaFan className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Extraction & Ventilation</h3>
                  <p className="text-gray-600 mb-4">Professional installation of bathroom and kitchen extractor fans to prevent damp and improve air quality.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bathroom extractor fans
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Kitchen extractor installation
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about extraction fans <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Electric Showers */}
            <NavLink 
              to="/service/shower-installations" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaBath className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Electric Showers</h3>
                  <p className="text-gray-600 mb-4">Professional installation, repair, and maintenance of electric showers for reliable hot water on demand.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      New electric shower installation
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Shower repairs and maintenance
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about electric showers <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Electrical Repairs */}
            <NavLink 
              to="/service/electrical-repairs" 
              className="block bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-transparent hover:border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaWrench className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Repairs</h3>
                  <p className="text-gray-600 mb-4">Fast, reliable repair services for all your domestic electrical issues, from flickering lights to complete circuit failures.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Socket and switch repairs
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Circuit breaker issues
                    </li>
                  </ul>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more about electrical repairs <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Service You Can Trust</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today for reliable, professional electrical services for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink 
              to="/get-a-quote" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
            >
              Get a Free Quote
            </NavLink>
            <a 
              href="tel:+441234567890" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
            >
              Call Now: 01234 567 890
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Domestic;
