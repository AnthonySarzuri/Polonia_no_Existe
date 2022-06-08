const { Model, DataTypes, Sequelize } = require('sequelize')

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
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}
class Arbitro extends Model{
    static associate() {

    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ARBITROS_TABLA,
            modelName: 'Arbitro',
            timestamps: false
        }
    }
}
module.exports={
    ARBITROS_TABLA,
    ArbitrosSchema,
    Arbitro
}