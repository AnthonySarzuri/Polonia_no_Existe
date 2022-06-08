const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)
const couchname = Joi.string().min(3).max(30)
const phone = Joi.string().min(7).max(14)
const image = Joi.string().uri()



const createEquipoSchema = Joi.object({
 name: name.required(),
 couchname: couchname.required(),
 phone,
 image

})
const updateEquipoSchema=Joi.object({
    name,
	couchname,
    phone,
    image
})

const getEquipoSchema= Joi.object({
    id:id.required()
})

module.exports={
    createEquipoSchema, 
    updateEquipoSchema,
    getEquipoSchema
}

