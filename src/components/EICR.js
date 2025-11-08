import React from 'react';
import { FaClipboardCheck, FaSearch, FaFilePdf, FaHome, FaBuilding, FaTools, FaShieldAlt, FaCheck } from 'react-icons/fa';
import '../styles/homepage.css';

const EICR = () => {
  const inspectionScope = [
    'We carry out a full visual inspection of accessories and enclosures',
    'Carry out continuity, polarity, RCD and insulation resistance tests',
    'We assess against latest BS 7671 (18th Edition)',
    'We make clear observations with coding (C1, C2, C3, FI)',
    'We check earth bonding and earthing conduction',
    'Consumer unit inspection and testing'
  ];

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

  const benefits = [
    {
      icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
      title: 'Comprehensive Report',
      description: 'Digital PDF with clear observations and photos'
    },
    {
      icon: <FaSearch className="text-3xl text-blue-600" />,
      title: 'Thorough Inspection',
      description: 'Detailed testing of all circuits and accessories'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: 'Fully Compliant',
      description: 'Meets all legal requirements for landlords'
    },
    {
      icon: <FaTools className="text-3xl text-blue-600" />,
      title: 'Remedial Works',
      description: 'Transparent pricing for any required fixes'
    }
  ];

  return (
    <main className="bg-gray-50 eicr-page">
      {/* Hero Section */}
      <section
        className="eicr-hero relative py-20 lg:py-28"
        style={{
          backgroundImage: "url(/assets/img/eicr.webp)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="eicr-hero__overlay absolute inset-0 opacity-50"></div>
        <div className="eicr-hero__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eicr-hero__inner max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EICR Testing & Certification</h1>
            <p className="text-xl md:text-2xl mb-8">
              Make sure your property's electrics are safe, sound and up to standard with an EICR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="btn-primary bg-white font-semibold py-3 px-8 rounded-md text-center duration-200"
              >
                Book an EICR
              </a>
           
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Strip */}
      <section className="home-reviews eicr-reviews">
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

      {/* EICR Information Section */}
      <section className="py-16 bg-white eicr-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eicr-info__grid grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content: 7 columns */}
            <div className="eicr-info__main lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🧰 What Is an EICR?</h2>
              <p className="text-gray-700 text-lg mb-4">
                An Electrical Installation Condition Report (EICR) is a check that your property's wiring and electrics are safe for everyone who lives there. It includes a detailed inspection of your property’s electrical system. It checks the condition of your wiring, sockets, lighting, and consumer unit (fuse board) to ensure everything meets current safety standards.
              </p>

              <h4>🏠 EICR Testing in Glasgow</h4>
              <p className="text-gray-700 text-lg mb-4">
If you’re a landlord, homeowner, or business owner in Glasgow, an up-to-date EICR is essential. Landlords are legally required to have an electrical safety certificate at least every five years, and homeowners are advised to book an EICR every ten years (or when buying or selling a property). At [Your Company Name], we make EICR testing simple and stress-free — offering competitive prices, fast turnaround times, and reports you can actually understand. Whether you’re in the West End, Southside, or city centre, our local Glasgow electricians are here to help you stay safe and compliant.
              </p>
            
            
            </div>

            {/* Sidebar: 5 columns */}
            <div className="eicr-info__sidebar lg:col-span-5 space-y-6">
              <div className="eicr-info__card bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">🏠 For Homeowners</h3>
                <p className="text-gray-700 text-lg">
                  Even in a well-maintained home, wear and tear on your electrical system can happen over time. We recommend an EICR every 10 years, or when you’re buying or selling a property. It’s an easy way to ensure your home is safe for your family.
                </p>
              </div>
              <div className="eicr-info__card bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">🏡 For Landlords</h3>
                <p className="text-gray-700 text-lg">
                  As a landlord, you’re legally required to have an up-to-date EICR at least every 5 years (or when tenants change). We’ll handle everything — from inspection to paperwork — and provide digital copies of your report for easy record keeping. Fast, friendly, and fully compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white eicr-included">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="">
              <span className="supertext">What's included</span>
              <h2 className="section-title">EICR Testing Process</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="mb-6">With years of experience providing electrical services across Glasgow and the surrounding areas, customers appreciate our reliability, professionalism, and quality workmanship. Our team of fully qualified electricians are experts in carrying out EICR tests, electrical repairs, and safety inspections for both homes and businesses.</p>

                <span className="check">
                  <FaCheck className="tick text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>A full safety inspection, including all accessible mains-connected wiring and fixtures in the fuse box.</p>
                </span>

                <span className="check">
                  <FaCheck className="tick text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p>A condition report, which outlines details of the inspection and any work which needs to be carried out.</p>
                </span>

               
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Electrician performing EICR testing"
                  className="w-full h-auto"
                />
              </div>
            </div>

            
          </div>
        </div>
      </section>

      

      {/* EICR Step by Step */}
      <section className="py-16 bg-gray-50 eicr-steps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="text-center mb-10">
              <span className="supertext">How it works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">EICR Step by Step</h2>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[
                'Book your EICR and arrange a convenient time',
                'Initial visual inspection of accessories and equipment',
                'Electrical testing: continuity, polarity, RCD, insulation resistance',
                'Identify observations with clear coding (C1, C2, C3, FI)',
                'Receive your digital report with findings and recommendations',
                'Optional remedial works quoted and completed promptly',
              ].map((step, i) => (
                <div
                  key={i}
                  className="eicr-step group relative bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="eicr-step__badge flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow-sm">
                      {i + 1}
                    </div>
                    <p className="eicr-step__text text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EICR for Landlords & Homeowners */}
      <section className="py-16 bg-white eicr-audience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="eicr-audience__card aud-landlord bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3"><span>🔑</span>EICR for Landlords</h3>
              <p className="text-gray-700 text-lg mb-3">Required at least every 5 years, or on change of tenancy.</p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Meets legal obligations and insurance requirements</li>
                <li>Digital reports for easy record keeping</li>
                <li>Rapid scheduling and clear remedial quotes</li>
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                >
                  Book a Landlord EICR
                </a>
              </div>
            </div>
            <div className="eicr-audience__card aud-homeowner bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3"><span>🏡</span>EICR for Homeowners</h3>
              <p className="text-gray-700 text-lg mb-3">Recommended every 10 years, or when buying/selling a property.</p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Peace of mind your installation is safe</li>
                <li>Identify ageing wiring and hidden faults</li>
                <li>Helpful advice and options for improvements</li>
              </ul>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                >
                  Book a Homeowner EICR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white eicr-faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How long does an EICR take?', a: 'Typically 2–4 hours for a standard home, depending on size and access.' },
                { q: 'How often do I need an EICR?', a: 'Landlords: every 5 years or on change of tenancy. Homeowners: every 10 years or when buying/selling.' },
                { q: 'What happens if my report is unsatisfactory?', a: 'We will explain all observations, provide a clear quote for remedial works, and retest once completed.' },
                { q: 'Do I get a certificate?', a: 'Yes. You receive a digital report (PDF) with results and any observations, suitable for compliance and records.' },
              ].map((item, i) => (
                <div key={i} className="eicr-faqs__item bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.q}</h4>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white eicr-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an EICR Certificate?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today to schedule your Electrical Installation Condition Report and ensure your property meets all safety regulations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+441234567890" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                Call Now: 01234 567 890
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EICR;
