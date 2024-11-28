import App from "../src";
import { get_Restaurantes,get_Restaurantes_Nome,create_Restaurantes,update_Restaurantes,delete_Restaurantes } from "../services/services_Restaurantes";


//rotas get

App.get("/Restaurantes",(req,res)=>{

    get_Restaurantes(req,res)
})

App.get("/Restaurantes/:Nome",(req,res)=>{

    get_Restaurantes_Nome(req,res)
    
})

//rota post

App.post("/Restaurantes",(req,res)=>{
    
    create_Restaurantes(req,res)

})

//rota put

App.put("/Restaurantes/:Nome",(req,res)=>{

    update_Restaurantes(req,res)
    
})

//rota delete

App.delete("/Restaurantes/:Nome",(req,res)=>{
    
    delete_Restaurantes(req,res)

})