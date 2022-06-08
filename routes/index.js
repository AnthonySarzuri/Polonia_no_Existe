const express = require('express')
const swaggerUI= require('swagger-ui-express')

const jugadores = require('./jugadores')
const equipos = require('./equipos')
const redesSociales = require('./redessociales')
const canchas = require('./canchas')
const faltas = require('./faltas')
const entrenadores = require('./entrenadores')
const cambios = require('./cambios')
const arbitros = require('./arbitros')
const scores = require('./scores')
const partidos = require('./partidos')



function routerApi(app) {  
    const router= express.Router()
    app.use('/proyecto/v1', router)

    const swaggerDoc=require('../swagger.json')
    app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDoc))

    router.use('/jugadores', jugadores)
    router.use('/equipos', equipos)
    router.use('/redessociales', redesSociales)
    
    router.use('/canchas', canchas)
    router.use('/faltas', faltas)
    router.use('/entrenadores', entrenadores)
    router.use('/cambios', cambios)
    router.use('/arbitros', arbitros)
    router.use('/scores', scores)
    router.use('/partidos', partidos)
}

module.exports = routerApi