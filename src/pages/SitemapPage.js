import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { glasgowAreas, services } from '../config/seoKeywords';

const SitemapPage = () => {
  const mainPages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About Us' },
    { path: '/services', title: 'Our Services' },
    { path: '/areas-covered', title: 'Areas We Cover' },
    { path: '/contact', title: 'Contact Us' },
    { path: '/quote', title: 'Get a Free Quote' },
    { path: '/emergency', title: '24/7 Emergency Electrician' },
    { path: '/commercial', title: 'Commercial Electrical Services' },
    { path: '/domestic', title: 'Domestic Electrical Services' },
    { path: '/landlords', title: 'Landlord Services' },
    { path: '/eicr', title: 'EICR Testing' },
    { path: '/pat-testing', title: 'PAT Testing' },
    { path: '/faqs', title: 'FAQs' },
    { path: '/testimonials', title: 'Customer Testimonials' },
    { path: '/blog', title: 'Our Blog' },
  ];

  // Group services by category
  const serviceCategories = {
    'Electrical Services': services.filter(s => 
      !['PAT testing', 'EICR', 'data cabling', 'TV aerial', 'home automation', 'smart home'].includes(s)
    ),
    'Testing & Certification': ['PAT Testing', 'EICR', 'Electrical Testing'],
    'Installation Services': ['Data Cabling', 'TV Aerial', 'Home Automation', 'Smart Home Installation']
  };

  // Group areas by region
  const areaGroups = {
    'Central Glasgow': glasgowAreas.filter(area => 
      area.includes('G1') || area.includes('G2') || area.includes('G3') || 
      area.includes('G4') || area.includes('G5') || area.includes('City Centre')
    ),
    'West End': glasgowAreas.filter(area => 
      area.includes('G11') || area.includes('G12') || area.includes('G13') || 
      area.includes('G14') || area.includes('G15') || area.includes('West End')
    ),
    'Southside': glasgowAreas.filter(area => 
      (area.includes('G41') || area.includes('G42') || area.includes('G43') || 
      area.includes('G44') || area.includes('G51') || area.includes('G52') || 
      area.includes('G53') || area.includes('G58')) && !area.includes('Glasgow G5')
    ),
    'East End': glasgowAreas.filter(area => 
      area.includes('G31') || area.includes('G32') || area.includes('G33') || 
      area.includes('G34') || area.includes('G40') || area.includes('East End')
    ),
    'North Glasgow': glasgowAreas.filter(area => 
      (area.includes('G20') || area.includes('G21') || area.includes('G22') || 
      area.includes('G23') || area.includes('North')) && !area.includes('G2')
    ),
    'Outer Areas': glasgowAreas.filter(area => 
      area.includes('G60') || area.includes('G61') || area.includes('G62') || 
      area.includes('G64') || area.includes('G65') || area.includes('G66') || 
      area.includes('G67') || area.includes('G68') || area.includes('G69') || 
      area.includes('G71') || area.includes('G72') || area.includes('G73') || 
      area.includes('G74') || area.includes('G75') || area.includes('G76') || 
      area.includes('G77') || area.includes('G78') || area.includes('G79') || 
      area.includes('G81') || area.includes('G82') || area.includes('G83') || 
      area.includes('G84')
    )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>Sitemap | Your Electrician Glasgow</title>
        <meta name="description" content="Complete sitemap for Your Electrician Glasgow. Find all our services, areas covered, and important pages in one place." />
        <link rel="canonical" href="https://yourelectrician-glasgow.co.uk/sitemap" />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Sitemap
        </h1>
        <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500">
          Find everything you need on our website with our comprehensive sitemap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Pages */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Pages</h2>
          <ul className="space-y-2">
            {mainPages.map((page, index) => (
              <li key={index}>
                <Link 
                  to={page.path} 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
          {Object.entries(serviceCategories).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
              <ul className="space-y-1 ml-4">
                {items.map((service, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Areas Covered */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
          {Object.entries(areaGroups).map(([region, areas]) => (
            <div key={region} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{region}</h3>
              <div className="grid grid-cols-2 gap-1 ml-4">
                {areas.map((area, idx) => (
                  <Link 
                    key={idx}
                    to={`/areas-covered#${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for something specific?</h2>
        <p className="mb-4">
          If you can't find what you're looking for, try our search function or 
          <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium ml-1">
            contact us
          </Link> 
          directly for assistance.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default SitemapPage;
