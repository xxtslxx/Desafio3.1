const Employee = require('../model/EmployeeModel');

module.exports = {
    async index(req,res) {
        const employees = await Employee.find();
        res.json(employees)
    },

    async detail(req, res) {
        const {_id} = req.params
        const employees = await Employee.findOne({_id});
        res.json(employees)
    },

    async store(req, res) {
        const { name, cpf, office, birthday, situation, createdAt, updatedAt} = req.body;

        let dataCreate = {}

        dataCreate = {
            name, cpf, office, birthday, situation, createdAt, updatedAt
        }
        const employees = await Employee.create(dataCreate);
        res.json(employees)
    },

    async delete(req, res) {
        const {_id} = req.params
        const employees = await Employee.findByIdAndDelete({_id});
        res.json(employees)
    },

    async update(req, res) {
        const { _id, name, cpf, office, birthday, situation, createdAt, updatedAt } = req.body;

        let dataCreate = {}

        dataCreate = {
            name, cpf, office, birthday, situation, createdAt, updatedAt
        }
        const employees = await Employee.findByIdAndUpdate({_id}, dataCreate,{new: true});
        res.json(employees)
    },

}