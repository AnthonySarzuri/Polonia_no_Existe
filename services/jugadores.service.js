const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class jugadoresService {
    constructor() {
   
    }
   
    async create(data) {
        const newPlayer = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.players.push(newPlayer)
        return newPlayer
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TJugadores"
        const players= await pool.query(query) 
        return players.rows
    }

    async find_specific_player(id) {
        const player = this.players.find(item => item.id === id)
        const query = "SELECT * FROM TJugadores where id_jugador="+'@player'
        const players= await pool.query(query)
        return players.rows
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
        const player = this.players[index]

        this.players[index] = {
            ...player,
            ...changes
        }
        return this.players[index]
    }
    async delete(id) {
        const index = this.players.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Student not found')
        }
        this.players.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = jugadoresService


