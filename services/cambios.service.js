const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class cambiosService {
    constructor() {
   
    }
   
    async create(data) {
        const newCambio = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newCambio)
        return newCambio
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TCambio"
        const cambios= await pool.query(query) 
        return cambios.rows
    }

    
    async update(id, changes) {
        const index = this.players.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('cambios en el partido no encontrado')
        }
        const cambios = this.cambios[index]

        this.cambios[index] = {
            ...cambios,
            ...changes
        }
        return this.cambios[index]
    }
    async delete(id) {
        const index = this.cambios.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('cambio no encontrado')
        }
        this.cambios.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = cambiosService


