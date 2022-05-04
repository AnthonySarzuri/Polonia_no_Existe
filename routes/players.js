const express = require('express')

const playersService = require('../services/players.service')
const validateHandler = require('../middlewares/validate.handler')
const { createplayerschema, updateplayerschema, getplayerschema } = require('../schemas/players.schema')

const router = express.Router()
const service = new playersService()

router.get('/', async (req, res) => {
    try {
        const players = await service.find()
        res.status(200).json(players)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getplayerschema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const player = await service.findone(id)
            res.status(200).json(player)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createplayerschema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newPlayer = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newPlayer
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getplayerschema, 'params'),
    validateHandler(updateplayerschema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changePlayer = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changePlayer
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getplayerschema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const playerDeleted = await service.delete(id)
            res.json(playerDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router