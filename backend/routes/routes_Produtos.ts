import { get_Produtos,get_Produtos_Nome,create_Produtos,delete_Produtos,update_Produtos } from "../services/services_Produtos";
import { router } from "../src";

//rotas get

router.get("/Produtos",(req,res)=>{

    get_Produtos(req,res)
})

router.get("/Produtos/:Nome",(req,res)=>{

    get_Produtos_Nome(req,res)
    
})

//rota post

router.post("/Produtos",(req,res)=>{
    
    create_Produtos(req,res)

})

//rota put

router.put("/Produtos/:id",(req,res)=>{

    update_Produtos(req,res)
    
})

//rota delete

router.delete("/Produtos/:id",(req,res)=>{
    
    delete_Produtos(req,res)

})