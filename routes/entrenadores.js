const express = require('express')

const entrenadoresService = require('../services/entrenadores.service')
const validateHandler = require('../middlewares/validate.handler')
const { createEntrenadorSchema, updateEntrenadorSchema, getEntrenadorSchema } = require('../schemas/entrenadores.schema')

const router = express.Router()
const service = new entrenadoresService()

router.get('/', async (req, res) => {
    try {
        const entrenadores = await service.find()
        res.status(200).json(entrenadores)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getEntrenadorSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const entrenador = await service.findone(id)
            res.status(200).json(entrenador)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createEntrenadorSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newEntrenador = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newEntrenador
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getEntrenadorSchema, 'params'),
    validateHandler(updateEntrenadorSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeEntrenador = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeEntrenador
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getEntrenadorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const entrenadorDeleted = await service.delete(id)
            res.json(entrenadorDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router