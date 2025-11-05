import React from 'react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { to: '/service/fuseboards', label: 'Consumer Unit (Fuseboard) Upgrades' },
  { to: '/eicr', label: 'EICR Testing' },
  { to: '/service/lighting', label: 'Lighting Installations' },
  { to: '/service/sockets', label: 'Sockets & Switches' },
  { to: '/service/pat-testing', label: 'PAT Testing' },
  { to: '/service/fault-finding', label: 'Fault Finding' },
  { to: '/service/electrical-repairs', label: 'Electrical Repairs' },
  { to: '/service/shower-installations', label: 'Electric Showers' },
  { to: '/service/rewiring', label: 'House Rewiring' },
  { to: '/service/emergency-lighting', label: 'Emergency Lighting' },
];

const areas = [
  {
    region: 'Glasgow City',
    places: [
      { name: 'City Centre', slug: 'glasgow-city-centre', postcodes: ['G1', 'G2'] },
      { name: 'West End', slug: 'glasgow-west-end', postcodes: ['G3', 'G11', 'G12'] },
      { name: 'Southside', slug: 'glasgow-southside', postcodes: ['G41', 'G42', 'G43'] },
      { name: 'East End', slug: 'glasgow-east-end', postcodes: ['G31', 'G32', 'G40'] },
      { name: 'North Glasgow', slug: 'north-glasgow', postcodes: ['G20', 'G21', 'G22'] },
    ],
  },
  {
    region: 'Greater Glasgow & Clyde',
    places: [
      { name: 'Paisley', slug: 'paisley', postcodes: ['PA1', 'PA2', 'PA3'] },
      { name: 'Renfrew', slug: 'renfrew', postcodes: ['PA4'] },
      { name: 'Clydebank', slug: 'clydebank', postcodes: ['G81'] },
      { name: 'Bishopbriggs', slug: 'bishopbriggs', postcodes: ['G64'] },
      { name: 'Bearsden', slug: 'bearsden', postcodes: ['G61'] },
      { name: 'Milngavie', slug: 'milngavie', postcodes: ['G62'] },
    ],
  },
  {
    region: 'Lanarkshire',
    places: [
      { name: 'Hamilton', slug: 'hamilton', postcodes: ['ML3'] },
      { name: 'East Kilbride', slug: 'east-kilbride', postcodes: ['G74', 'G75'] },
      { name: 'Motherwell', slug: 'motherwell', postcodes: ['ML1'] },
      { name: 'Bellshill', slug: 'bellshill', postcodes: ['ML4'] },
      { name: 'Coatbridge', slug: 'coatbridge', postcodes: ['ML5'] },
      { name: 'Airdrie', slug: 'airdrie', postcodes: ['ML6'] },
    ],
  },
  {
    region: 'Dunbartonshire & Inverclyde',
    places: [
      { name: 'Dumbarton', slug: 'dumbarton', postcodes: ['G82'] },
      { name: 'Alexandria', slug: 'alexandria', postcodes: ['G83'] },
      { name: 'Helensburgh', slug: 'helensburgh', postcodes: ['G84'] },
      { name: 'Greenock', slug: 'greenock', postcodes: ['PA15'] },
      { name: 'Port Glasgow', slug: 'port-glasgow', postcodes: ['PA14'] },
    ],
  },
];

const Locations = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Henderson Electrical Services',
    url: 'https://localhost:3000/locations',
    areaServed: areas.reduce((acc, a) => acc.concat(a.places), []),
    sameAs: [
      'https://facebook.com',
      'https://twitter.com',
      'https://instagram.com',
      'https://linkedin.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Glasgow',
      addressRegion: 'Scotland',
      addressCountry: 'UK',
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Electrician Near You – Areas We Serve</h1>
          <p className="text-blue-100 text-lg mt-4 max-w-3xl">
            We provide reliable, certified electrical services across Glasgow and surrounding areas. Find your location below and explore our most popular services.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.region} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900">{area.region}</h2>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {area.places.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/locations/${p.slug}`} className="text-blue-700 hover:underline">
                        Electrician in {p.name}
                      </Link>
                      {p.postcodes?.length ? (
                        <span className="ml-2 text-sm text-gray-500">({p.postcodes.join(', ')})</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Electrical Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {serviceLinks.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="block bg-gray-50 hover:bg-gray-100 rounded p-4 text-blue-700 font-medium">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need an electrician in your area?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Get a fast, no-obligation quote from our certified electricians today.
          </p>
          <div className="mt-6">
            <a href="/get-a-quote" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Locations;
