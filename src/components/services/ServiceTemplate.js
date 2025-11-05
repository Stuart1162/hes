import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const serviceData = {
  'fuseboards': {
    title: 'Fuseboard Installations & Upgrades',
    description: 'Professional installation and upgrades of consumer units (fuseboards) to ensure your electrical system is safe and compliant with current regulations. Modern fuseboards provide better protection and reduce electrical risks.',
    features: [
      'Consumer unit upgrades and replacements',
      'RCD/RCBO installations for enhanced protection',
      'Full safety testing and certification',
      'Minimal disruption to your property',
      'All work guaranteed',
      '18th Edition compliant installations',
      'Surge protection options available'
    ],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Book a free consultation for your fuseboard upgrade',
    detailedDescription: `
We specialise in upgrading and replacing fuseboards (consumer units) to the latest standards, ensuring your property is protected by modern safety devices like RCDs and RCBOs. An upgraded consumer unit significantly reduces the risk of electric shock and electrical fires.

Every installation includes full testing, NICEIC certification, and clear documentation for your records. We work efficiently to minimise disruption and will talk you through your new protection features before we leave.
`,
    process: [
      'Free consultation and safety assessment',
      'Clear quotation with options (RCD/RCBO, surge protection)',
      'Professional installation by certified electricians',
      'Full testing, commissioning and certification',
      'Handover and guidance on your new consumer unit'
    ],
    benefits: [
      'Enhanced electrical safety for your property',
      'Protection against electric shock and fire',
      'Improved reliability and fewer nuisance trips',
      'Compliance with current regulations (18th Edition)',
      'Can improve saleability and insurance acceptance'
    ],
    pricing: {
      startingFrom: '£350',
      includes: 'Supply and installation of standard consumer unit, testing and NICEIC certification',
      note: 'Final price depends on circuit count, RCBO choice, surge protection, and remedial work if required'
    },
    faqs: [
      'How long does a fuseboard upgrade take?',
      'Do I need RCBOs or are RCDs enough?',
      'Will power be off for the whole property?',
      'Do you provide certification after installation?',
      'Is surge protection recommended?'
    ]
  },
  'smoke-alarms': {
    title: 'Smoke Alarms & Detectors',
    description: 'Professional installation and maintenance of smoke and heat alarms to keep your property safe and compliant with regulations.',
    features: [
      'Interlinked smoke and heat detectors',
      'Battery and mains-powered options',
      'Landlord compliance certification',
      'Regular maintenance packages',
      '10-year sealed battery options',
      'Carbon monoxide detector installations'
    ],
    image: 'https://images.unsplash.com/photo-1580637250481-b78db3e4f5e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Get a free quote for smoke alarm installation',
    detailedDescription: `
Keep your home or rental property safe with correctly specified and interlinked smoke and heat alarms. We install mains-powered and battery-powered systems, including options suitable for Scottish regulations requiring interlinked alarms.

We handle design, installation, testing and certification, and can include carbon monoxide detectors where required. Maintenance plans are available to ensure ongoing compliance.
`,
    process: [
      'Property assessment and alarm planning',
      'Installation of interlinked smoke and heat detectors',
      'Testing, labelling and user demonstration',
      'Certification and compliance documentation'
    ],
    benefits: [
      'Early detection protects life and property',
      'Meets current building and landlord regulations',
      'Options for 10-year sealed battery units',
      'CO detector integration available'
    ],
    pricing: {
      startingFrom: '£150',
      includes: 'Supply and installation of interlinked alarms and testing',
      note: 'Final price depends on number of rooms and alarm types'
    },
    faqs: [
      'How many alarms does my property need?',
      'Do they have to be interlinked?',
      'Battery vs mains-powered: which is best?',
      'How often should I test the alarms?'
    ]
  },
  'eicr': {
    title: 'EICR Testing',
    description: 'Comprehensive Electrical Installation Condition Reports to ensure your property is electrically safe and compliant with regulations.',
    features: [
      'Landlord safety certificates',
      'Homebuyer electrical inspections',
      'Detailed reports with remedial work',
      'Competitive pricing',
      'Fast turnaround times',
      'Digital report with photos'
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Book your EICR test today',
    detailedDescription: `
An Electrical Installation Condition Report (EICR) assesses the safety of your fixed wiring, consumer unit, sockets, lighting and protective devices. Our NICEIC electricians carry out visual inspections and instrument testing, issuing a report with clear coding and recommendations.
`,
    process: [
      'Visual inspection of the installation',
      'Testing of circuits and protective devices',
      'Defect classification and recommendations',
      'Issue digital report and discuss next steps'
    ],
    benefits: [
      'Legal compliance for landlords',
      'Identifies hidden electrical hazards',
      'Supports insurance requirements',
      'Peace of mind for buyers and homeowners'
    ],
    pricing: {
      startingFrom: '£120',
      includes: 'Full inspection and digital report',
      note: 'Price varies by property size and circuit count'
    },
    faqs: [
      'How long does an EICR take?',
      'How often is an EICR required?',
      'What does an unsatisfactory report mean?',
      'Do you quote for remedial work?'
    ]
  },
  'lighting': {
    title: 'Lighting Installations',
    description: 'Professional indoor and outdoor lighting solutions to enhance your home or business.',
    features: [
      'LED lighting installations',
      'Indoor and outdoor lighting',
      'Smart lighting solutions',
      'Energy-efficient upgrades',
      'Emergency lighting systems',
      'Garden and landscape lighting'
    ],
    image: 'https://images.unsplash.com/photo-1513506003905-1c024370b79f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Illuminate your space with our lighting solutions',
    detailedDescription: `
From energy-saving LED upgrades to complete lighting design and installation, we deliver beautiful, efficient lighting for homes, gardens and commercial spaces. We also integrate smart lighting controls for convenience and automation.
`,
    process: [
      'Design consultation and lighting plan',
      'Specification and quotation',
      'Professional installation and testing',
      'Programming of smart controls (if applicable)'
    ],
    benefits: [
      'Lower energy bills with LED',
      'Improved aesthetics and ambience',
      'Smart control and automation options',
      'Reliable, compliant installations'
    ],
    pricing: {
      startingFrom: '£80',
      includes: 'Supply and installation of standard LED fittings',
      note: 'Final cost depends on fixture type and layout'
    },
    faqs: [
      'What are the best LEDs for my rooms?',
      'Can you install smart lighting?',
      'Do you provide outdoor lighting design?',
      'How long do LEDs last?'
    ]
  },
  'pat-testing': {
    title: 'PAT Testing',
    description: 'Portable Appliance Testing to ensure all your electrical equipment is safe for use.',
    features: [
      'Portable appliance testing',
      'Landlord and business compliance',
      'Certification provided',
      'Minimal disruption',
      'Competitive rates',
      'Asset register and labelling'
    ],
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Schedule your PAT testing today',
    detailedDescription: `
We test portable appliances using calibrated equipment and record results for your compliance records. Ideal for offices, landlords, hospitality and workshops.
`,
    process: [
      'Site survey and inventory',
      'Visual inspections and electrical tests',
      'Label each item and capture results',
      'Provide certificate and recommendations'
    ],
    benefits: [
      'Demonstrates compliance with H&S',
      'Reduces risk of electrical accidents',
      'Supports insurance requirements',
      'Convenient scheduling to minimise disruption'
    ],
    pricing: {
      startingFrom: '£1.50',
      includes: 'Per-appliance testing and certification',
      note: 'Minimum charge and volume discounts apply'
    },
    faqs: [
      'How often should I PAT test equipment?',
      'Which appliances need testing?',
      'Do you test out of hours?',
      'Can you manage my asset register?'
    ]
  },
  'sockets': {
    title: 'Socket Installations & Repairs',
    description: 'Professional installation and repair of electrical sockets and switches.',
    features: [
      'Additional power outlets',
      'USB socket installations',
      'Faulty socket repairs',
      'Safety switch installations',
      'Child-proof solutions',
      'Outdoor weatherproof sockets'
    ],
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Upgrade your electrical sockets today',
    detailedDescription: `
Add new outlets where you need them, upgrade to modern USB sockets, or repair damaged accessories. We install indoor and outdoor sockets to current standards.
`,
    process: [
      'Assess your layout and requirements',
      'Plan cable routes and positions',
      'Install/repair sockets to regulations',
      'Test and certify the work'
    ],
    benefits: [
      'Improved convenience and safety',
      'Modern charging with USB/USB-C',
      'Safe outdoor power solutions',
      'Fully tested and certified'
    ],
    pricing: {
      startingFrom: '£65',
      includes: 'Single socket installation (standard)',
      note: 'Price varies by cable route and accessory type'
    },
    faqs: [
      'Can you add sockets to external walls?',
      'Are USB-C outlets available?',
      'What is the best height for sockets?',
      'Do I need RCD protection?'
    ]
  },
  'shower-installations': {
    title: 'Electric Shower Installations',
    description: 'Professional installation and maintenance of electric showers.',
    features: [
      'Electric shower installations',
      'Power shower upgrades',
      'Bathroom electrical work',
      'Full testing and certification',
      'Emergency callouts available',
      'Thermostatic and digital options'
    ],
    image: 'https://images.unsplash.com/photo-1567333979085-ac307f3f9359?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Get a free quote for your shower installation',
    detailedDescription: `
Safe, compliant installation of electric and power showers, including cabling, protective devices and isolators. We coordinate with plumbing requirements where needed.
`,
    process: [
      'Electrical safety and supply assessment',
      'Select the correct kW rating and model',
      'Install cabling, isolator and shower unit',
      'Test, certify and demonstrate operation'
    ],
    benefits: [
      'Reliable hot showers on demand',
      'Safe installation to bathroom zones',
      'Advice on sizing and models',
      'Emergency repair options available'
    ],
    pricing: {
      startingFrom: '£250',
      includes: 'Installation and testing (excludes plumbing alterations)',
      note: 'Price varies by cable run and shower rating'
    },
    faqs: [
      'What size (kW) shower do I need?',
      'Can you replace like-for-like?',
      'Do you handle plumbing as well?',
      'How long does installation take?'
    ]
  },
  'rewiring': {
    title: 'Electrical Rewiring',
    description: 'Complete rewiring services for homes and businesses of all sizes.',
    features: [
      'Full and partial rewires',
      'Period property rewiring',
      'Minimal disruption guaranteed',
      'All work certified',
      '10-year insurance-backed guarantee'
    ],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Book a free rewiring assessment',
    detailedDescription: `
Whether full or partial, our rewiring service brings your installation up to modern standards with new circuits, earthing and consumer unit protection. Ideal for renovations, extensions and older properties.
`,
    process: [
      'Detailed survey and quotation',
      'Plan routes and containment',
      'Install new wiring, accessories and CU',
      'Testing, certification and handover'
    ],
    benefits: [
      'Improved safety and reliability',
      'Future-proof for modern loads',
      'Opportunity to optimise socket/lighting layout',
      'Clean, professional finish'
    ],
    pricing: {
      startingFrom: '£2,500',
      includes: 'Typical 2-3 bed partial/full rewire (indicative)',
      note: 'Site survey required for an accurate quote'
    },
    faqs: [
      'Do I need to move out during rewiring?',
      'How long does a full rewire take?',
      'Can you rewire in stages?',
      'Will you make good after chasing?'
    ]
  },
  'fault-finding': {
    title: 'Electrical Fault Finding',
    description: 'Expert diagnosis and repair of electrical faults in your home or business.',
    features: [
      'Diagnostic testing',
      'Circuit fault location',
      'Emergency callouts available',
      '24/7 emergency service',
      'No fix, no fee guarantee',
      'Detailed fault report'
    ],
    image: 'https://images.unsplash.com/photo-1581573744877-4bdebaa1a3a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Need emergency electrical help? Call us now',
    detailedDescription: `
We quickly diagnose tripping circuits, dead sockets, lighting failures and other faults using professional test equipment, then carry out safe repairs or provide a clear plan and quote.
`,
    process: [
      'Initial safety checks and isolation',
      'Diagnostic testing to locate fault',
      'Repair or make safe as appropriate',
      'Final testing and advice to prevent recurrence'
    ],
    benefits: [
      'Rapid resolution of electrical problems',
      'Safety-first approach',
      'Transparent pricing with no fix, no fee',
      'Emergency support when you need it'
    ],
    pricing: {
      startingFrom: '£75',
      includes: 'Call-out and first hour diagnosis',
      note: 'Parts and additional labour quoted as required'
    },
    faqs: [
      'How fast can you attend emergencies?',
      'Do you charge if the fault isn’t found?',
      'Can most faults be fixed same day?',
      'What test equipment do you use?'
    ]
  },
  'electrical-repairs': {
    title: 'Electrical Repairs',
    description: 'Reliable electrical repair services for homes and businesses.',
    features: [
      'Fuse box repairs',
      'Faulty wiring repairs',
      'Lighting circuit issues',
      'Power problems',
      'All work guaranteed',
      'Emergency repairs available'
    ],
    image: 'https://images.unsplash.com/photo-1580019542156-3cfca8f5e5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cta: 'Book your electrical repair today',
    detailedDescription: `
From faulty lights and sockets to damaged wiring and consumer unit issues, our electricians repair faults safely and efficiently with quality parts and workmanship.
`,
    process: [
      'Assess the fault and isolate if needed',
      'Provide transparent repair options',
      'Complete repair using quality components',
      'Test, certify and clean up'
    ],
    benefits: [
      'Restore power and safety quickly',
      'Cost-effective versus replacement',
      'Workmanship guarantee',
      'Professional diagnostics and parts'
    ],
    pricing: {
      startingFrom: '£65',
      includes: 'Call-out and first hour repair work',
      note: 'Parts charged separately as required'
    },
    faqs: [
      'Do you offer same-day repairs?',
      'Are your repairs guaranteed?',
      'Can you source hard-to-find parts?',
      'Do you provide safety certificates?'
    ]
  }
};

const ServiceTemplate = ({ serviceId: propServiceId }) => {
  const { serviceId: routeServiceId } = useParams();
  const resolvedServiceId = propServiceId || routeServiceId;
  const service = serviceData[resolvedServiceId] || {
    title: 'Service Not Found',
    description: 'The requested service could not be found.',
    features: [],
    image: '',
    cta: 'Return to Services'
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          {service.image && (
            <img
              className="w-full h-full object-cover opacity-30"
              src={service.image}
              alt={service.title}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-blue text-gray-600 max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our {service.title} Service</h2>
              <p className="text-lg">
                Our certified electricians provide professional {service.title.toLowerCase()} services for both residential and commercial properties. 
                We pride ourselves on quality workmanship, attention to detail, and excellent customer service.
              </p>

              {service.detailedDescription && (
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Service Details</h3>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {service.detailedDescription}
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {service.process && service.process.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Work</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-10 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Benefits of Our Service</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.pricing && (
                <div className="mt-10 bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Pricing Information</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-2xl font-bold text-green-600">From {service.pricing.startingFrom}</p>
                      <p className="text-sm text-gray-600 mt-1">{service.pricing.includes}</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <a href="/get-a-quote" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                        Get Exact Quote
                      </a>
                    </div>
                  </div>
                  {service.pricing.note && (
                    <p className="text-xs text-gray-500 mt-3 italic">{service.pricing.note}</p>
                  )}
                </div>
              )}

              {service.faqs && service.faqs.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">{faq}</h4>
                        <p className="text-gray-600 text-sm">Contact us for detailed answers to this question.</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Get a Free Quote</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Contact us today to discuss your {service.title.toLowerCase()} requirements.
                </p>
                <div className="mt-6">
                  <a
                    href="tel:01234567890"
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <FaPhoneAlt className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@hendersonelectrical.co.uk"
                    className="mt-3 w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <FaEnvelope className="mr-2" />
                    Email Us
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Our Location</h4>
                      <p className="text-sm text-gray-500">123 Electric Ave, London, UK</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start">
                    <FaClock className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Working Hours</h4>
                      <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-500">Sat: 9:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">{service.cta}</span>
          </h2>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
