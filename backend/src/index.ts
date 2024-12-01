import express from 'express'
import * as dotenv from 'dotenv';
import Restaurantes from '../models/Restaurantes';
import Avaliações from '../models/Avaliações';
import Produtos from '../models/Produtos';
import bodyParser from 'body-parser';
import User from '../models/User';
import RouterRestaurantes from "../routes/routes_Restaurantes"
import RouterAvaliações from "../routes/routes_Avaliações"
import RouterProdutos from "../routes/routes_Produtos"
import RouterUser from "../routes/routes_User"

const App = express()

App.use(bodyParser.urlencoded({extended: false}))
App.use(bodyParser.json())
App.use(RouterRestaurantes)
App.use(RouterAvaliações)
App.use(RouterProdutos)
App.use(RouterUser)

dotenv.config()

// verificando conexão com banco de dados

try{

    Restaurantes.sync({force:false})
    Avaliações.sync({force:false})    
    Produtos.sync({force:false})
    User.sync({force: false})

 
}catch(err){

    console.log(`Falha ao criar as tabelas: ${err}`)
}


//iniciando servidor

App.listen(process.env.PORT,()=>{
    console.log("rodando na porta "+process.env.PORT)
})

export  {App}