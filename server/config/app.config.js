
const serverConfig ={
    port:8080,
    hostname:'localhost'
}

//Database congiguration
const dbConfig = {
    mongoUrl: process.env.DATABASE_URL
}

const authConfig ={
    jwtSecret:'mohdsharif'
}

module.exports = {
    serverConfig,
    dbConfig,
    authConfig
}