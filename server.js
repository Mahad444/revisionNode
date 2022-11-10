const http = require('http')
const app = require('./app')

const server = http.createServer(app);


 server.listen(6500,()=>{
    console.log("now listening to http://localhost:6500")
 })
// const express = require('express')

// const app = express()


// app.listen(6500,()=>{
//     console.log ('now listening to http://localhost:6500')
// })

