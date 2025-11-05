import React from 'react';
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
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Electrical Services</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Dependable electrical contracting for offices, retail, hospitality and light industrial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commercial Electrical Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Trusted Commercial Partner</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
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
