const express = require('express')

const jugadoresService = require('../services/jugadores.service')
const validateHandler = require('../middlewares/validate.handler')
const { createJugadorSchema, updateJugadorSchema, getJugadorSchema } = require('../schemas/jugadores.schema')

const router = express.Router()
const service = new jugadoresService()

router.get('/', async (req, res) => {
    try {
        const jugadores = await service.find()
        res.status(200).json(jugadores)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getJugadorSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const jugador = await service.findone(id)
            res.status(200).json(jugador)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createJugadorSchema, 'body'),
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
    validateHandler(getJugadorSchema, 'params'),
    validateHandler(updateJugadorSchema, 'body'),
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
    validateHandler(getJugadorSchema, 'params'),
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