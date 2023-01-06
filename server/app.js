require("dotenv").config();
const express = require('express')
const app = express()
const appServices = require('./app.services')
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

appServices.connectToDb()
// appServices.setUpMiddleware(app);
appServices.apiSetUp(app);


module.exports = app