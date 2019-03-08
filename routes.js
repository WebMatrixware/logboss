'use strict';

const handlers = require('./handlers');

module.exports = {
  register: async function (server, options) {
    server.route([{
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: './html',
                redirectToSlash: true,
                index: true,
            }
        }
    }]);
  },
  name: 'routes',
  version: '1.0.0'
};
