const app = require('../app')
const {serverConfig} = require('../config')



//Starting server on given port
app.listen(serverConfig.port, serverConfig.hostname, ()=>{
    console.log(`App is running on http://${serverConfig.hostname}:${serverConfig.port}`);
})