const { Model, DataTypes, Sequelize }= require('sequelize')

const CAMBIOS_TABLA= 'TCambios'

const CambiosSchema = {
    id_cambio:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    cambio: {
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