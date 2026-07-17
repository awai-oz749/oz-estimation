/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://brixestimation.com',
  generateRobotsTxt: true,
  outDir: './out',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/services/' || path === '/services') {
      priority = 0.95;
      changefreq = 'daily';
    } else if (path === '/get-estimation/' || path === '/get-estimation') {
      priority = 0.95;
      changefreq = 'weekly';
    } else if (path === '/about/' || path === '/about') {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.match(/^\/services\/[^/]+\/$/)) {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.match(/^\/services\/[^/]+\/[^/]+\/$/)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/faqs/' || path === '/faqs') {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path === '/privacy-policy/' || path === '/privacy-policy') {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
    };
  },
};

export default config;
