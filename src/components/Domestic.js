import React from 'react';
import '../styles/customertype.css';
import '../styles/homepage.css';
import { NavLink } from 'react-router-dom';
import { FaTools, FaClock, FaShieldAlt, FaBroom, FaHome, FaPlug, FaLightbulb, FaBath, FaTree, FaClipboardCheck, FaSearch, FaBolt, FaFan, FaWrench } from 'react-icons/fa';
import { CheckmarkCircle01Icon } from 'hugeicons-react';

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
    <main className="customer-type-page">
      {/* Hero Section */}
      <section className="ct-hero relative py-20 lg:py-28">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="home-hero__title-wrap">
              <h1 className="ct-hero-title">Your Home, Our Priority</h1>
              {/* Stickers */}
              <img
                src="/assets/img/dog.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--a"
                style={{ left: '-7%', top: '-10%', transform: 'scale(1.1) rotate(-6deg)' }}
              />
              <img
                src="/assets/img/bulb.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--b"
                style={{ right: '7%', top: '-2%', transform: 'scale(1.1)' }}
              />
              <img
                src="/assets/img/iron.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--c"
                style={{ left: '-12%', bottom: '-60%', transform: 'scale(1.1) rotate(6deg)' }}
              />
              <img
                src="/assets/img/house.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--d"
                style={{ right: '-10%', bottom: '-55%', transform: 'scale(1.1)' }}
              />
            </div>
            <p className="text-xl md:text-2xl">
              Reliable, tidy and fully certified domestic electricians for homes and flats across Glasgow and the surrounding areas.
            </p>
            <div className="mt-8 sm:flex-row gap-4 text-center mx-auto">
              <NavLink 
                to="/get-a-quote" 
                className="bg-white text-center font-semibold py-3 px-8 rounded-md text-center btn-primary"
              >
                Get a Free Quote
              </NavLink>
            
            </div>
          </div>
        </div>
      </section>

   

      {/* Detailed Services Section */}
      <section className="ct-section bg-white">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="supertext">Friendly and Reliable</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Domestic Electrical Services</h2>
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

      {/* About Section (duplicated from homepage) */}
      <section className="py-16 bg-white about-section">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Copy */}
            <div className="lg:col-span-7">
              <span className="supertext">Glasgow-based Electricians</span>
              <h2 className="section-title">Friendly and Reliable Electrical Services in Glasgow</h2>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
From flickering lights to full home rewires, we’re here to keep your home running smoothly and safely. Whether you’re upgrading your kitchen lighting, adding an EV charger, or just need a few sockets moved, our friendly electricians handle every job with care, respect, and a smile.                </p>
                <p>
We treat your home like our own — tidy, reliable, and always on time. No jargon, no surprises — just honest advice and quality work that lasts.                </p>
            
              </div>

              {/* Bulleted highlights */}
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 about-benefits">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="benefit">NICEIC standards and certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="benefit">On time and on budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="benefit">Qualified, friendly and professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="benefit">Advice for any home improvement</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/get-a-quote" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium btn-blue">Get a free quote</a>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-blue-600 text-blue-700 font-medium hover:bg-blue-50 transition-colors">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="ct-section bg-gray">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="supertext">Reliable electricians</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality Service You Can Trust</h2>
          </div>
          
          <div className="ct-grid ct-grid--4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="ct-benefit bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="ct-benefit__icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="ct-cta">
        <div className="ct-container text-center">
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
              Call Now: 0141 642 0611
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Domestic;
