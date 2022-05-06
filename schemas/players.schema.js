const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const lastName = Joi.string().min(3).max(30)
const age = Joi.number().integer().min(5).max(99)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()



const createPlayerSchema = Joi.object({
 name: name.required(),
 lastName: lastName.required(),
 age: age.required(),
 phone,
 image

})
const updatePlayerSchema=Joi.object({
    name,
	lastName,
    age,
    phone,
    image
})

const getPlayerSchema= Joi.object({
    id:id.required()
})

module.exports={
    createPlayerSchema, 
    updatePlayerSchema,
    getPlayerSchema
}

