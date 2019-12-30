const server = require('./webpack/webpack.client.config');
const client = require('./webpack/webpack.server.config');

module.exports = [
  server,
  client,
];