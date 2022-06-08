const { Model, DataTypes, Sequelize }= require('sequelize')

const ENTRENADORES_TABLA= 'TEntrenador'

const EntrenadoresSchema = {
    id_entrenador:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_entrenador: {
        allowNull: false,
        type: DataTypes.STRING
    },
    apellidos_entrenador: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_red_social: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    id_equipo: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    createAt:{
        allowNull: false,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}