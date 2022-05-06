const express = require('express')

const fieldsService = require('../services/fields.service')
const validateHandler = require('../middlewares/validate.handler')
const { createFieldsSchema, updateFieldsSchema, getFieldsSchema } = require('../schemas/fields.schema')

const router = express.Router()
const service = new fieldsService()

router.get('/', async (req, res) => {
    try {
        const fields = await service.find()
        res.status(200).json(fields)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.get('/:id',
    validateHandler(getFieldsSchema, 'params'),
    async (req, res, next) => {
        try {
            const id = req.params.id
            const field = await service.findone(id)
            res.status(200).json(field)
        } catch (error) {
            next(error)
        }
    })

router.post('/',
    validateHandler(createFieldsSchema, 'body'),
    async (req, res) => {
        try {
            const body = req.body
            const newField = await service.create(body)

            res.status(201).json({
                message: 'created',
                data: newField
            })
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    })

router.patch('/:id',
    validateHandler(getFieldsSchema, 'params'),
    validateHandler(updateFieldsSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body
            const changeField = await service.update(id, body)
            res.json({
                message: 'updated',
                data: changeField
            })
        } catch (error) {
            next(error)
        }
    })

router.delete('/:id',
    validateHandler(getFieldsSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const fieldDeleted = await service.delete(id)
            res.json(fieldDeleted)
        } catch (error) {
            next(error)
        }
    })

module.exports = router