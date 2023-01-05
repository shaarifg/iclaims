
const serverConfig ={
    port:3000,
    hostname:'localhost'
}

//Database congiguration
const dbConfig = {
    mongoUrl: "mongodb+srv://sharifg:MyData@890@first.sfh7pc2.mongodb.net/claims?retryWrites=true&w=majority"
}

const authConfig ={
    jwtSecret:'mohdsharif'
}

module.exports = {
    serverConfig,
    dbConfig,
    authConfig
}