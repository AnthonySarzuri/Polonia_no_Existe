const express = require('express')

const cambiosService = require('../services/cambios.service')
const validateHandler = require('../middlewares/validate.handler')
const { createCambioSchema, updateCambioSchema, getCambioSchema } = require('../schemas/cambios.schema')

const router = express.Router()
const service = new cambiosService()

router.get('/', async (req, res) => {
    try {
        const cambios = await service.find()
        res.status(200).json(cambios)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getCambioSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const cambio = await service.findone(id)
            res.status(200).json(cambio)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createCambioSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newCambio = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newCambio
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getCambioSchema, 'params'),
    validateHandler(updateCambioSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeCambio = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeCambio
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getCambioSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const cambioDeleted = await service.delete(id)
            res.json(cambioDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router