const {Sequelize}= require ('sequelize');

const {config} = require ('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbpassword);
const URI= `postgres://${USER}:{PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize= new Sequelize()