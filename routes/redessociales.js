const express = require('express')

const redessocialesService = require('../services/redessociales.service')
const validateHandler = require('../middlewares/validate.handler')
const { createRedesSocialesSchema, updateRedesSocialesSchema, getRedesSocialesSchema } = require('../schemas/redessociales.schema')

const router = express.Router()
const service = new redessocialesService()

router.get('/', async (req, res) => {
    try {
        const redSocial = await service.find()
        res.status(200).json(redSocial)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getRedesSocialesSchema, 'params'),
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
    validateHandler(createRedesSocialesSchema, 'body'),
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
    validateHandler(getRedesSocialesSchema, 'params'),
    validateHandler(updateRedesSocialesSchema, 'body'),
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
    validateHandler(getRedesSocialesSchema, 'params'),
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