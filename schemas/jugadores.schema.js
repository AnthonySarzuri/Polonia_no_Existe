const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const lastName = Joi.string().min(3).max(30)
const age = Joi.number().integer().min(5).max(99)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()



const createJugadorSchema = Joi.object({
 name: name.required(),
 lastName: lastName.required(),
 age: age.required(),
 phone,
 image

})
const updateJugadorSchema=Joi.object({
    name,
	lastName,
    age,
    phone,
    image
})

const getJugadorSchema= Joi.object({
    id:id.required()
})

module.exports={
    createJugadorSchema, 
    updateJugadorSchema,
    getJugadorSchema
}

