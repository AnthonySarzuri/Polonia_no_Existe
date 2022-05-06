const express = require('express')
const swaggerUI= require('swagger-ui-express')

const players = require('./players')
const teachers = require('./teachers')
const courses = require('./courses')

function routerApi(app) {
    const router= express.Router()
    app.use('/univalle/v1', router)

    const swaggerDoc=require('../swagger.json')
    app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDoc))

    router.use('/players', players)
    router.use('/teachers', teachers)
    router.use('/courses', courses)
}

module.exports = routerApi