const Joi = require('joi')

const id_score = Joi.string().uuid()
const nombre_score = Joi.string().min(1).max(50)
const puntos = Joi.string().min(1).max(20)
const cesto_1_punto = Joi.string().min(1).max(50)
const cesto_2_punto = Joi.string().min(1).max(50)
const cesto_3_punto = Joi.string().min(1).max(50)
const id_equipo = Joi.string().min(1).max(10)
const id_partido = Joi.string().min(1).max(10)



const createScoreSchema = Joi.object({
 id_score: id_score.required()
})
const updateScoreSchema=Joi.object({
    nombre_score,
    puntos
})

const getScoreSchema= Joi.object({
    id_score:id_score.required()
})

module.exports={
    createScoreSchema, 
    updateScoreSchema,
    getScoreSchema
}

