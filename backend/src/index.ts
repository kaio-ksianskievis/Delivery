import express from 'express'
import * as dotenv from 'dotenv';
import Restaurantes from '../models/Restaurantes';
import Avaliações from '../models/Avaliações';
import Produtos from '../models/Produtos';
import bodyParser from 'body-parser';
import User from '../models/User';
import router from '../routes/Routes';


const App = express()

App.use(bodyParser.urlencoded({extended: false}))
App.use(bodyParser.json())
App.use(router)

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