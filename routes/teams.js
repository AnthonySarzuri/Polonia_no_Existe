const express = require('express')

const teamsService = require('../services/teams.service')
const validateHandler = require('../middlewares/validate.handler')
const { createTeamsSchema, updateTeamsSchema, getTeamsSchema } = require('../schemas/teams.schema')

const router = express.Router()
const service = new teamsService()

router.get('/', async (req, res) => {
    try {
        const teams = await service.find()
        res.status(200).json(teams)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getTeamsSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const team = await service.findone(id)
            res.status(200).json(team)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createTeamsSchema, 'body'),
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
    validateHandler(getTeamsSchema, 'params'),
    validateHandler(updateTeamsSchema, 'body'),
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
    validateHandler(getTeamsSchema, 'params'),
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