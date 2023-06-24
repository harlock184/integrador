const server = require("./app")
const PORT = 3001
const { conn } = require("./DB_connection");

// describe("Test de RUTAS",()=>{
//    it("Hola", ()=>{
//       console.log("xmen")
//    })
// })





server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });
