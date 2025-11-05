import React from 'react';
import { Link, useParams } from 'react-router-dom';

const locationData = {
  'glasgow-city-centre': {
    name: 'Glasgow City Centre',
    region: 'Glasgow City',
    postcodePrefixes: ['G1', 'G2'],
  },
  'glasgow-west-end': {
    name: 'Glasgow West End',
    region: 'Glasgow City',
    postcodePrefixes: ['G3', 'G11', 'G12'],
  },
  'glasgow-southside': {
    name: 'Glasgow Southside',
    region: 'Glasgow City',
    postcodePrefixes: ['G41', 'G42', 'G43'],
  },
  'glasgow-east-end': {
    name: 'Glasgow East End',
    region: 'Glasgow City',
    postcodePrefixes: ['G31', 'G32', 'G40'],
  },
  'north-glasgow': {
    name: 'North Glasgow',
    region: 'Glasgow City',
    postcodePrefixes: ['G20', 'G21', 'G22'],
  },
  'paisley': { name: 'Paisley', region: 'Renfrewshire', postcodePrefixes: ['PA1', 'PA2', 'PA3'] },
  'renfrew': { name: 'Renfrew', region: 'Renfrewshire', postcodePrefixes: ['PA4'] },
  'clydebank': { name: 'Clydebank', region: 'West Dunbartonshire', postcodePrefixes: ['G81'] },
  'bishopbriggs': { name: 'Bishopbriggs', region: 'East Dunbartonshire', postcodePrefixes: ['G64'] },
  'bearsden': { name: 'Bearsden', region: 'East Dunbartonshire', postcodePrefixes: ['G61'] },
  'milngavie': { name: 'Milngavie', region: 'East Dunbartonshire', postcodePrefixes: ['G62'] },
  'hamilton': { name: 'Hamilton', region: 'South Lanarkshire', postcodePrefixes: ['ML3'] },
  'east-kilbride': { name: 'East Kilbride', region: 'South Lanarkshire', postcodePrefixes: ['G74', 'G75'] },
  'motherwell': { name: 'Motherwell', region: 'North Lanarkshire', postcodePrefixes: ['ML1'] },
  'bellshill': { name: 'Bellshill', region: 'North Lanarkshire', postcodePrefixes: ['ML4'] },
  'coatbridge': { name: 'Coatbridge', region: 'North Lanarkshire', postcodePrefixes: ['ML5'] },
  'airdrie': { name: 'Airdrie', region: 'North Lanarkshire', postcodePrefixes: ['ML6'] },
  'dumbarton': { name: 'Dumbarton', region: 'West Dunbartonshire', postcodePrefixes: ['G82'] },
  'alexandria': { name: 'Alexandria', region: 'West Dunbartonshire', postcodePrefixes: ['G83'] },
  'helensburgh': { name: 'Helensburgh', region: 'Argyll and Bute', postcodePrefixes: ['G84'] },
  'greenock': { name: 'Greenock', region: 'Inverclyde', postcodePrefixes: ['PA15'] },
  'port-glasgow': { name: 'Port Glasgow', region: 'Inverclyde', postcodePrefixes: ['PA14'] },
};

const popularServices = [
  { to: '/service/fuseboards', label: 'Consumer Unit Upgrades' },
  { to: '/eicr', label: 'EICR Testing' },
  { to: '/service/lighting', label: 'Lighting Installation' },
  { to: '/service/sockets', label: 'Sockets & Switches' },
  { to: '/service/pat-testing', label: 'PAT Testing' },
  { to: '/service/fault-finding', label: 'Fault Finding' },
];

const LocationPage = () => {
  const { slug } = useParams();
  const loc = locationData[slug];

  if (!loc) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20">
        <section className="py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Location Not Found</h1>
          <p className="text-gray-600 mt-3">We couldn't find that location page. See all our <a href="/locations" className="text-blue-600 underline">service areas</a>.</p>
        </section>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Electrician in ${loc.name}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${loc.name}, ${loc.region}`,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Henderson Electrical Services',
      address: { '@type': 'PostalAddress', addressLocality: 'Glasgow', addressRegion: 'Scotland', addressCountry: 'UK' },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Electrician in {loc.name}</h1>
          <p className="text-blue-100 text-lg mt-4 max-w-3xl">
            Reliable, certified electricians serving {loc.name} and surrounding {loc.region} areas. Fast response, transparent pricing, and NICEIC-certified workmanship.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/get-a-quote" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">Get a Free Quote</a>
            <a href="tel:01415552233" className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium">Call 0141 555 2233</a>
          </div>
        </div>
      </section>

      {/* Postcodes and Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">Electrician Services in {loc.name}</h2>
              <p className="text-gray-700 mt-3">
                We cover households and businesses across {loc.name}. Popular services include fuseboard upgrades, EICR testing for landlords and homeowners, lighting installations, socket additions, and fast fault finding.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Popular Services</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {popularServices.map((s) => (
                    <li key={s.to}>
                      <Link className="block rounded border border-gray-200 bg-white hover:bg-gray-50 px-4 py-3 text-blue-700 font-medium" to={s.to}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900">Postcode Areas Covered</h3>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {loc.postcodePrefixes.map((pc) => (
                    <li key={pc}><span className="inline-block rounded bg-blue-50 text-blue-700 px-2 py-1 text-sm font-medium">{pc}</span></li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-4">If your postcode isn’t listed, we likely still cover you. <a href="/contact" className="text-blue-600 underline">Get in touch</a>.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Get a fast quote in {loc.name}</h2>
          <p className="text-gray-600 mt-2">Same-day and next-day appointments available across {loc.postcodePrefixes.join(', ')}.</p>
          <div className="mt-6">
            <a href="/get-a-quote" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get a Free Quote</a>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
          <Link to="/" className="text-blue-700 hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/locations" className="text-blue-700 hover:underline">Locations</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{loc.name}</span>
        </div>
      </nav>
    </main>
  );
};

export default LocationPage;
