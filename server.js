const http = require('http')
const app = require('./app')
const server = http.createServer(app)

app.set('port', process.env.PORT || process.env.PORT)
server.listen(process.env.PORT || process.env.PORT, (err)=>{
    if(!err){
        console.log('Listen to port:', process.env.PORT);
    }
    else {
        console.log('Dont listen to any port');
    }
})
