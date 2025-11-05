import React from 'react';
import { FaLightbulb, FaPlug, FaBolt, FaCarBattery, FaSearch, FaTools, FaCertificate, FaShieldAlt, FaCheck } from 'react-icons/fa';

const ServiceCard = ({ id, title, description, icon: Icon, features, cta }) => (
  <section id={id} className="py-16 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="lg:col-span-5 mb-10 lg:mb-0">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Icon className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            {cta}
          </a>
        </div>
        <div className="lg:col-span-7 lg:pl-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={`/images/services/${id}.jpg`} 
              alt={title} 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://source.unsplash.com/random/800x600/?${id},electrical`;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const serviceSections = [
    {
      id: 'lighting',
      title: 'Lighting & Fixtures',
      description: 'Transform your space with modern, energy-efficient lighting solutions tailored to your needs.',
      icon: FaLightbulb,
      features: [
        'LED upgrades, downlights and feature lighting',
        'Smart dimmers and scene control',
        'Outdoor, garden and security lighting',
        'Fault finding and replacements',
      ],
      cta: 'Get Lighting Quote'
    },
    {
      id: 'sockets',
      title: 'Sockets & Switches',
      description: 'Upgrade your electrical outlets for safety, convenience, and modern living.',
      icon: FaPlug,
      features: [
        'Add, move or upgrade sockets and switches',
        'USB‑C fast‑charge outlets',
        'Shaver, cooker and appliance points',
        'Repairs and safety checks',
      ],
      cta: 'Get Sockets Quote'
    },
    {
      id: 'consumer-unit',
      title: 'Consumer Unit Upgrades',
      description: 'Ensure your home\'s electrical system is safe, efficient, and up to current regulations.',
      icon: FaBolt,
      features: [
        'RCD/RCBO consumer unit upgrades to BS 7671',
        'Earthing & bonding verification',
        'Circuit labeling and testing included',
        'Digital certification provided',
      ],
      cta: 'Get Consumer Unit Quote'
    },
    {
      id: 'ev',
      title: 'EV Charger Installations',
      description: 'Professional installation of electric vehicle charging points for your home or business.',
      icon: FaCarBattery,
      features: [
        'Home charge points (Zappi, Wallbox, Easee, others)',
        'Load management and surveys',
        'Compliance and documentation guidance',
        'App setup and commissioning',
      ],
      cta: 'Get EV Charger Quote'
    },
    {
      id: 'pat',
      title: 'Portable Appliance Testing (PAT)',
      description: 'Ensure the safety of your electrical appliances with our comprehensive testing service.',
      icon: FaSearch,
      features: [
        'Annual or scheduled PAT testing for workplaces and HMOs',
        'Barcode asset register and pass labels',
        'Digital report with advisories and failures listed',
        'Remedial repairs/replacements quoted where appropriate',
      ],
      cta: 'Request PAT Testing'
    },
    {
      id: 'eicr',
      title: 'Electrical Installation Condition Reports',
      description: 'Comprehensive inspection and testing of your electrical installations.',
      icon: FaCertificate,
      features: [
        'Landlord and commercial EICR certificates',
        'Detailed reports with coded observations',
        'Remedial works quoted separately',
        'Fully compliant with current regulations',
      ],
      cta: 'Book EICR Inspection'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Electrical Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              From small fixes to full installations. Clear pricing, certified work, and tidy finishes.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {serviceSections.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                {service.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Electrical Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Professional solutions for all your electrical needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceSections.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div className="divide-y divide-gray-200">
        {serviceSections.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Need help with an electrical project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our certified electricians are ready to help with any electrical work, big or small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get a Free Quote
              </a>
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

export default Services;
