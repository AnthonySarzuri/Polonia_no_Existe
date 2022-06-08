const Joi = require('joi')

const id_arbitro = Joi.string().uuid()
const nombre_arbitro = Joi.string().min(1).max(50)
const apellidos_arbitro = Joi.string().min(1).max(50)
const id_partido = Joi.string().min(1).max(10)



const createArbitroSchema = Joi.object({
 id_arbitro: id_arbitro.required()
})
const updateArbitroSchema=Joi.object({
    nombre_arbitro,
    apellidos_arbitro
})

const getArbitroSchema= Joi.object({
    id_arbitro:id_arbitro.required()
})

module.exports={
    createArbitroSchema, 
    updateArbitroSchema,
    getArbitroSchema
}

