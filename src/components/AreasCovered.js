import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AreasCovered = () => {
  const areas = [
    { name: 'City Centre', postcode: 'G1-G5' },
    { name: 'West End', postcode: 'G11-G15' },
    { name: 'Southside', postcode: 'G41-G44, G51' },
    { name: 'East End', postcode: 'G31-G34, G40' },
    { name: 'North Glasgow', postcode: 'G20-G24, G4' },
    { name: 'South West', postcode: 'G52-G53' },
    { name: 'East Renfrewshire', postcode: 'G46, G76-G78' },
    { name: 'Bearsden', postcode: 'G61-G62' },
    { name: 'Milngavie', postcode: 'G62' },
    { name: 'Clydebank', postcode: 'G81' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>Areas We Cover | Electrician Services in Glasgow & Surrounding Areas</title>
        <meta name="description" content="We provide professional electrician services across Glasgow and surrounding areas including West End, Southside, East End, and more. Local electricians available 24/7." />
      </Helmet>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Areas We Cover in Glasgow
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-5">
          We provide professional electrical services across Glasgow and surrounding areas. 
          Our local electricians are just a call away.
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
        <div className="px-4 py-5 sm:px-6 bg-blue-700">
          <h2 className="text-lg leading-6 font-medium text-white">
            Our Coverage Area
          </h2>
          <p className="mt-1 text-sm text-blue-100">
            We serve all these areas with our emergency electrician services
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">{area.name}</h3>
                <p className="text-gray-500">Postcodes: {area.postcode}</p>
                <div className="mt-2">
                  <Link 
                    to={`/contact?area=${encodeURIComponent(area.name)}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Book {area.name} Electrician →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If We Cover Your Area?</h2>
        <p className="text-gray-700 mb-4">
          We're constantly expanding our service areas across Glasgow and the surrounding regions. 
          Even if your area isn't listed, give us a call and we'll do our best to accommodate you.
        </p>
        <div className="mt-6">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us Now
          </Link>
        </div>
      </div>

      <div className="prose prose-blue prose-lg max-w-none">
        <h2>Professional Electrician Services Across Glasgow</h2>
        <p>
          As a leading electrical services provider in Glasgow, we're proud to offer our expertise 
          to both residential and commercial clients throughout the city and its surrounding areas. 
          Our team of qualified electricians is equipped to handle all types of electrical work, 
          from emergency call-outs to planned installations and maintenance.
        </p>
        
        <h3>Why Choose Our Local Electricians?</h3>
        <ul>
          <li>Fully qualified and certified electricians</li>
          <li>Emergency call-outs available</li>
          <li>Competitive pricing with no hidden fees</li>
          <li>Same-day service available</li>
          <li>All work guaranteed</li>
          <li>Free, no-obligation quotes</li>
        </ul>

        <h3>Our Services in Glasgow</h3>
        <p>
          We provide a comprehensive range of electrical services to meet all your needs, including:
        </p>
        <ul>
          <li>Domestic and commercial electrical installations</li>
          <li>Electrical testing and inspections (EICR)</li>
          <li>Fuse board upgrades</li>
          <li>Lighting installations and repairs</li>
          <li>Emergency electrical repairs</li>
          <li>Smart home installations</li>
          <li>And much more...</li>
        </ul>

        <h3>Covering All Glasgow Postcodes</h3>
        <p>
          Our electricians cover all Glasgow postcodes and many surrounding areas. Whether you're in 
          the city center (G1-G5), the West End (G11-G15), Southside (G41-G44, G51), or any other 
          part of Glasgow, we can help with all your electrical needs.
        </p>
      </div>
    </div>
  );
};

export default AreasCovered;
