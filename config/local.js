/**
 * Created by pang on 7/10/2016.
 */
'use strict';
var fs = require('fs');
/**
 * Local environment settings
 *
 * While you're DEVELOPING your app, this config file should include
 * any settings specifically for your development computer (db passwords, etc.)
 *
 * When you're ready to deploy your app in PRODUCTION, you can always use this file
 * for configuration options specific to the server where the app will be deployed.
 * But environment variables are usually the best way to handle production settings.
 *
 * PLEASE NOTE:
 *      This file is included in your .gitignore, so if you're using git
 *      as a version control solution for your Sails app, keep in mind that
 *      this file won't be committed to your repository!
 *
 *      Good news is, that means you can specify configuration for your local
 *      machine in this file without inadvertently committing personal information
 *      (like database passwords) to the repo.  Plus, this prevents other members
 *      of your team from committing their local configuration changes on top of yours.
 *
 * For more information, check out:
 * http://links.sailsjs.org/docs/config/local
 */
module.exports = {

  /**
   * The default fallback URL to Kong's admin API.
   */
  kong_admin_url: process.env.KONG_ADMIN_URL || 'http://localhost:8001',// 'http://gluu.local.org:8001',


  connections: {
    postgres: {
      adapter: 'sails-postgresql',
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin',
      port: process.env.DB_PORT && parseInt(process.env.DB_PORT) || 5432,
      database: process.env.DB_DATABASE || 'konga',
      poolSize: process.env.DB_POOLSIZE && parseInt(process.env.DB_POOLSIZE) || 10,
      ssl:  process.env.DB_SSL && JSON.parse(process.env.DB_SSL.toLowerCase()) || false
    }
  },

  models: {
    connection: process.env.DB_ADAPTER || 'postgres',
  },

  session: {
    secret: process.env.SESSION_SECRET || '' // Add your own SECRET string here
  },

  ssl: {
    key: fs.readFileSync(process.env.SSL_KEY_PATH || 'key.pem'),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH || 'cert.pem')
  },
  hookTimeout: process.env.HOOK_TIMEOUT && parseInt(process.env.HOOK_TIMEOUT) || 180000, // miliseconds
  port: process.env.PORT && parseInt(process.env.PORT) || 1338,
  environment: 'development',
  log: {
    level: process.env.LOG_LEVEL || 'info'
  },
  ggHost: process.env.GG_HOST || 'gluu.local.org',
  oxdWeb: process.env.OXD_SERVER_URL || 'https://localhost:8553',
  opHost: process.env.OP_SERVER_URL || 'https://ce-dev6.gluu.org',
  oxdId: process.env.OXD_ID || '05e3bf4e-7631-4afa-a6ff-a46acc98c52b',
  clientId: process.env.CLIENT_ID || '063701b0-05fa-40ca-bf73-d160377fd1dd',
  clientSecret: process.env.CLIENT_SECRET || '63e6ebf7-9f2d-48fc-8ece-3b8af0ad10fa',
  oxdVersion: process.env.OXD_SERVER_VERSION || '4.1',
  ggVersion: process.env.GG_VERSION || '4.1',
  postgresVersion: process.env.POSTGRES_VERSION || '10.x',
  explicitHost: process.env.EXPLICIT_HOST || '0.0.0.0',
  ggUIRedirectURLHost: process.env.GG_UI_REDIRECT_URL_HOST || 'gluu.local.org',
};
