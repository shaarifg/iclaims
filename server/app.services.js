const db = require('./db/connection')
const api = require('./api')

//Connecting To Database
const connectToDb = () =>{
    db.createDbConnection()
    dbconnection = db.getDbConnection()
}


//Creating /api Route
const apiSetUp = (app) => {
    app.use('/api', api);
}

module.exports = {
    connectToDb,
    apiSetUp
}