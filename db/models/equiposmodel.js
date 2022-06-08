const { Model, DataTypes, Sequelize }= require('sequelize')

const EQUIPOS_TABLA= 'TEquipos'

const EquiposSchema = {
    id_equipo:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_equipo_l: {
        allowNull: false,
        type: DataTypes.STRING
    },
    imagen_equipo: {
        allowNull:false,
        type: DataTypes.STRING
    },
    id_red_social: {
        allowNull:false,
        type: DataTypes.STRING
    },
  
    createAt:{
        allowNull: false,
        
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}