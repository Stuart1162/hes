import React from 'react';
import '../styles/customertype.css';
import '../styles/homepage.css';
import { NavLink } from 'react-router-dom';
import { FaBuilding, FaClipboardCheck, FaLightbulb, FaPlug, FaTools, FaShieldAlt, FaFireExtinguisher, FaBolt, FaSearch, FaClock, FaUserTie, FaDollarSign } from 'react-icons/fa';

const Commercial = () => {
  const services = [
    {
      title: 'PAT Testing',
      description: 'Portable Appliance Testing for all your business equipment',
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
      path: '/service/pat-testing'
    },
    {
      title: 'Emergency Lighting',
      description: 'Installation and maintenance of emergency lighting systems',
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
      path: '/service/emergency-lighting'
    },
    {
      title: 'EICR Certificates',
      description: 'Electrical Installation Condition Reports for businesses',
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
      path: '/service/eicr-certificates'
    },
    {
      title: 'Rewiring',
      description: 'Complete rewiring services for commercial properties',
      icon: <FaBolt className="text-blue-600 text-2xl" />,
      path: '/service/commercial-rewiring'
    },
    {
      title: 'Office Lighting',
      description: 'Modern and efficient lighting solutions for offices',
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
      path: '/service/office-lighting'
    },
    {
      title: 'Smoke & Fire Alarms',
      description: 'Installation and maintenance of fire safety systems',
      icon: <FaFireExtinguisher className="text-blue-600 text-2xl" />,
      path: '/service/smoke-fire-alarms'
    },
    {
      title: 'Compliance',
      description: 'EICR testing and certification',
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />
    }
  ];

  const benefits = [
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: 'Flexible Scheduling',
      description: 'Out-of-hours and phased works to minimise disruption.'
    },
    {
      icon: <FaUserTie className="text-3xl text-blue-600" />,
      title: 'Project Management',
      description: 'Clear timelines, RAMS and communication throughout.'
    },
    {
      icon: <FaDollarSign className="text-3xl text-blue-600" />,
      title: 'Transparent Pricing',
      description: 'Itemised quotations and variations agreed in advance.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Compliance Focused',
      description: 'Work to BS 7671 with appropriate certification.'
    }
  ];

  return (
    <main className="customer-type-page">
      {/* Hero Section (copied from Domestic with stickers) */}
      <section className="ct-hero relative py-20 lg:py-28">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="home-hero__title-wrap">
              <h1 className="ct-hero-title">Powering Your Business</h1>
              {/* Stickers */}
              <img
                src="/assets/img/laptop.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--a"
                style={{ left: '-7%', top: '-10%', transform: 'scale(1.1) rotate(-6deg)' }}
              />
              <img
                src="/assets/img/computer.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--b"
                style={{ right: '7%', top: '-2%', transform: 'scale(1.1)' }}
              />
              <img
                src="/assets/img/till.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--c"
                style={{ left: '-12%', bottom: '-60%', transform: 'scale(1.1) rotate(6deg)' }}
              />
              <img
                src="/assets/img/kettle.png"
                alt=""
                className="home-hero__sticker home-hero__sticker--d"
                style={{ right: '-10%', bottom: '-55%', transform: 'scale(1.1)' }}
              />
            </div>
            <p className="text-xl md:text-2xl">
              Dependable electrical contracting for offices, retail, hospitality and light industrial.
            </p>
            <div className="mt-8 sm:flex-row gap-4 text-center mx-auto">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md text-center transition-colors duration-200"
              >
                Request Site Visit
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

      {/* Services Section */}
      <section className="ct-section bg-white">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commercial Electrical Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical services tailored to your business needs
            </p>
          </div>
          
          <div className="ct-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="ct-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="ct-card__icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                {service.path ? (
                  <NavLink 
                    to={service.path} 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Learn more <span className="ml-1">→</span>
                  </NavLink>
                ) : (
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ct-section bg-gray">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Trusted Commercial Partner</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="ct-grid ct-grid--4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="ct-benefit bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="ct-benefit__icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ct-cta">
        <div className="ct-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today for reliable, professional electrical services for your commercial property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-800 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
            >
              Request a Quote
            </a>
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

export default Commercial;
