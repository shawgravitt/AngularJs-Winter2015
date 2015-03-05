'use strict';

var proxyRequest = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt) {

  grunt.config('connect', {

    main: {
      options: {
        hostname: 'localhost',
        open: true,
        livereload: true,
        port: '9000',
        logger: 'dev',
        middleware: function(connect, options) {

          var middlewares = [];

          if (!Array.isArray(options.base)) {
            options.base = [options.base];
          }

          options.base.forEach(function (base) {
            middlewares.push(connect.static(base));
          });

          middlewares.push(proxyRequest);

          return middlewares;

        }
      }
    },

    server:  {
      proxies: {
        context: ['/leafly'],
        host: 'leafly.com',
        changeOrigin: true
      }
    }

  });

};
