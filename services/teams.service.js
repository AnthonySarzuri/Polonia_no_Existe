const faker = require('faker')
const boom = require('@hapi/boom')

class teamsService {
    constructor() {
        this.teams = []
        this.generate()
    }
    generate() {
        const limit = 50
        for (let index = 0; index < limit; index++) {
            this.teams.push({
                id: faker.datatype.uuid(),
                name: faker.name.newTeam(),
                couchname: faker.name.firstName(),
                phone: faker.phone.phoneNumber(),
                image: faker.image.sports()
            })
        }
    }
    async create(data) {
        const newTeam = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.teams.push(newTeam)
        return newTeam
    }
    async find() {
        return this.teams
    }
    async findone(id) {
        const team = this.teams.find(item => item.id === id)
        // const student= this.getall()
        if (!team) {
            throw boom.notFound('Team not found')
            
        }
        return team
    }
    async update(id, changes) {
        const index = this.teams.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Team not found')
        }
        const team = this.teams[index]

        this.teams[index] = {
            ...teams,
            ...changes
        }
        return this.teams[index]
    }
    async delete(id) {
        const index = this.teams.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Team not found')
        }
        this.teams.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = teamsService


