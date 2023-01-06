
const serverConfig ={
    port:8080,
    hostname:'localhost'
}

//Database congiguration
const dbConfig = {
    mongoUrl: "mongodb+srv://sharifg:mydata@first.sfh7pc2.mongodb.net/claims?retryWrites=true&w=majority"
}

const authConfig ={
    jwtSecret:'mohdsharif'
}

module.exports = {
    serverConfig,
    dbConfig,
    authConfig
}