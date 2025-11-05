const fs = require('fs');
const path = require('path');

const generateRobotsTxt = () => {
  const baseUrl = 'https://yourelectrician-glasgow.co.uk';
  const date = new Date().toISOString().split('T')[0];
  
  const robotsTxt = `# robots.txt for ${baseUrl}
# Generated on ${date}

User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/
Disallow: /*?*
Disallow: /*.json$

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay: 10  # Uncomment if needed to prevent server overload
`;

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write robots.txt to public directory
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('robots.txt generated successfully!');
};

generateRobotsTxt();
