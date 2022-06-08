const Joi = require('joi')

const id_partido = Joi.string().uuid()
const fecha_partido = Joi.date
const hora_partido = Joi.string().min(1).max(50)
const lugar_partido = Joi.string().min(1).max(50)
const id_equipo_l = Joi.string().min(1).max(10)
const id_equipo_v = Joi.string().min(1).max(10)
const id_cancha = Joi.string().min(1).max(10)
const id_score = Joi.string().min(1).max(10)



const createPartidoSchema = Joi.object({
 id_partido: id_partido.required()
})
const updatePartidoSchema=Joi.object({
    fecha_partido,
    hora_partido
})

const getPartidoSchema= Joi.object({
    id_partido:id_partido.required()
})

module.exports={
    createPartidoSchema, 
    updatePartidoSchema,
    getPartidoSchema
}

