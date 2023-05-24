const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");
http
    .createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url}=req;
    if(url.includes("/rickandmorty/character")){

        const id =Number(url.split("/").pop())
        const character = characters.find((char)=>{//repasar este request mas tranquilamente
            return char.id ===id
        })
        res.writeHead(200,{"Content-type": "application/json"})//status 200 que todo esta bien
    }
 })
 .listen(PORT, "localhost")

