const { Model, DataTypes, Sequelize }= require('sequelize')

const SCORES_TABLA= 'TArbitro'

const ScoresSchema = {
    id_score:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_score: {
        allowNull: false,
        type: DataTypes.STRING
    },
    puntos: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    cesto_1_punto: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    cesto_2_punto: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    cesto_3_punto: {
        allowNull: false,
        type: DataTypes.STRING 
    },  
    id_equipo: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_partido: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    createAt:{
        allowNull: false,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}