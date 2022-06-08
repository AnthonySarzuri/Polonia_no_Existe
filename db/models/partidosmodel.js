const { Model, DataTypes, Sequelize }= require('sequelize')

const PARTIDOS_TABLA= 'TArbitro'

const Partidos_Schema = {
    id_partido:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    fecha_partido: {
        allowNull: false,
        type: DataTypes.DATE
    },
    hora_partido: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    lugar_partido: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_equipo_l: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_equipo_v: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_cancha: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_score: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    createAt:{
        allowNull: false,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}