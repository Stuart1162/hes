import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaLightbulb, FaPlug, FaBolt, FaCarBattery, FaClipboardCheck, 
  FaHome, FaBuilding, FaKey, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaCheck, FaTools, FaShieldAlt, FaThumbsUp, FaUserTie, FaShower, FaSearch } from 'react-icons/fa';
import { Shield01Icon, Clock01Icon, PoundIcon, Search01Icon, Certificate01Icon, CheckmarkCircle01Icon, CapIcon, BubbleChatIcon } from 'hugeicons-react';
import '../styles/homepage.css';

// Simple FAQ item with disclosure
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`home-faq__item ${open ? 'home-faq__item--active' : ''}`}>
      <button 
        className="home-faq__button" 
        onClick={() => setOpen(!open)} 
        aria-expanded={open}
      >
        <span className="home-faq__button-text">{q}</span>
        <span className="home-faq__button-icon" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="home-faq__content">
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

  // Draggable stickers state and helpers
  const heroRef = useRef(null);
  const stickerARef = useRef(null);
  const stickerBRef = useRef(null);
  const stickerCRef = useRef(null);
  const stickerDRef = useRef(null);
  const stickerERef = useRef(null);

  const [stickerPositions, setStickerPositions] = useState({
    a: { x: 10, y: 59 },
    b: { x: 25, y: 17 },
    c: { x: 65, y: 10 },
    d: { x: 50, y: 66 },
    e: { x: 76, y: 55 },
  });

  const [dragging, setDragging] = useState(null); // 'a'|'b'|'c'|'d'|'e'|null
  const dragStartRef = useRef({ x: 0, y: 0 }); // pointer start in %
  const dragInitialPosRef = useRef({ x: 0, y: 0 });

  const getPoint = (e) => {
    if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const toPercent = (client, rect) => ({
    x: ((client.x - rect.left) / rect.width) * 100,
    y: ((client.y - rect.top) / rect.height) * 100,
  });

  const clamp01 = (v) => Math.max(0, Math.min(100, v));

  const startDrag = (e, id) => {
    if (!heroRef.current) return;
    e.preventDefault();
    const rect = heroRef.current.getBoundingClientRect();
    const client = getPoint(e);
    const pct = toPercent(client, rect);
    dragStartRef.current = pct;
    dragInitialPosRef.current = { ...stickerPositions[id] };
    setDragging(id);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      if (!heroRef.current) return;
      e.preventDefault();
      const rect = heroRef.current.getBoundingClientRect();
      const client = getPoint(e);
      const pct = toPercent(client, rect);
      const dx = pct.x - dragStartRef.current.x;
      const dy = pct.y - dragStartRef.current.y;
      setStickerPositions((prev) => {
        const init = dragInitialPosRef.current;
        const next = { ...prev };
        next[dragging] = {
          x: clamp01(init.x + dx),
          y: clamp01(init.y + dy),
        };
        return next;
      });
    };
    const onEnd = () => setDragging(null);
    window.addEventListener('mousemove', onMove, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onEnd, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [dragging, stickerPositions]);

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
  const serviceTabs = ['All', 'Domestic', 'Commercial', 'Landlords'];

  // Multi-category membership based on provided tab lists
  const getServiceCategories = (title) => {
    const t = title.toLowerCase();
    const cats = new Set();
    // Landlords: EICR Testing, Rewiring, Fuseboards, Smoke Alarms
    if (/(eicr\s*testing|eicr\s*tests?)/.test(t)) cats.add('Landlords');
    if (/(rewiring?)/.test(t)) cats.add('Landlords');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Landlords');
    if (/(smoke\s*alarms?)/.test(t)) cats.add('Landlords');

    // Commercial: EICR Tests, PAT Tests, Rewiring, Fault Finding, Fuseboards
    if (/(eicr\s*testing|eicr\s*tests?)/.test(t)) cats.add('Commercial');
    if (/(pat\s*testing|pat\s*tests?)/.test(t)) cats.add('Commercial');
    if (/(rewiring?)/.test(t)) cats.add('Commercial');
    if (/(fault\s*finding)/.test(t)) cats.add('Commercial');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Commercial');

    // Domestic: Lighting, Fuseboards, Smoke Alarms, Sockets, Showers, Rewiring, Fault Finding, Electrical Repairs
    if (/(lighting)/.test(t)) cats.add('Domestic');
    if (/(fuseboard|fuse board|consumer\s*unit|fuseboards)/.test(t)) cats.add('Domestic');
    if (/(smoke\s*alarms?)/.test(t)) cats.add('Domestic');
    if (/(sockets?)/.test(t)) cats.add('Domestic');
    if (/(shower|showers)/.test(t)) cats.add('Domestic');
    if (/(rewiring?)/.test(t)) cats.add('Domestic');
    if (/(fault\s*finding)/.test(t)) cats.add('Domestic');
    if (/(electrical\s*repairs?)/.test(t)) cats.add('Domestic');

    // Default to Domestic if nothing matched
    if (cats.size === 0) cats.add('Domestic');
    return Array.from(cats);
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
      quote: "We would highly recommend this family run business. Their communication is excellent with Angela updating us on progress- times for inspection visits and agreeing a date for work to start.",
      author: "Marie",
      rating: 5
    },
    {
      quote: "Henderson's went above and beyond. We are extremely pleased with the results and we highly recommend Henderson Electrical Services to anyone looking for a reliable electrician. We would definitely use them again in the future!",
      author: "Millar",
      rating: 5
    },
    {
      quote: "Would highly recommend Henderson Electrical Services having used them recently to review and update the electrics in the flat. Professional, friendly, thorough, and prompt to reply; we were very impressed with the work undertaken and would definitely use them again.",
      author: "Bryan",
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
    <main className="bg-gray-50 home-page">
          {/* Hero Section */}
          <section className="home-hero" ref={heroRef}>
            <div className="home-hero__content">
              <div className="home-hero__title-wrap">
                <h1 className="home-hero__title">
                  Sparkies you can rely on
                </h1>
              </div>
            </div>
            {/* Draggable stickers (positioned relative to hero) */}
            <img
              ref={stickerARef}
              src="/assets/img/sticker1.png"
              alt=""
              draggable={false}
              className={`home-hero__sticker home-hero__sticker--a ${dragging === 'a' ? 'is-dragging' : ''}`}
              style={{ left: `${stickerPositions.a.x}%`, top: `${stickerPositions.a.y}%` }}
              onMouseDown={(e) => startDrag(e, 'a')}
              onTouchStart={(e) => startDrag(e, 'a')}
            />
            <img
              ref={stickerBRef}
              src="/assets/img/sticker2.png"
              alt=""
              draggable={false}
              className={`home-hero__sticker home-hero__sticker--b ${dragging === 'b' ? 'is-dragging' : ''}`}
              style={{ left: `${stickerPositions.b.x}%`, top: `${stickerPositions.b.y}%` }}
              onMouseDown={(e) => startDrag(e, 'b')}
              onTouchStart={(e) => startDrag(e, 'b')}
            />
            <img
              ref={stickerCRef}
              src="/assets/img/sticker3.png"
              alt=""
              draggable={false}
              className={`home-hero__sticker home-hero__sticker--c ${dragging === 'c' ? 'is-dragging' : ''}`}
              style={{ left: `${stickerPositions.c.x}%`, top: `${stickerPositions.c.y}%` }}
              onMouseDown={(e) => startDrag(e, 'c')}
              onTouchStart={(e) => startDrag(e, 'c')}
            />
            <img
              ref={stickerDRef}
              src="/assets/img/sticker4.png"
              alt=""
              draggable={false}
              className={`home-hero__sticker home-hero__sticker--d ${dragging === 'd' ? 'is-dragging' : ''}`}
              style={{ left: `${stickerPositions.d.x}%`, top: `${stickerPositions.d.y}%` }}
              onMouseDown={(e) => startDrag(e, 'd')}
              onTouchStart={(e) => startDrag(e, 'd')}
            />
            <img
              ref={stickerERef}
              src="/assets/img/sticker5.png"
              alt=""
              draggable={false}
              className={`home-hero__sticker home-hero__sticker--e ${dragging === 'e' ? 'is-dragging' : ''}`}
              style={{ left: `${stickerPositions.e.x}%`, top: `${stickerPositions.e.y}%` }}
              onMouseDown={(e) => startDrag(e, 'e')}
              onTouchStart={(e) => startDrag(e, 'e')}
            />
            <div className="home-hero__footer">
              <p className="home-hero__subtitle">
                Reliable, professional and friendly electricians helping people and businesses across Glasgow
              </p>
              <div className="home-hero__buttons">
                {/* <a
                  href="tel:+441234567890"
                  className="home-hero__button home-hero__button--primary"
                >
                  Emergencies
                </a> */}
                <a
                  href="/get-a-quote"
                  className="home-hero__button btn-primary"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </section>
      {/* Features - Modern Design */}
      <div className="bg-white py-16 home-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 home-features__intro">
            <span className="supertext">Qualified and experienced electricians</span>
            <h2 class="section-title">
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

      {/* Reviews Strip */}
      <section className="home-reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="home-reviews__row">
            <div className="home-reviews__brand">
              <img src="/assets/img/google.png" alt="Google" className="home-reviews__logo" />
              <div className="home-reviews__rating">
                <span className="home-reviews__stars">★★★★★</span>
                <span className="home-reviews__text">4.8/5 on Google Reviews</span>
              </div>
            </div>
            <div className="home-reviews__carousel" aria-label="Customer reviews">
              <div className="home-reviews__track">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="home-reviews__quote">“{t.quote}”</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          
          {/* Services Grid */}
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
          
          {/* CTA Banner */}
          <div className="callback-banner bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need an Electrician Today?</h3>
              <p className="mb-6 text-blue-100">24/7 emergency service available for urgent electrical issues</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="tel:+441234567890" 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Call Now: 0141 642 0611
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent btn-white-outline border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
                >
                  Request a Callback
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Electrical Services (Content) */}
      <section className="py-16 bg-white about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Copy */}
            <div className="lg:col-span-7">
              <span className="supertext">Glasgow-based Electricians</span>
              <h2 className="section-title">Friendly and Reliable Electrical Services in Glasgow</h2>
             
             
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

            {/* Aside card */}
            {/* <div className="lg:col-span-4">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* Our work (moved up) */}
      <section className="home-customer-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 home-customer-grid">
            {customerContent.map((customer, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 home-customer-card ${activeCustomer === index ? 'ring-2' : ''}`}
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
                    <div className="bg-blue-100 p-3 icon-container mr-4">
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
                    to="/get-a-quote" 
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
      <section className="py-16 bg-gray-50 home-compliance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title centered">
              Compliance and Safety
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 home-compliance__grid">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 home-compliance__card">
              <div className="text-4xl mb-4"><Shield01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meets BS 7671 (18th Edition)</h3>
              <p className="text-gray-600">All work carried out to the highest industry standards with full certification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 home-compliance__card">
              <div className="text-4xl mb-4"><Search01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Landlord EICR Legal Requirements</h3>
              <p className="text-gray-600">We provide Electrical Installation Condition Reports (EICR) for homes, businesses and rental properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 home-compliance__card">
              <div className="text-4xl mb-4"><Certificate01Icon className="w-8 h-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Certificate and Clear Observations</h3>
              <p className="text-gray-600">Clear and concise reporting with actionable findings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="supertext">Have Questions?</span>
            <h2 className="home-faq__title">Frequently Asked Questions</h2>
          
          </div>
          
          <div className="max-w-4xl mx-auto home-faq__list">
            <div className="bg-white rounded-xl shadow-md overflow-hidden home-faq__box">
              <FaqItem 
                q="How quickly can you respond to an emergency call?"
                a="We offer 24/7 emergency call-out service with a typical response time of 2-4 hours for urgent cases. Our emergency electricians are available around the clock to handle any electrical emergencies."
              />
              <FaqItem 
                q="Are your electricians qualified and certified?"
                a="Yes, all our electricians are fully qualified and NICEIC registered, and regularly trained on the latest regulations and safety standards. We only employ experienced professionals who are experts in their field."
              />
              <FaqItem 
                q="Do you provide free quotes and estimates?"
                a="Absolutely! We offer free, no-obligation quotes for all electrical work. Our team will visit your property, assess your requirements, and provide a detailed, transparent quote with no hidden costs."
              />
              <FaqItem 
                q="What areas do you cover?"
                a="We cover the entirity of Glasgow and its surrounding areas. Contact us with your postcode and we'll be happy to confirm if we cover your location. We're also happy to consider jobs further afield for larger projects."
              />
              <FaqItem 
                q="How do I know if my property needs rewiring?"
                a="Common signs that your property may need rewiring include: old fuse boxes with wooden backs, fabric or rubber wiring, frequently tripping circuits, flickering lights, and sockets that don't work. If your wiring is over 25 years old, it's a good idea to have it inspected."
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Business Hours */}
      <section className="py-12 bg-gray-100 home-hours">
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
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}

      {/* Qualifications */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

     
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
