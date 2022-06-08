const { Model, DataTypes, Sequelize }= require('sequelize')

const CANCHAS_TABLA= 'TCanchas'

const CanchasSchema = {
    id_cancha:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_cancha: {
        allowNull: false,
        type: DataTypes.STRING
    },
    direccion_cancha: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    
    encargado: {
        allowNull: false,
        type: DataTypes.STRING 
    },
     
    telefono_encargado: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    
    imagen_cancha: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    createAt:{
        allowNull: false,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}