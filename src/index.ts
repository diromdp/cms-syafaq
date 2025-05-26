// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // Explicitly configure AWS SDK if needed
    try {
      const AWS = require('aws-sdk');
      AWS.config.update({
        accessKeyId: process.env.VULTR_ACCESS_KEY_ID,
        secretAccessKey: process.env.VULTR_SECRET_ACCESS_KEY,
        region: process.env.VULTR_REGION,
        s3ForcePathStyle: true,
        signatureVersion: 'v4'
      });
      
      if (process.env.VULTR_ENDPOINT) {
        AWS.config.update({
          endpoint: process.env.VULTR_ENDPOINT
        });
      }
      
      console.log('AWS SDK configured successfully');
    } catch (error) {
      console.error('Failed to configure AWS SDK:', error);
    }
  },
};
