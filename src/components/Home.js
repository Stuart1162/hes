import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaLightbulb, FaPlug, FaBolt, FaCarBattery, FaClipboardCheck, 
  FaHome, FaBuilding, FaKey, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaCheck, FaTools, FaShieldAlt, FaThumbsUp, FaUserTie, FaShower, FaSearch } from 'react-icons/fa';
import { Shield01Icon, Clock01Icon, PoundIcon, Search01Icon, Certificate01Icon, CheckmarkCircle01Icon, CapIcon, BubbleChatIcon } from 'hugeicons-react';

// Simple FAQ item with disclosure
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-gray-200 py-4 ${open ? 'bg-gray-50' : ''}`}>
      <button 
        className="w-full flex justify-between items-center text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors" 
        onClick={() => setOpen(!open)} 
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900">{q}</span>
        <span className="text-blue-600 text-xl font-bold" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-4 pt-2 pb-4 text-gray-600 bg-white">
          {a}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const services = [
    {
      title: 'Fuseboards',
      icon: FaBolt,
      features: [
        'Consumer unit upgrades and replacements',
        'RCD/RCBO installations',
        'Full safety testing and certification',
      ],
      path: '/service/fuseboards',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1580637250481-b78db3e4f5e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1513506003905-1c024370b79f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1567333979085-ac307f3f9359?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1581573744877-4bdebaa1a3a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      image: 'https://images.unsplash.com/photo-1580019542156-3cfca8f5e5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  // Customer types
  const customerContent = [
    {
      type: 'Domestic',
      icon: FaHome,
      features: [
        'Lighting, sockets, and consumer unit upgrades',
        'Kitchen/bathroom electrics and rewires',
        'EV chargers and smart home installs',
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'Commercial',
      icon: FaBuilding,
      features: [
        'Office/shop fit‑outs and 3‑phase distribution',
        'LED retrofits, emergency lighting and testing',
        'Planned maintenance and fault finding',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'Landlords',
      icon: FaKey,
      features: [
        'EICR reports and remedial works',
        'Smoke/heat alarms and compliance upgrades',
        'Rapid turnaround between tenancies',
      ],
      image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];
  // Tabs for Services section
  const [activeServiceTab, setActiveServiceTab] = useState('All');
  const serviceTabs = ['All', 'Installations', 'Testing & Safety', 'Upgrades'];

  // Simple categorization based on service title keywords
  const getServiceCategory = (title) => {
    const t = title.toLowerCase();
    if (/(eicr|pat)/.test(t)) return 'Testing & Safety';
    if (/(fuse|consumer|board|unit)/.test(t)) return 'Upgrades';
    // default bucket for most service installs
    return 'Installations';
  };

  const [activeCustomer, setActiveCustomer] = useState(0);

  // React to hash links: #service=... or #customer=...
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const raw = decodeURIComponent(location.hash.replace('#', ''));
    const [key, value] = raw.split('=');
    if (key === 'service' && services[value]) {
      setActiveTab(value);
      const el = document.querySelector('.tabs');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (key === 'customer' && customerContent[value]) {
      setActiveCustomer(value);
      const el = document.querySelector('.cust');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  // Testimonials data
  const testimonials = [
    {
      quote: "Professional service from start to finish. The team was punctual, clean, and did an excellent job upgrading our consumer unit.",
      author: "Sarah M.",
      rating: 5
    },
    {
      quote: "Quick response and fixed our lighting issue the same day. Would definitely recommend their services to anyone.",
      author: "James T.",
      rating: 5
    },
    {
      quote: "Great work installing our EV charger. They handled everything from the initial survey to the final setup.",
      author: "Emma R.",
      rating: 5
    }
  ];

  // Features section
  const features = [
    {
      icon: FaTools,
      title: "Expert Technicians",
      description: "Fully qualified and experienced electricians"
    },
    {
      icon: FaShieldAlt,
      title: "Fully Insured",
      description: "Comprehensive insurance for your peace of mind"
    },
    {
      icon: FaThumbsUp,
      title: "Quality Workmanship",
      description: "Guaranteed satisfaction on all our work"
    },
    {
      icon: FaUserTie,
      title: "Professional Service",
      description: "Courteous, punctual, and reliable"
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Electrical Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Reliable, professional electricians serving homes and businesses across the region
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+441234567890" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features - Modern Design */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Electrical Services You Can Trust
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We provide comprehensive electrical solutions with a commitment to quality, safety, and customer satisfaction.
            </p>
          </div>
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Shield01Icon className="w-5 h-5" />
                  </div>
                  NICEIC Certified
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">All our electricians are fully qualified and certified to the highest industry standards.</p>
                  <p className="mt-6">
                    <a href="/about" className="text-sm font-semibold leading-6 text-blue-600">Learn more <span aria-hidden="true">→</span></a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Clock01Icon className="w-5 h-5" />
                  </div>
                  Same Day Service
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Emergency call-outs available when you need us most, with rapid response times.</p>
                  <p className="mt-6">
                    <a href="/contact" className="text-sm font-semibold leading-6 text-blue-600">Get help now <span aria-hidden="true">→</span></a>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <PoundIcon className="w-5 h-5" />
                  </div>
                  Transparent Pricing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">No hidden fees or surprise charges. We provide clear, upfront pricing for all services.</p>
                  <p className="mt-6">
                    <a href="/quote" className="text-sm font-semibold leading-6 text-blue-600">Get a free quote <span aria-hidden="true">→</span></a>
                  </p>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Electrical Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          {/* Tabs */}
          <div className="mb-10">
            <div className="inline-flex flex-wrap gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
              {serviceTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services
              .filter((s) =>
                activeServiceTab === 'All' ? true : getServiceCategory(s.title) === activeServiceTab
              )
              .map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <service.icon className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need an Electrician Today?</h3>
              <p className="mb-6 text-blue-100">24/7 emergency service available for urgent electrical issues</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+441234567890" 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Call Now: 01234 567 890
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Request a Callback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Electrical Services (Content) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Copy */}
            <div className="lg:col-span-8">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">Domestic</span>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Domestic Electrical Services Glasgow</h2>
              <p className="mt-4 text-lg text-gray-600">
                If you’re looking for an electrician in Glasgow or South Lanarkshire, then get in touch with us today. We provide fully qualified and professional domestic electrical services on time and on budget.
              </p>
              <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Whether it’s a full rewiring or simply fitting a new socket, we carry out all work to the same high, certified and friendly standard that has made us one of the most trusted electrical contractors in Glasgow.
                </p>
                <p>
                  Our electricians in Glasgow have the tools, knowledge, qualifications and experience to complete any size of job and offer you the best advice on any electrical home improvement issues you are having.
                </p>
                <p>
                  Our Glasgow electricians complete all work to NICEIC standards and will provide all of the paperwork and certificates having complete the job.
                </p>
                <p>
                  Henderson Electrical Services offers a comprehensive range of electrical services. We are committed to providing a first class electrical service for our clients and offer you a complete range of professional services for your needs.
                </p>
              </div>

              {/* Bulleted highlights */}
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="text-gray-800">NICEIC standards and certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="text-gray-800">On time and on budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="text-gray-800">Qualified, friendly and professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <CheckmarkCircle01Icon className="h-4 w-4 text-blue-700" />
                  </span>
                  <span className="text-gray-800">Advice for any home improvement</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/get-a-quote" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Get a free quote</a>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-blue-600 text-blue-700 font-medium hover:bg-blue-50 transition-colors">Contact us</a>
              </div>
            </div>

            {/* Aside card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Why homeowners choose us</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow ring-1 ring-gray-200">
                      <Shield01Icon className="h-4 w-4 text-blue-700" />
                    </span>
                    <span className="text-sm text-gray-800">Insured and certified electricians</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow ring-1 ring-gray-200">
                      <Clock01Icon className="h-4 w-4 text-blue-700" />
                    </span>
                    <span className="text-sm text-gray-800">Reliable scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow ring-1 ring-gray-200">
                      <PoundIcon className="h-4 w-4 text-blue-700" />
                    </span>
                    <span className="text-sm text-gray-800">Transparent pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our work (moved up) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our work</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized electrical services to meet your specific requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerContent.map((customer, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 ${activeCustomer === index ? 'ring-2 ring-blue-500' : ''}`}
                onMouseEnter={() => setActiveCustomer(index)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={customer.image} 
                    alt={customer.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <customer.icon className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold">{customer.type}</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {customer.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Get {customer.type} Quote
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Compliance and Safety
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Shield01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meets BS 7671 (18th Edition)</h3>
              <p className="text-gray-600">All work carried out to the highest industry standards with full certification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Search01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Landlord EICR Legal Requirements</h3>
              <p className="text-gray-600">We provide Electrical Installation Condition Reports (EICR) for homes, businesses and rental properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Certificate01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Certificate and Clear Observations</h3>
              <p className="text-gray-600">Clear and concise reporting with actionable findings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold">HAVE QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <FaqItem 
                q="How quickly can you respond to an emergency call?"
                a="We offer 24/7 emergency call-out service with a typical response time of 2-4 hours for urgent cases. Our emergency electricians are available around the clock to handle any electrical emergencies."
              />
              <FaqItem 
                q="Are your electricians qualified and certified?"
                a="Yes, all our electricians are fully qualified, NICEIC registered, DBS checked, and regularly trained on the latest regulations and safety standards. We only employ experienced professionals who are experts in their field."
              />
              <FaqItem 
                q="Do you provide free quotes and estimates?"
                a="Absolutely! We offer free, no-obligation quotes for all electrical work. Our team will visit your property, assess your requirements, and provide a detailed, transparent quote with no hidden costs."
              />
              <FaqItem 
                q="What areas do you cover?"
                a="We serve the entire local area including London and surrounding counties. Contact us with your postcode and we'll be happy to confirm if we cover your location. We're also happy to consider jobs further afield for larger projects."
              />
              <FaqItem 
                q="How do I know if my property needs rewiring?"
                a="Common signs that your property may need rewiring include: old fuse boxes with wooden backs, fabric or rubber wiring, frequently tripping circuits, flickering lights, and sockets that don't work. If your wiring is over 25 years old, it's a good idea to have it inspected."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Contact us today for a free, no-obligation quote. Our team is ready to help with all your electrical needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <a href="tel:+441234567890" className="hover:underline">01234 567 890</a>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p>123 Electric Ave, London, UK</p>
              </div>
            </div>
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
            <FaClock className="text-blue-600 mr-2" />
            <span className="font-medium">Business Hours:</span>
            <span className="ml-2">Monday - Friday: 8:00 AM - 6:00 PM</span>
            <span className="mx-2">•</span>
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </section>

      

      

      {/* EICR Tests */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Certified EICR safety inspections
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Shield01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully qualified and insured inspectors</h3>
              <p className="text-gray-600">All work carried out to the highest industry standards with full certification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Certificate01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital PDF report and certification</h3>
              <p className="text-gray-600">Clear and concise reporting with actionable findings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><PoundIcon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remedial works quoted transparently</h3>
              <p className="text-gray-600">No surprise charges or hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Qualifications & Accreditation
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><CapIcon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">City & Guilds Qualified</h3>
              <p className="text-gray-600">18th Edition wiring regulations and inspection & testing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><CheckmarkCircle01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Part P Compliant</h3>
              <p className="text-gray-600">All notifiable work certified and building control notified.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Shield01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Public Liability Insured</h3>
              <p className="text-gray-600">Comprehensive cover for your peace of mind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Search01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">EICR & Testing</h3>
              <p className="text-gray-600">Landlord, homebuyer, and periodic safety inspections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Henderson Electrical Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Shield01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified & Insured</h3>
              <p className="text-gray-600">Fully qualified electricians with public liability cover and Part P compliance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><Clock01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">On-time Guarantee</h3>
              <p className="text-gray-600">We respect your time. Accurate slots and live updates to your phone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4"><BubbleChatIcon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear Pricing</h3>
              <p className="text-gray-600">No surprises. Transparent quotes and itemised invoices for every job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
          >
            Request a Callback
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
