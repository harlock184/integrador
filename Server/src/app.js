const express = require ("express")
const server = express()
const router = require("./routes/index")
const PORT = 3001;
const cors = require("cors")

server.use(cors())



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//preguntar a CHATGPT que me explique paso por paso todo lo que tenga que ver con server.use
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use(express.json())
 server.use("/rickandmorty",router)

 module.exports = server;