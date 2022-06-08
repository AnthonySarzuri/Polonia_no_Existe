const express = require('express')

const arbitrosService = require('../services/arbitros.service')
const validateHandler = require('../middlewares/validate.handler')
const { createArbitroSchema, updateArbitroSchema, getArbitroSchema } = require('../schemas/arbitros.schema')

const router = express.Router()
const service = new arbitrosService()

router.get('/', async (req, res) => {
    try {
        const arbitros = await service.find()
        res.status(200).json(arbitros)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getArbitroSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const arbitro = await service.findone(id)
            res.status(200).json(arbitro)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createArbitroSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newArbitro = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newArbitro
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getArbitroSchema, 'params'),
    validateHandler(updateArbitroSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeArbitro = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeArbitro
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getArbitroSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const arbitroDeleted = await service.delete(id)
            res.json(arbitroDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router