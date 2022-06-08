const { Model, DataTypes, Sequelize }= require('sequelize')

const FALTAS_TABLA= 'TFaltas'

const FaltasSchema = {
    id_faltas:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    descripcion: {
        allowNull: false,
        type: DataTypes.STRING
    },
    id_jugador: {
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