const express = require('express');
const EmployeeController = require('./controller/EmployeeController');
//const ProductController = require('./controller/ProductController');

const routes = express.Router();

routes.get('/', function(req, res){
    res.json({message: "Wellcome API NODE JS"})
})

//EMPLOYEE
routes.get('/employee', EmployeeController.index)
routes.get('/employee/:_id', EmployeeController.detail)
routes.post('/employee', EmployeeController.store)
routes.delete('/employee/:_id', EmployeeController.delete)
routes.put('/employee', EmployeeController.update)

////PRODUCT
//routes.get('/product', ProductController.index)
//routes.get('/product/:_id', ProductController.detail)
//routes.post('/product', ProductController.store)
//.delete('/product/:_id', ProductController.delete)
//routes.put('/product', ProductController.update)


module.exports = routes;