import React from 'react';
import { FaTools, FaShieldAlt, FaHome, FaBuilding, FaUserTie, FaCheckCircle } from 'react-icons/fa';
import { Shield01Icon, Clock01Icon, PoundIcon, Certificate01Icon, CheckmarkCircle01Icon } from 'hugeicons-react';
import '../styles/about.css';
import '../styles/homepage.css';

const About = () => {
  const stats = [
    {
      icon: Shield01Icon,
      title: 'NICEIC Certified',
      description: "We're fully qualified and certified to the highest industry standards.",
    },
    {
      icon: Clock01Icon,
      title: 'Same Day Service',
      description: 'Emergency call-outs available when you need us most.',
    },
    {
      icon: PoundIcon,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. We provide clear, upfront pricing for all services.',
    },
    {
      icon: Certificate01Icon,
      title: 'Years of Experience',
      description: 'Decades of hands-on experience delivering reliable electrical work across Glasgow.',
    },
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

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Master Electrician',
      bio: 'With over 15 years of experience in the electrical industry, Alex leads our team with expertise and precision.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Sarah Williams',
      role: 'Electrical Engineer',
      bio: 'Sarah specializes in smart home installations and energy-efficient solutions for modern homes.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Commercial Specialist',
      bio: 'Michael handles our commercial projects, ensuring businesses stay powered and compliant.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/glasgow3.png)` }}
      >
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <h1 className="about-hero__title">Family-run, Glasgow-based</h1>
          <p className="about-hero__subtitle">
            Delivering exceptional electrical services across Glasgow
          </p>
        </div>
      </section>

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

      <section className="py-16 bg-white about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-12">
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
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/get-a-quote" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium btn-blue">Get a free quote</a>
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-blue-600 text-blue-700 font-medium hover:bg-blue-50 transition-colors">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-white py-16 home-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h4>Friendly Team</h4>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We explain every job in simple terms and keep you informed every step of the way.</p>
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

     

      {/* Our Values */}
      <section className="about-values">
        <div className="about-values__header">
          <h2 className="about-values__title">1000s of Happy Customers</h2>
          <p className="about-values__subtitle">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="about-values__grid">
          <div className="about-value">
            <div className="about-value__icon">
              <FaTools />
            </div>
            <h3 className="about-value__title">Expert Craftsmanship</h3>
            <p className="about-value__description">
              We take pride in our work and never cut corners. Every job is completed to the highest standards of quality and safety.
            </p>
          </div>
          
          <div className="about-value">
            <div className="about-value__icon">
              <FaShieldAlt />
            </div>
            <h3 className="about-value__title">Safety First</h3>
            <p className="about-value__description">
              Your safety is our top priority. We follow all safety protocols and ensure every installation meets current regulations.
            </p>
          </div>
          
          <div className="about-value">
            <div className="about-value__icon">
              <FaUserTie />
            </div>
            <h3 className="about-value__title">Customer Focus</h3>
            <p className="about-value__description">
              We listen to your needs and provide personalized solutions that work best for your home or business.
            </p>
          </div>
        </div>
      </section>

      

     

      {/* Our Team */}
      {/* <section className="about-team">
        <div className="about-team__header">
          <h2 className="about-team__title">Meet Our Team</h2>
          <p className="about-team__subtitle">
            Experienced professionals dedicated to excellence
          </p>
        </div>
        
        <div className="about-team__grid">
          {team.map((member, index) => (
            <div key={index} className="about-team-member">
              <img 
                src={member.image} 
                alt={member.name} 
                className="about-team-member__image"
              />
              <div className="about-team-member__info">
                <h3 className="about-team-member__name">{member.name}</h3>
                <p className="about-team-member__role">{member.role}</p>
                <p className="about-team-member__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__content">
          <h2 className="about-cta__title">
            Need a hand with electrical work?
          </h2>
          <p className="about-cta__subtitle">
            Contact us today for reliable, professional electrical services you can trust.
          </p>
          <div className="about-cta__buttons">
            <a 
              href="/get-a-quote" 
              className="about-cta__button about-cta__button--primary"
            >
              Get a Free Quote
            </a>
            <a 
              href="tel:+441234567890" 
              className="about-cta__button btn-white-outline"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
