const { Console } = require("console");
const http = require("http");
const msg = require("./functions");
const server=http.createServer((request,response)=>{
        console.log("servidor acessado")
        const headers=request.headers;
        const method=request.method;
        const url=request.url

        console.log("Headers");
        console.log(headers);
        console.log("Method: "+ method);
        console.log("URL: "+url);

        if(request.url=="/teste"){
            response.setHeader("Content-type", "text/html");
            response.end("<h1>Olá Mundo!</h1><br><h1>Hello World!</h1>")
        };})

console.log(msg());

const _ = require('lodash');
const array = [1,2,3,4,5,6,7,8,9];
console.log("imprimindo de 3 em 3");

_.chunk(array ,3).forEach((item)=>{
    console.log('=========');
    item.forEach((i)=>{
        console.log(i);
    })
});
server.listen(3000);