const Joi = require('joi')

const id_entrenador = Joi.string().uuid()
const nombre_entrenador = Joi.string().min(1).max(50)
const apellido_entrenador = Joi.string().min(1).max(50)
const id_red_social = Joi.string().min(1).max(10)
const id_equipo = Joi.string().min(1).max(10)



const createEntrenadorSchema = Joi.object({
 id_entrenador: id_entrenador.required()
})
const updateEntrenadorSchema=Joi.object({
    nombre_entrenador,
    apellido_entrenador
})

const getEntrenadorSchema= Joi.object({
    id_entrenador:id_entrenador.required()
})

module.exports={
    createEntrenadorSchema, 
    updateEntrenadorSchema,
    getEntrenadorSchema
}

