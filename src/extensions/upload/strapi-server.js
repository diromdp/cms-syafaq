module.exports = (plugin) => {
  const settings = require('./config/settings.json');
  
  // Add the function to handle the file path for Assets-strapi folder
  if (settings.providerOptions && settings.providerOptions.params) {
    settings.providerOptions.params.Key = (filename) => `Assets-strapi/${filename}`;
  }
  
  plugin.config.provider = settings.provider;
  plugin.config.providerOptions = settings.providerOptions;
  plugin.config.actionOptions = settings.actionOptions;
  
  return plugin;
}; 