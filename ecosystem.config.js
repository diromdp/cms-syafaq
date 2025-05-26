module.exports = {
  apps: [
    {
      name: 'blog-syafaq',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 1337,
      },
      exp_backoff_restart_delay: 100,
      max_memory_restart: '1G',
      watch: false,
      instances: 1,
      exec_mode: 'cluster',
    },
  ],

  deploy: {
    production: {
      user: 'deploy_user',
      host: ['149.28.156.13'],
      ref: 'origin/main',
      repo: 'git@github.com:username/blog-syafaq.git',
      path: '/var/www/blog-syafaq',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}; 