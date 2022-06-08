const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const couchname = Joi.string().min(3).max(30)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()



const createCanchaSchema = Joi.object({
 name: name.required(),
 couchname: couchname.required(),
 phone,
 image

})
const updateCanchaSchema=Joi.object({
    name,
	couchname,
    phone,
    image
})

const getCanchaSchema= Joi.object({
    id:id.required()
})

module.exports={
    createCanchaSchema, 
    updateCanchaSchema,
    getCanchaSchema
}

