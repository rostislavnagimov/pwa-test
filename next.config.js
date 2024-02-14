const withPWA = require('next-pwa');

module.exports = withPWA({
  dest: 'public',
  // output: 'export',
  // disable: process.env.NODE_ENV === 'development',
});
