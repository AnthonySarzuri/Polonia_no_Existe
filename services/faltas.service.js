const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')

class faltasService {
    constructor() {
   
    }
   
    async create(data) {
        const newFalta = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newFalta)
        return newFalta
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TFaltas"
        const faltas= await pool.query(query) 
        return faltas.rows
    }

    
    async update(id, changes) {
        const index = this.players.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('falta no encontrada')
        }
        const equipo = this.equipos[index]

        this.faltas[index] = {
            ...faltas,
            ...changes
        }
        return this.faltas[index]
    }
    async delete(id) {
        const index = this.faltas.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('falta no encontrada')
        }
        this.equipos.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = faltasService


