// This script will be used to generate sitemap.xml
const fs = require('fs');
const path = require('path');

const pages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/domestic', changefreq: 'weekly', priority: '0.8' },
  { url: '/commercial', changefreq: 'weekly', priority: '0.8' },
  { url: '/landlords', changefreq: 'weekly', priority: '0.8' },
  { url: '/eicr', changefreq: 'weekly', priority: '0.8' },
  { url: '/contact', changefreq: 'weekly', priority: '0.9' },
  { url: '/locations', changefreq: 'monthly', priority: '0.7' },
  // Service pages
  { url: '/service/fuseboards', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/smoke-alarms', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/lighting', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/pat-testing', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/sockets', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/shower-installations', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/rewiring', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/fault-finding', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/emergency-lighting', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/eicr-certificates', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/commercial-rewiring', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/office-lighting', changefreq: 'weekly', priority: '0.8' },
  { url: '/service/smoke-fire-alarms', changefreq: 'weekly', priority: '0.8' },
];

const generateSitemap = () => {
  const baseUrl = 'https://yourelectrician-glasgow.co.uk';
  const date = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('')}
</urlset>`;

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run the sitemap generator
generateSitemap();

module.exports = generateSitemap;
