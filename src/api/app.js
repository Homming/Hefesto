const bodyParser = require('body-parser');
const express = require('express');
const userController = require('../controllers/userController');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());

app.post('/user', userController.createUser);



module.exports = server;