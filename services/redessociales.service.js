const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class redessocialesService {
    constructor() {
   
    }
   
    async create(data) {
        const newRedSocial = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.equipos.push(newRedSocial)
        return newRedSocial
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TRedesSociales"
        const redesSociales= await pool.query(query) 
        return redesSociales.rows
    }

    

/*
    async insert_player() {
        /**
        Para consultar datos
         
        const query = 'INSERT INTO TJugadores()* FROM Tjugadores'
        const players= await pool.query(query) 
        return players.rows
    }
/*/

     /*
    Hasta aqui
     */
    /*
    async findone(id) {
        const player = this.players.find(item => item.id === id)
        if (!player) {
            throw boom.notFound('Jugador no encontrado')
            
        }
        return player
    }
    */
    async update(id, changes) {
        const index = this.players.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('RedSocial no encontrado')
        }
        const equipo = this.equipos[index]

        this.equipos[index] = {
            ...equipo,
            ...changes
        }
        return this.players[index]
    }
    async delete(id) {
        const index = this.equipos.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Equipo not found')
        }
        this.equipos.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = redessocialesService


