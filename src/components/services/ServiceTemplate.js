import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Shield01Icon, Clock01Icon, PoundIcon, Certificate01Icon } from 'hugeicons-react';
import '../../styles/services.css';
import '../../styles/customertype.css';
import '../../styles/homepage.css';

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
      'Eemergency service',
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

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="services-page">
      {/* Hero Section (Domestic-style with stickers) */}
      <section className="ct-hero service-single-hero service-hero relative py-20 lg:py-28">
        <div className="ct-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="home-hero__title-wrap">
              <h1 className="ct-hero-title mb-4">{service.title}</h1>
            
            </div>
            <p className="text-xl md:text-2xl mt-2 text-gray-600 service-hero__desc">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="service-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-layout service-layout">
          {/* Main Content */}
          <div className="service-content service-hero service-about">
            <div className="prose prose-blue services-copy service-copy max-w-none">
              <h2 className="section-title service-about__title">About Our {service.title} Service</h2>
              <p className="text-lg">
                Our certified electricians provide professional {service.title.toLowerCase()} services for both residential and commercial properties. 
                We pride ourselves on quality workmanship, attention to detail, and excellent customer service.
              </p>

              {service.detailedDescription && (
                <div className="mt-8 bg-blue-50 p-6 rounded-lg service-details">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Service Details</h3>
                  <div className="text-gray-700 leading-relaxed">
                    {service.detailedDescription}
                  </div>
                </div>
              )}
              
            </div>
          </div>
          {/* Sidebar */}
          <aside className="services-sidebar service-sidebar">
            <div className="services-sidebar__card service-sidebar__card">
              <div className="services-sidebar__body service-sidebar__body">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                        <FaMapMarkerAlt className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-900 service-sidebar__info-title">Our Location</h4>
                      <p className="text-gray-600">68 MacArthur Wynd</p>
                      <p className="text-gray-600">Glasgow, G72 7GA</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                        <FaPhoneAlt className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-900 service-sidebar__info-title">Phone</h4>
                      <p className="text-gray-600">0141 642 0611</p>
                      <p className="text-gray-500 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="mt-1">
                        <a href="tel:+441416420611" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Call us now →</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                        <FaEnvelope className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-900 service-sidebar__info-title">Email</h4>
                      <p className="text-gray-600">hes.glasgow@gmail.com</p>
                      <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                      <p className="mt-1">
                        <a href="mailto:hes.glasgow@gmail.com" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Send us an email →</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                        <FaClock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-md font-medium text-gray-900 service-sidebar__info-title">Opening Hours</h4>
                      <dl className="text-gray-600 text-sm">
                        <div className="flex justify-between"><dt>Mon - Fri</dt><dd>8:00 AM - 6:00 PM</dd></div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </aside>
        </div>
      </div>

      {/* Additional Sections (full width outside the grid) */}
      <div className="services-additional-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue services-copy service-copy max-w-none">
            {/* Duplicated home-features section */}
            <div className="bg-white py-16 home-features">
              <div className="">
                <div className="max-w-3xl mb-16 home-features__intro">
                  <span className="supertext">Qualified and experienced electricians</span>
                  <h2 className="section-title">
                    Professional, qualified Electricians in Glasgow
                  </h2>
                </div>
                <div className="relative home-features__wrap">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 home-features__grid">
                    <div className="flex flex-col home-feature">
                        <div className="icon flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <Shield01Icon className="w-5 h-5" />
                        </div>
                        <h4>NICEIC Certified</h4>
                      <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">We're fully qualified and certified to the highest industry standards.</p>
                      </dd>
                    </div>

                    <div className="flex flex-col home-feature">
                        <div className="icon flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <Clock01Icon className="w-5 h-5" />
                        </div>
                        <h4>Same Day Service</h4>
                      <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">Emergency call-outs available when you need us most.</p>
                      </dd>
                    </div>

                    <div className="flex flex-col home-feature">
                        <div className="icon flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <PoundIcon className="w-5 h-5" />
                        </div>
                        <h4>Transparent Pricing</h4>
                      <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">No hidden fees or surprise charges. We provide clear, upfront pricing for all services.</p>
                      </dd>
                    </div>
                    <div className="flex flex-col home-feature">
                        <div className="icon flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <Certificate01Icon className="w-5 h-5" />
                        </div>
                        <h4>Years of Experience</h4>
                      <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">Decades of hands-on experience delivering reliable electrical work across Glasgow.</p>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {service.faqs && service.faqs.length > 0 && (
              <div className="mt-10 service-faqs">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="space-y-4 service-faqs__list">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg service-faqs__item border border-gray-200">
                      <button
                        type="button"
                        className="w-full text-left p-4 flex items-center justify-between"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        aria-expanded={openFaq === index}
                        aria-controls={`faq-panel-${index}`}
                      >
                        <h4 className="font-medium text-gray-900 service-faqs__question">{faq}</h4>
                        <span className={`ml-4 transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {openFaq === index && (
                        <div id={`faq-panel-${index}`} className="px-4 pb-4 text-gray-600 text-sm service-faqs__answer">
                          Contact us for detailed answers to this question.
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta service-cta">
        <div className="services-cta__inner service-cta__inner">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">{service.cta}</span>
          </h2>
          <div className="services-cta__actions service-cta__actions">
            <a
              href="/contact"
              className="btn btn--light mt-8 service-cta__btn"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
