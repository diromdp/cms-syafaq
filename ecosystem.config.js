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
      max_memory_restart: '16G',
      watch: false,
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
}; 