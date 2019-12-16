'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.0.160:8760"',
  UPLOAD_URL: '"http://47.99.170.83:8776"',
  CHILD_ROUTE: '""'
})
