const {Arbitro, ArbitrosSchema} = require('./arbitros.model')
const {Cambios, CambiosSchema} = require('./cambiosmodel')
const {Canchas, CanchasSchema} = require('./canchasmodel')
const {Entrenadores, EntrenadoresSchema} = require('./entrenadoresmodel')
const {Equipos, EquiposSchema} = require('./equiposmodel')
const {Faltas, FaltasSchema} = require('./faltasmodel')
const {Jugadores, JugagoresSchema} = require('./jugadoresmodel')
const {Partidos, Partidos_Schema} = require('./partidosmodel')
const {RedesSociales, RedesSocialesSchema} = require('./redessocialesmodel')
const {Score, ScoresSchema} = require('./scoresmodel')

function setupModels(sequelize){
    Arbitro.init(ArbitrosSchema, Arbitro.config(sequelize))
    Cambios.init(CambiosSchema, Cambios.config(sequelize))
    Canchas.init(CanchasSchema, Canchas.config(sequelize))
    Entrenadores.init(EntrenadoresSchema, Entrenadores.config(sequelize))
    Equipos.init(EquiposSchema, Equipos.config(sequelize))
    Faltas.init(FaltasSchema, Faltas.config(sequelize))
    Jugadores.init(JugagoresSchema, Jugadores.config(sequelize))
    Partidos.init(Partidos_Schema, Partidos.config(sequelize))
    RedesSociales.init(RedesSocialesSchema, RedesSociales.config(sequelize))
    Score.init(ScoresSchema, Score.config(sequelize))
}


module.exports = setupModels