import express from 'express'
import * as dotenv from 'dotenv';
import Restaurantes from '../models/Restaurantes';
import Avaliações from '../models/Avaliações';
import Produtos from '../models/Produtos';

const App = express()
dotenv.config()

// verificando conexão com banco de dados

try{

    Restaurantes.sync({force:false})
    Avaliações.sync({force:false})    
    Produtos.sync({force:false})


}catch(err){

    console.log(`Falha ao criar as tabelas: ${err}`)
}


//iniciando servidor

App.listen(process.env.PORT,()=>{
    console.log("rodando na porta "+process.env.PORT)
})

export default App