import express from "express"
import CategoriaController from "./Controllers/CategoriaController.js"
import DoceController from "./Controllers/DoceController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.post("/categorias",CategoriaController.create)
server.get("/categorias",CategoriaController.read)
server.put("/categorias/:id_categoria",CategoriaController.update)
server.delete("/categorias/:id_categoria",CategoriaController.delete)

server.post("/doces",DoceController.create)
server.get("/doces",DoceController.read)
server.put("/doces/:id_doce",DoceController.update)
server.delete("/doces/:id_doce",DoceController.delete)

server.listen(5000)