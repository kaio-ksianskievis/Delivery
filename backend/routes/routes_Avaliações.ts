import { get_Avaliação_Nome,create_Avaliação,delete_Avaliação } from "../services/services_Avaliações";
import { router } from "../src";

//rotas get

router.get("/Restaurante/:nome/Avaliações",(req,res)=>{

    get_Avaliação_Nome(req,res)
})


//rota post

router.post("/Avaliação",(req,res)=>{
    
    create_Avaliação(req,res)

})

//rota delete

router.delete("/Avaliação/:id",(req,res)=>{
    
    delete_Avaliação(req,res)

})