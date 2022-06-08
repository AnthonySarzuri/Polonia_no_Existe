const { Model, DataTypes, Sequelize }= require('sequelize')

const REDES_SOCIALES_TABLA= 'TRedesSociales'

const RedesSocialesSchema = {
    id_red_social:{
        allowNull:false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    nombre_red_social: {
        allowNull: false,
        type: DataTypes.STRING
    },
    perfil_red_social: {
        allowNull: false,
        type: DataTypes.STRING 
    }, 
    createAt:{
        allowNull: false,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}