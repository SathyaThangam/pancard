module.exports = {
  apps : [{
    name: 'pancard',
    script: 'npm',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '159.89.165.174',
      ref  : 'origin/master',
      repo : 'https://github.com/SathyaThangam/pancard.git',
      path : '/var/www/pancard',
      'post-deploy' : 'npm install --production && npm run build'
    }
  }
};
