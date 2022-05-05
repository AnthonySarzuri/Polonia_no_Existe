const faker = require('faker')
const boom = require('@hapi/boom')

class playersService {
    constructor() {
        this.players = []
        this.generate()
    }
    generate() {
        const limit = 50
        for (let index = 0; index < limit; index++) {
            this.players.push({
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                lastname: faker.name.lastname(),
                age: parseInt(faker.random.number(99)),
                phone: faker.phone.phoneNumber(),
                image: faker.image.avatar()
            })
        }
    }
    async create(data) {
        const newPlayer = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.players.push(newPlayer)
        return newPlayer
    }
    async find() {
        return this.players
    }
    async findone(id) {
        const player = this.players.find(item => item.id === id)
        if (!player) {
            throw boom.notFound('Jugador no encontrado')
            
        }
        return player
    }
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


