import App from "../src";
import { get_Avaliação, get_Avaliação_id,create_Avaliação,delete_Avaliação } from "../services/services_Avaliações";


//rotas get

App.get("/Avaliação",(req,res)=>{

    get_Avaliação(req,res)
})

App.get("/Avaliação/:id",(req,res)=>{

    get_Avaliação_id(req,res)
    
})

//rota post

App.post("/Avaliação",(req,res)=>{
    
    create_Avaliação(req,res)

})

//rota delete

App.delete("/Avaliação/:id",(req,res)=>{
    
    delete_Avaliação(req,res)

})