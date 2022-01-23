const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    office: String,
    birthday: Date,
    situation: {
        type: String,
        enum:['activate','deactivate'],
        default:'activate'
    },
    createdAt: Date,
    updatedAt: Date
})

const employee = mongoose.model('EmployeeModel',DataSchema)
module.exports = employee