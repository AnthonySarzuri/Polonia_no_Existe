const Joi = require('joi')

const id_cambio = Joi.string().uuid()
const cambio = Joi.string().min(1).max(50)
const id_jugador = Joi.string().min(1).max(10)
const id_partido = Joi.string().min(1).max(10)



const createCambioSchema = Joi.object({
 id_cambio: id_cambio.required()
})
const updateCambioSchema=Joi.object({
    cambio
})

const getCambioSchema= Joi.object({
    id_cambio:id_cambio.required()
})

module.exports={
    createCambioSchema, 
    updateCambioSchema,
    getCambioSchema
}

