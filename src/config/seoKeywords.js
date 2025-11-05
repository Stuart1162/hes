// SEO Keywords for Glasgow Electrician Website
export const glasgowAreas = [
  'Glasgow', 'Glasgow City', 'Glasgow West End', 'Glasgow Southside', 
  'Glasgow East End', 'Glasgow City Centre', 'Glasgow North', 'Glasgow South',
  'Glasgow East', 'Glasgow West', 'Glasgow G1', 'Glasgow G2', 'Glasgow G3',
  'Glasgow G4', 'Glasgow G5', 'Glasgow G11', 'Glasgow G12', 'Glasgow G13',
  'Glasgow G14', 'Glasgow G15', 'Glasgow G20', 'Glasgow G21', 'Glasgow G22',
  'Glasgow G23', 'Glasgow G31', 'Glasgow G32', 'Glasgow G33', 'Glasgow G34',
  'Glasgow G40', 'Glasgow G41', 'Glasgow G42', 'Glasgow G43', 'Glasgow G44',
  'Glasgow G45', 'Glasgow G46', 'Glasgow G51', 'Glasgow G52', 'Glasgow G53',
  'Glasgow G58', 'Glasgow G60', 'Glasgow G61', 'Glasgow G62', 'Glasgow G64',
  'Glasgow G65', 'Glasgow G66', 'Glasgow G67', 'Glasgow G68', 'Glasgow G69',
  'Glasgow G71', 'Glasgow G72', 'Glasgow G73', 'Glasgow G74', 'Glasgow G75',
  'Glasgow G76', 'Glasgow G77', 'Glasgow G78', 'Glasgow G79', 'Glasgow G81',
  'Glasgow G82', 'Glasgow G83', 'Glasgow G84'
];

export const nearbyAreas = [
  'Paisley', 'East Kilbride', 'Clydebank', 'Bearsden', 'Milngavie',
  'Bishopbriggs', 'Newton Mearns', 'Barrhead', 'Renfrew', 'Erskine',
  'Dumbarton', 'Helensburgh', 'Cumbernauld', 'Kirkintilloch', 'Lenzie',
  'Stepps', 'Moodiesburn', 'Airdrie', 'Coatbridge', 'Motherwell',
  'Hamilton', 'Cambuslang', 'Rutherglen', 'Blantyre', 'Uddingston'
];

export const services = [
  'electrician', 'electrical services', 'electrical contractor',
  'emergency electrician', '24 hour electrician', 'certified electrician',
  'domestic electrician', 'commercial electrician', 'industrial electrician',
  'NICEIC electrician', 'SELECT electrician', 'PAT testing', 'EICR',
  'electrical testing', 'electrical repairs', 'electrical installations',
  'electrical maintenance', 'fuse board upgrade', 'consumer unit replacement',
  'fault finding', 'lighting installation', 'emergency lighting',
  'smoke alarm installation', 'fire alarm installation', 'EV charger installation',
  'home automation', 'smart home installation', 'data cabling', 'TV aerial installation'
];

export const searchPhrases = [
  'electrician near me', 'emergency electrician near me',
  'electrician Glasgow', 'emergency electrician Glasgow',
  'electrician Glasgow city centre', 'electrician Glasgow southside',
  'best electrician in Glasgow', 'cheap electrician in Glasgow',
  'NICEIC electrician in Glasgow', 'SELECT electrician in Glasgow'
];

export const questions = [
  'How much does an electrician cost in Glasgow?',
  'How do I find a reliable electrician in Glasgow?',
  'How much does it cost to rewire a house in Glasgow?',
  'How often should I have an electrical inspection in Glasgow?',
  'How much does it cost to install an EV charger in Glasgow?',
  'What is an EICR and do I need one in Glasgow?',
  'How much does PAT testing cost in Glasgow?',
  'What is the average cost to rewire a 3-bed house in Glasgow?',
  'How much does it cost to upgrade a fuse box in Glasgow?',
  'How much does it cost to install downlights in Glasgow?'
];

// Generate location-specific service pages
export const generateLocationServicePages = () => {
  const pages = [];
  
  glasgowAreas.forEach(area => {
    services.forEach(service => {
      pages.push({
        title: `${service} in ${area}`,
        slug: `${service.toLowerCase().replace(/\s+/g, '-')}-in-${area.toLowerCase().replace(/\s+/g, '-')}`,
        description: `Professional ${service} services in ${area}. Local, reliable, and fully certified electricians. Free quotes available.`
      });
    });
  });
  
  return pages;
};

// Generate sitemap URLs
export const generateSitemapUrls = () => {
  const urls = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/areas-covered', changefreq: 'monthly', priority: '0.7' },
    { url: '/emergency', changefreq: 'monthly', priority: '0.9' },
    { url: '/commercial', changefreq: 'weekly', priority: '0.8' },
    { url: '/domestic', changefreq: 'weekly', priority: '0.8' },
    { url: '/landlords', changefreq: 'weekly', priority: '0.8' },
    { url: '/eicr', changefreq: 'weekly', priority: '0.8' },
    { url: '/pat-testing', changefreq: 'weekly', priority: '0.7' },
    { url: '/electrical-testing', changefreq: 'weekly', priority: '0.7' },
    { url: '/fuse-board-upgrade', changefreq: 'weekly', priority: '0.7' },
    { url: '/consumer-unit-replacement', changefreq: 'weekly', priority: '0.7' },
    { url: '/rewiring', changefreq: 'weekly', priority: '0.7' },
    { url: '/lighting', changefreq: 'weekly', priority: '0.7' },
    { url: '/emergency-lighting', changefreq: 'weekly', priority: '0.7' },
    { url: '/smoke-alarms', changefreq: 'weekly', priority: '0.7' },
    { url: '/fire-alarms', changefreq: 'weekly', priority: '0.7' },
    { url: '/ev-chargers', changefreq: 'weekly', priority: '0.7' },
    { url: '/data-cabling', changefreq: 'weekly', priority: '0.6' },
    { url: '/tv-aerial', changefreq: 'weekly', priority: '0.6' },
    { url: '/home-automation', changefreq: 'weekly', priority: '0.6' },
    { url: '/smart-home', changefreq: 'weekly', priority: '0.6' },
    { url: '/testimonials', changefreq: 'monthly', priority: '0.5' },
    { url: '/faqs', changefreq: 'monthly', priority: '0.5' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { url: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
    { url: '/cookies-policy', changefreq: 'yearly', priority: '0.3' },
    { url: '/sitemap', changefreq: 'weekly', priority: '0.5' },
  ];
  
  // Add location-specific pages
  glasgowAreas.forEach(area => {
    const slug = area.toLowerCase().replace(/\s+/g, '-');
    urls.push({
      url: `/area/${slug}`,
      changefreq: 'weekly',
      priority: '0.7'
    });
  });
  
  return urls;
};
