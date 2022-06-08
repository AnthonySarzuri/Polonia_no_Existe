const { Model, DataTypes, Sequelize }= require('sequelize')

const ARBITROS_TABLA= 'TArbitro'

const ArbitrosSchema = {
    id_arbitro:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_arbitro: {
        allowNull: false,
        type: DataTypes.STRING
    },
    apellidos_arbitro: {
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