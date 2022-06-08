const Joi = require('joi')

const id_faltas = Joi.string().uuid()
const descripcion = Joi.string().min(1).max(50)
const id_jugador = Joi.string().min(1).max(10)
const id_partido = Joi.string().min(1).max(10)



const createFaltaSchema = Joi.object({
 id_faltas: id_faltas.required()
})
const updateFaltaSchema=Joi.object({
    descripcion,
})

const getFaltaSchema= Joi.object({
    id_faltas:id_faltas.required()
})

module.exports={
    createFaltaSchema, 
    updateFaltaSchema,
    getFaltaSchema
}

