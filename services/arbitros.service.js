const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')
const { ar } = require('faker/lib/locales')

class arbitrosService {
    constructor() {
   
    }
   
    async create(data) {
        const newArbitro = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newArbitro)
        return newArbitro
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TArbitro"
        const arbitros= await pool.query(query) 
        return arbitros.rows
    }

    
    async update(id, changes) {
        const index = this.arbitros.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('arbitro no encontrado')
        }
        const arbitros = this.arbitros[index]

        this.arbitros[index] = {
            ...arbitros,
            ...changes
        }
        return this.arbitros[index]
    }
    async delete(id) {
        const index = this.arbitros.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('arbitro no encontrado')
        }
        this.cambios.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = arbitrosService


