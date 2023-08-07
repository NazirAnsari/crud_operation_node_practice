const controller = require('../controller/ctrl')
var express = require("express");
const routes = express.Router();

var bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.post('/addcontact', controller.addcontact)
routes.get('/product', controller.getallproduct)
routes.get('/getOneProduct/:id', controller.getoneproduct);
routes.put('/updateData/:id', controller.updatedata);
routes.delete('/deleteUser/:id', controller.deletedata);

module.exports = routes