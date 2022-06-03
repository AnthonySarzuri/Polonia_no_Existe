const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class playersService {
    constructor() {
   
    }
    /*
    Esta parte se carga directamente de la base de datos ya creada

    generate() {
        const limit = 50
        for (let index = 0; index < limit; index++) {
            this.players.push({
                id_jugador: faker.datatype.uuid(),
                nombre_jugador: faker.name.firstName(),
                apellidos_jugador: faker.name.lastName(),
                fechaNac_jugador: parseInt(faker.random.number(30)),
                imagen_jugador: faker.image.avatar(),
                posicion_jugador: faker.company.lastName(),
                altura_jugador: faker.company.
            })

        }
    }
    */
    async create(data) {
        const newPlayer = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.players.push(newPlayer)
        return newPlayer
    }
    /*
    Consoltas sin faker
     */
    async find() {
        const query = "SELECT * FROM Tjugadores"
        const players= await pool.query(query) 
        return players.rows
    }

    async find_specific_player(id) {
        const player = this.players.find(item => item.id === id)
        const query = "SELECT * FROM Tjugadores where id_jugador="+'@player'
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

module.exports = playersService


