//Importing Mongoose Module
const mongoose = require('mongoose')
const {dbConfig} = require('../config')
console.log(dbConfig.mongoUrl);


/*[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)*/
mongoose.set('strictQuery', true)


//Function to database connection
const createDbConnection = ()=>{
    mongoose.connect(
        dbConfig.mongoUrl, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(()=>{
        console.log('App is connected to database');
    })
    .catch (()=>{
        console.log('App is NOT Connected To database');
    })
}

const getDbConnection =()=>{
    return mongoose.connection
}

module.exports = {
    createDbConnection,
    getDbConnection
}