import { get_Avaliação, get_Avaliação_id,create_Avaliação,delete_Avaliação } from "../services/services_Avaliações";
import { router } from "../src";

//rotas get

router.get("/Avaliação",(req,res)=>{

    get_Avaliação(req,res)
})

router.get("/Avaliação/:id",(req,res)=>{

    get_Avaliação_id(req,res)
    
})

//rota post

router.post("/Avaliação",(req,res)=>{
    
    create_Avaliação(req,res)

})

//rota delete

router.delete("/Avaliação/:id",(req,res)=>{
    
    delete_Avaliação(req,res)

})