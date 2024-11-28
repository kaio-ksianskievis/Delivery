import express from 'express'
import * as dotenv from 'dotenv';

const App = express()
dotenv.config()

//iniciando servidor

App.listen(process.env.PORT,()=>{
    console.log("rodando na porta "+process.env.PORT)
})

export default App