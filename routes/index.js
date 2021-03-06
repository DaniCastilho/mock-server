const express = require('express')
const requestsRoutes = require('./requests')
const scenariosRoutes = require('./scenarios')

const router = express.Router()

const configureRoutes = ({ server, services }) => {
  requestsRoutes(server, services, router)
  scenariosRoutes(server, services, router)

  router.get('/', (req, res) => {
    res.status(200).send(`
  *************** MOCK SERVER CLI ***************
  ** Run in your terminal
  ** $ npm install @easynvest/mock-server
  ** $ mock-server init
  ** $ mock-server start
  ** or
  ** $ mock-server --help
  *************** MOCK SERVER CLI ***************\n`)
  })

  return router
}

module.exports = configureRoutes
