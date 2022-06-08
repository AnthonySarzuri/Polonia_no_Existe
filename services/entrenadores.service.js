const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class entrenadoresService {
    constructor() {
   
    }
   
    async create(data) {
        const newEntrenador = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newEntrenador)
        return newEntrenador
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TEntrenador"
        const entrenadores= await pool.query(query) 
        return entrenadores.rows
    }

    
    async update(id, changes) {
        const index = this.players.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('entrenador no encontrado')
        }
        const entrenadores = this.entrenadores[index]

        this.entrenadores[index] = {
            ...entrenadores,
            ...changes
        }
        return this.entrenadores[index]
    }
    async delete(id) {
        const index = this.entrenadores.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('entrenador no encontrado')
        }
        this.entrenadores.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = entrenadoresService


