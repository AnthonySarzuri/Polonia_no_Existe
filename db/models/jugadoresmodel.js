const { Model, DataTypes, Sequelize }= require('sequelize')

const JUGADOR_TABLA= 'TJugadores'

const JugagoresSchema = {
    id_jugador:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_jugador: {
        allowNull: false,
        type: DataTypes.STRING
    },
    apellidos_jugador: {
        allowNull: false,
        type: DataTypes.STRING 
    },
    fecha_nacimiento: {
        allowNull: false,
        type: DataTypes.STRING
    },
    imagen_jugador: {
        allowNull:false,
        type: DataTypes.STRING
    },
    posicion: {
        allowNull:false,
        type: DataTypes.STRING
    },   
    altura: {
        allowNull:false,
        type: DataTypes.STRING
    },
    id_red_social: {
        allowNull:false,
        type: DataTypes.STRING
    },
    id_equipo: {
        allowNull:false,
        type: DataTypes.STRING
    },
  
    createAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}