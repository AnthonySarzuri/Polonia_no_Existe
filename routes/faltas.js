const express = require('express')

const faltasService = require('../services/faltas.service')
const validateHandler = require('../middlewares/validate.handler')
const { createFaltaSchema, updateFaltaSchema, getFaltaSchema } = require('../schemas/faltas.schema')

const router = express.Router()
const service = new faltasService()

router.get('/', async (req, res) => {
    try {
        const faltas = await service.find()
        res.status(200).json(faltas)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getFaltaSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const falta = await service.findone(id)
            res.status(200).json(falta)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createFaltaSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newTeam = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newTeam
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getFaltaSchema, 'params'),
    validateHandler(updateFaltaSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeFalta = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeFalta
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getFaltaSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const faltaDeleted = await service.delete(id)
            res.json(faltaDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router