const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')
const { ar } = require('faker/lib/locales')

class partidosService {
    constructor() {
   
    }
   
    async create(data) {
        const newPartido = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newPartido)
        return newPartido
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TPartidos"
        const partidos= await pool.query(query) 
        return partidos.rows
    }

    
    async update(id, changes) {
        const index = this.partidos.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('partido no encontrado')
        }
        const partidos = this.partidos[index]

        this.partidos[index] = {
            ...partidos,
            ...changes
        }
        return this.partidos[index]
    }
    async delete(id) {
        const index = this.partidos.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('partido no encontrado')
        }
        this.cambios.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = partidosService


