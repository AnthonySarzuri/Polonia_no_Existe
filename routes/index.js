const express = require('express')
const swaggerUI= require('swagger-ui-express')

const players = require('./players')
const teams = require('./teams')
const fields = require('./fields')

function routerApi(app) {  
    const router= express.Router()
    app.use('/proyecto/v1', router)

    const swaggerDoc=require('../swagger.json')
    app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDoc))

    router.use('/players', players)
    router.use('/teams', teams)
    router.use('/fields', fields)
}

module.exports = routerApi

af