//import json server
const jsonServer = require('json-server')

//create a json server app
const server = jsonServer.create() //this return express server

//set up path for db.json 
const router = jsonServer.router("db.json")//this will  create a router by using express
//router() = this method from express server

//to work it proper a middleware is needed
const middleware = jsonServer.defaults() //this will return a middleware used by JSON server

//set up port 
const  port = process.env.PORT || 4000

//use router , middleware in server 
server.use(middleware)
server.use(router)

//app lister
server.listen(port,()=>{
    console.log(`json server started at ${port}`);
})

//setup starting command in package.json file - removing text  key from script object,instead of it place 
//"start":"node index.js"