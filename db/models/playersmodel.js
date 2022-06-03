const { Model, DataTypes, Sequelize }= require('sequelize')

const PLAYER_TABLE= 'players'

const PlayersSchema = {
    id_player:{
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
    fechaNac_jugador: {
        allowNull: false,
        type: DataTypes.DATE
    },
    imagen_jugador: {
        type: DataTypes.STRING
    },
    posicion_jugador: {
        type: DataTypes.STRING
    },
    altura_jugador: {
        type: DataTypes.STRING
    },
    createAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}