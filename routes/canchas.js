const express = require('express')

const canchasService = require('../services/canchas.service')
const validateHandler = require('../middlewares/validate.handler')
const { createCanchaSchema, updateCanchaSchema, getCanchaSchema } = require('../schemas/canchas.schema')

const router = express.Router()
const service = new canchasService()

router.get('/', async (req, res) => {
    try {
        const canchas = await service.find()
        res.status(200).json(canchas)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getCanchaSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const equipo = await service.findone(id)
            res.status(200).json(equipo)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createCanchaSchema, 'body'),
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
    validateHandler(getCanchaSchema, 'params'),
    validateHandler(updateCanchaSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeTeam = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeTeam
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getCanchaSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const teamDeleted = await service.delete(id)
            res.json(teamDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router