const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const age = Joi.number().integer().min(5).max(99)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()

const createplayerschema = Joi.object({
    name: name.required(),
    age: age.required(),
    phone,
    image
})

const updateplayerschema = Joi.object({
    name,
    age,
    phone,
    image
})

const getplayerschema = Joi.object({
    id: id.required()
})

module.exports = {
    createplayerschema,
    updateplayerschema,
    getplayerschema
}