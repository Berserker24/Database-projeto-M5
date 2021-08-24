//Import Express
const express = require('express');

//Import DB
const db = require('../src/infra/sqlite-db')

//Config
const app = express()
const port = 3050;

//Middlewares
app.use(express.json())


//Rota
const RotaCardapio = require('../src/Controller/CardapioController')

//Uso da rota
RotaCardapio(app,db)

//Listen
app.listen(port,()=>{
    console.log('Servidor rodando na porta: '+ port)    
})