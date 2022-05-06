const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const ownwer = Joi.string().min(3).max(30)
const direction = Joi.string().min(3).max(50)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()



const createFieldsSchema = Joi.object({
 name: name.required(),
 ownwer: ownwer.required(),
 direction:direction.required(),
 phone,
 image

})
const updateFieldsSchema=Joi.object({
    name,
	ownwer,
    direction,
    phone,
    image
})

const getFieldsSchema= Joi.object({
    id:id.required()
})

module.exports={
    createFieldsSchema, 
    updateFieldsSchema,
    getFieldsSchema
}