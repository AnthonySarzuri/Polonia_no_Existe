const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class canchasService {
    constructor() {
   
    }
   
    async create(data) {
        const newCancha = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newCancha)
        return newCancha
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TCanchas"
        const canchas= await pool.query(query) 
        return canchas.rows
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
            throw boom.notFound('Jugador no encontrado')
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

module.exports = canchasService


