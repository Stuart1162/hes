import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, service, location = 'Glasgow' }) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://yourelectrician-glasgow.co.uk';
  const defaultTitle = 'Professional Electrician Services in Glasgow';
  const defaultDescription = 'Fully qualified and certified electricians serving Glasgow and surrounding areas. 24/7 emergency services, free quotes, and guaranteed workmanship.';
  
  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}/logo-og.jpg`,
    twitter: '@yourelectrician',
  };

  const schemaOrgWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    description: seo.description,
    url: seo.url,
    publisher: {
      '@type': 'Electrician',
      name: 'Your Electrician Glasgow',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: '600',
        height: '60'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': seo.url
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: 'Your Electrician Glasgow',
    image: `${siteUrl}/logo.jpg`,
    '@id': `${siteUrl}/#electrician`,
    url: siteUrl,
    telephone: '+44 141 XXX XXXX',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Electric Street',
      addressLocality: 'Glasgow',
      postalCode: 'G1 1AA',
      addressCountry: 'GB',
      addressRegion: 'Scotland'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '55.8642',
      longitude: '-4.2518'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
        closed: true
      }
    ],
    sameAs: [
      'https://www.facebook.com/yourelectricianglasgow',
      'https://www.instagram.com/yourelectricianglasgow',
      'https://www.yelp.com/biz/your-electrician-glasgow'
    ]
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="geo.region" content="GB-GLG" />
      <meta name="geo.placename" content="Glasgow" />
      <meta name="geo.position" content="55.8642;-4.2518" />
      <meta name="ICBM" content="55.8642, -4.2518" />
      
      {/* Open Graph */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Your Electrician Glasgow" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      
      {/* Service-specific schema if provided */}
      {service && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'serviceType': service.name,
            'provider': localBusinessSchema,
            'description': service.description || `${service.name} services in Glasgow`,
            'areaServed': [
              {
                '@type': 'City',
                'name': 'Glasgow',
                'sameAs': 'https://en.wikipedia.org/wiki/Glasgow'
              },
              {
                '@type': 'AdministrativeArea',
                'name': 'Glasgow City',
                'sameAs': 'https://en.wikipedia.org/wiki/Glasgow_City'
              },
              {
                '@type': 'Country',
                'name': 'United Kingdom',
                'sameAs': 'https://en.wikipedia.org/wiki/United_Kingdom'
              }
            ],
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Electrical Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': {
                    '@type': 'Service',
                    'name': service.name,
                    'description': service.description || `${service.name} services in Glasgow`
                  }
                }
              ]
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
