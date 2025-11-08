import React from 'react';
import { FaLightbulb, FaPlug, FaBolt, FaCarBattery, FaSearch, FaTools, FaCertificate, FaShieldAlt, FaCheck, FaClipboardCheck, FaShower } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepage.css';

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
              src={`https://source.unsplash.com/800x600/?${id},electrical`} 
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

  const services = [
    {
      title: 'Fuseboards',
      icon: FaBolt,
      features: [
        'Upgrades and replacements',
        'RCD/RCBO installations',
        'Full safety testing and certification',
      ],
      path: '/service/fuseboards',
      image: '/assets/img/Fuseboards.png'
    },
    {
      title: 'Smoke Alarms',
      icon: FaShieldAlt,
      features: [
        'Interlinked smoke and heat detectors',
        'Battery and mains-powered options',
        'Landlord compliance certification',
      ],
      path: '/service/smoke-alarms',
      image: '/assets/img/SmokeAlarms.png'
    },
    {
      title: 'EICR Testing',
      icon: FaClipboardCheck,
      features: [
        'Landlord safety certificates',
        'Homebuyer electrical inspections',
        'Detailed reports and remedial work',
      ],
      path: '/eicr',
      image: '/assets/img/EICRTesting.png'
    },
    {
      title: 'Lighting',
      icon: FaLightbulb,
      features: [
        'LED lighting installations',
        'Indoor and outdoor lighting',
        'Smart lighting solutions',
      ],
      path: '/service/lighting',
      image: '/assets/img/Lighting.png'
    },
    {
      title: 'PAT Testing',
      icon: FaPlug,
      features: [
        'Portable appliance testing',
        'Landlord and business compliance',
        'Certification provided',
      ],
      path: '/service/pat-testing',
      image: '/assets/img/PATTesting.png'
    },
    {
      title: 'Sockets',
      icon: FaPlug,
      features: [
        'Additional power outlets',
        'USB socket installations',
        'Faulty socket repairs',
      ],
      path: '/service/sockets',
      image: '/assets/img/Sockets.png'
    },
    {
      title: 'Shower Installations',
      icon: FaShower,
      features: [
        'Electric shower installations',
        'Power shower upgrades',
        'Bathroom electrical work',
      ],
      path: '/service/shower-installations',
      image: '/assets/img/ShowerInstallations.png'
    },
    {
      title: 'Rewiring',
      icon: FaTools,
      features: [
        'Full and partial rewires',
        'Period property rewiring',
        'Minimal disruption guaranteed',
      ],
      path: '/service/rewiring',
      image: '/assets/img/Rewiring.png'
    },
    {
      title: 'Fault Finding',
      icon: FaSearch,
      features: [
        'Diagnostic testing',
        'Circuit fault location',
        'Emergency callouts available',
      ],
      path: '/service/fault-finding',
      image: '/assets/img/FaultFinding.png'
    },
    {
      title: 'Electrical Repairs',
      icon: FaTools,
      features: [
        'Fuse box repairs',
        'Faulty wiring repairs',
        'Lighting circuit issues',
      ],
      path: '/service/electrical-repairs',
      image: '/assets/img/ElectricalRepairs.png'
    },
  ];

  const [activeServiceTab, setActiveServiceTab] = useState('All');
  const serviceTabs = ['All', 'Domestic', 'Commercial', 'Landlords'];

  const getServiceCategories = (title) => {
    const t = title.toLowerCase();
    const cats = new Set();
    if (/(eicr\s*testing|eicr\s*tests?)/.test(t)) cats.add('Landlords');
    if (/(rewiring?)/.test(t)) cats.add('Landlords');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Landlords');
    if (/(smoke\s*alarms?)/.test(t)) cats.add('Landlords');

    if (/(eicr\s*testing|eicr\s*tests?)/.test(t)) cats.add('Commercial');
    if (/(pat\s*testing|pat\s*tests?)/.test(t)) cats.add('Commercial');
    if (/(rewiring?)/.test(t)) cats.add('Commercial');
    if (/(fault\s*finding)/.test(t)) cats.add('Commercial');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Commercial');

    if (/(lighting)/.test(t)) cats.add('Domestic');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Domestic');
    if (/(smoke\s*alarms?)/.test(t)) cats.add('Domestic');
    if (/(sockets?)/.test(t)) cats.add('Domestic');
    if (/(shower|showers)/.test(t)) cats.add('Domestic');
    if (/(rewiring?)/.test(t)) cats.add('Domestic');
    if (/(fault\s*finding)/.test(t)) cats.add('Domestic');
    if (/(electrical\s*repairs?)/.test(t)) cats.add('Domestic');

    if (cats.size === 0) cats.add('Domestic');
    return Array.from(cats);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 services-list-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              From small fixes to full installations. Clear pricing, certified work, and tidy finishes.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="home-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 home-services__header">
            <div>
              <span className="supertext">Our services</span>
              <h2 className="section-title">Our Electrical Services in Glasgow</h2>
            </div>
            <div className="home-services__tabs">
              <div className="inline-flex flex-wrap gap-2 bg-white p-2 rounded-lg border border-gray-200 home-services__tabs-inner">
                {serviceTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveServiceTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors home-services__tab ${
                      activeServiceTab === tab
                        ? 'bg-blue-600 text-white shadow'
                        : 'bg-transparent text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="home-services__grid">
            {services
              .filter((s) =>
                activeServiceTab === 'All' ? true : getServiceCategories(s.title).includes(activeServiceTab)
              )
              .map((service, index) => (
              <Link 
                key={index}
                to={service.path || `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="home-service-card"
              >
                <div className="home-service-card__content">
                  <div className="flex flex-col items-start mb-4">
                    <div className="bg-blue-100 p-3 mb-3 icon-container">
                      <service.icon className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="home-service-card__title">{service.title}</h3>
                  </div>
                  <ul className="home-service-card__features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="home-service-card__feature">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-48 overflow-hidden mt-4 img-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="home-service-card__image"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </section>

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
