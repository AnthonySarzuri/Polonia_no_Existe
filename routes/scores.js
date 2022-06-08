const express = require('express')

const scoresService = require('../services/scores.service')
const validateHandler = require('../middlewares/validate.handler')
const { createScoreSchema, updateScoreSchema, getScoreSchema } = require('../schemas/scores.schema')

const router = express.Router()
const service = new scoresService()

router.get('/', async (req, res) => {
    try {
        const scores = await service.find()
        res.status(200).json(scores)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getScoreSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const score = await service.findone(id)
            res.status(200).json(score)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createScoreSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newScore = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newScore
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getScoreSchema, 'params'),
    validateHandler(updateScoreSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeScore = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeScore
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getScoreSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const scoreDeleted = await service.delete(id)
            res.json(scoreDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router