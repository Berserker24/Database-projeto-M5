//Import Express
const express = require('express');

//Import DB
const db = require('../src/infra/sqlite-db')

//Config
const app = express()
const port = process.env.port || 3050;

//Middlewares
app.use(express.json())


//Rota
const RotaCardapio = require('../src/Controller/CardapioController')
const RotaComentarios = require('../src/Controller/Avalicao-controller')

//Uso da rota
RotaCardapio(app,db);
RotaComentarios(app,db)

//Listen
app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+ port)    
})