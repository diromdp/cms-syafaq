export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'testimoni.sgp1.vultrobjects.com', '*.vultrobjects.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'testimoni.sgp1.vultrobjects.com', '*.vultrobjects.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
