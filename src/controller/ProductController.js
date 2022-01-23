const Product = require('../model/ProductModel');

module.exports = {
    async index(req,res) {
        const products = await Product.find();
        res.json(products)
    },

    async detail(req, res) {
        const {_id} = req.params
        const products = await Product.findOne({_id});
        res.json(products)
    },

    async store(req, res) {
        const { name, category, price, _id} = req.body;

        let dataCreate = {}

        dataCreate = {
            name, category, price, _id
        }
        const products = await Product.create(dataCreate);
        res.json(products)
    },

    async delete(req, res) {
        const {_id} = req.params
        const products = await Product.findByIdAndDelete({_id});
        res.json(products)
    },

    async update(req, res) {
        const { name, category, price, _id} = req.body;

        let dataCreate = {}

        dataCreate = {
            name, category, price, _id
        }
        const products = await Product.findByIdAndUpdate({_id}, dataCreate,{new: true});
        res.json(products)
    },

}