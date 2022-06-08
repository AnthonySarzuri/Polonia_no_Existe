const faker = require('faker')
const boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')
const { ar } = require('faker/lib/locales')

class scoresService {
    constructor() {
   
    }
   
    async create(data) {
        const newScore = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.canchas.push(newScore)
        return newScore
    }
    /*
    Consultas sin faker
     */
    async find() {
        const query = "SELECT * FROM TScore"
        const score= await pool.query(query) 
        return score.rows
    }

    
    async update(id, changes) {
        const index = this.scores.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('score no encontrado')
        }
        const scores = this.scores[index]

        this.scores[index] = {
            ...scores,
            ...changes
        }
        return this.scores[index]
    }
    async delete(id) {
        const index = this.scores.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('score no encontrado')
        }
        this.cambios.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = scoresService


