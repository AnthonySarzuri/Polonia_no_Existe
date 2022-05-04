const faker = require('faker')
const boom = require('@hapi/boom')

class fieldsService {
    constructor() {
        this.fields = []
        this.generate()
    }
    generate() {
        const limit = 50
        for (let index = 0; index < limit; index++) {
            this.fields.push({
                id: faker.datatype.uuid(),
                name: faker.company.companyName(),
                owner: faker.name.firstName(),
                direction: faker.address.cityName(),
                phone: faker.phone.phoneNumber(),
                image: faker.image.sports()
            })
        }
    }
    async create(data) {
        const newField = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.fields.push(newField)
        return newField
    }
    async find() {
        return this.fields
    }
    async findone(id) {
        const field = this.fields.find(item => item.id === id)
        if (!field) {
            throw boom.notFound('Field not found')
            
        }
        return field
    }
    async update(id, changes) {
        const index = this.fields.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('field not found')
        }
        const field = this.fields[index]

        this.fields[index] = {
            ...this.fields,
            ...changes
        }
        return this.fields[index]
    }
    async delete(id) {
        const index = this.fields.findIndex(item => item.id === id)
        if (index === -1) {
            throw boom.notFound('Field not found')
        }
        this.fields.splice(index, 1)
        return {
            messge: 'deleted',
            id
        }
    }
}

module.exports = fieldsService
