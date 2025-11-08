import React from 'react';
import '../styles/customertype.css';
import '../styles/homepage.css';
import { FaClipboardCheck, FaFileAlt, FaTools, FaShieldAlt, FaKey, FaBell, FaClock, FaPhoneAlt } from 'react-icons/fa';

const Landlords = () => {
  const services = [
    {
      title: 'EICR Inspections',
      description: 'Comprehensive safety inspections with detailed digital reports',
      icon: <FaClipboardCheck className="text-blue-600 text-2xl" />
    },
    {
      title: 'Remedial Works',
      description: 'Clear coding (C1/C2/FI) and transparent quotations',
      icon: <FaTools className="text-blue-600 text-2xl" />
    },
    {
      title: 'Safety Alarms',
      description: 'Smoke and heat alarm installation and certification',
      icon: <FaBell className="text-blue-600 text-2xl" />
    },
    {
      title: 'Tenant Turnaround',
      description: 'Priority scheduling between tenancies',
      icon: <FaClock className="text-blue-600 text-2xl" />
    },
    {
      title: 'Agent Coordination',
      description: 'Seamless keysafe and agent coordination',
      icon: <FaKey className="text-blue-600 text-2xl" />
    },
    {
      title: 'Compliance Packages',
      description: 'Complete landlord compliance solutions',
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />
    }
  ];

  const benefits = [
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: 'Fast Response',
      description: 'Rapid scheduling and communication with agents.'
    },
    {
      icon: <FaFileAlt className="text-3xl text-blue-600" />,
      title: 'Paperwork Handled',
      description: 'Digital certificates, invoices and photo documentation.'
    },
    {
      icon: <FaTools className="text-3xl text-blue-600" />,
      title: 'Remedials Made Simple',
      description: 'Transparent pricing and quick turnaround on works.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Fully Insured',
      description: 'Work to BS 7671 with appropriate cover.'
    }
  ];

  return (
    <main className="customer-type-page">
      {/* Hero Section (Domestic-style with stickers) */}
      <section className="ct-hero relative py-20 lg:py-28">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="home-hero__title-wrap">
              <h1 className="ct-hero-title">Services for Landlords</h1>
              {/* Stickers */}
              <img
                src="/assets/img/lock.png"
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
                src="/assets/img/key.png"
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
              EICR reports, smoke/heat alarms and swift remedial works to keep your properties compliant.
            </p>
            <div className="mt-8 sm:flex-row gap-4 text-center mx-auto">
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

      {/* Services Section */}
      <section className="ct-section bg-white">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Landlord Compliance Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electrical safety services for rental properties
            </p>
          </div>
          
          <div className="ct-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="ct-card bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="flex items-start">
                  <div className="ct-card__icon bg-blue-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Landlords</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Your Property is Compliant</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today for reliable, professional electrical services for your rental properties.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
            >
              Book an Inspection
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

export default Landlords;
