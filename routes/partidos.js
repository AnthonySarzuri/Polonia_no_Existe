const express = require('express')

const partidosService = require('../services/partidos.service')
const validateHandler = require('../middlewares/validate.handler')
const { createPartidoSchema, updatePartidoSchema, getPartidoSchema } = require('../schemas/partidos.schema')

const router = express.Router()
const service = new partidosService()

router.get('/', async (req, res) => {
    try {
        const partidos = await service.find()
        res.status(200).json(partidos)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getPartidoSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const partido = await service.findone(id)
            res.status(200).json(partido)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createPartidoSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newPartido = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newPartido
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getPartidoSchema, 'params'),
    validateHandler(updatePartidoSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changePartido = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changePartido
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getPartidoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const partidoDeleted = await service.delete(id)
            res.json(partidoDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router