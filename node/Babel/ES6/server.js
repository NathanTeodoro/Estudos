const http = require("http")
const server = http.createServer((req,res)=>{
    console.log('acess server')
})
import{mod1,mod2}from"./modulos"
server.listen(3000);