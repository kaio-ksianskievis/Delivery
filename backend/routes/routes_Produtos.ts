import { get_Produtos_Nome_Restaurante,get_Produtos_Nome,create_Produtos,delete_Produtos,update_Produtos } from "../services/services_Produtos";
import { router } from "../src";

//rotas get

router.get("/Restaurantes/:Nome_Restaurante/Produtos",(req,res)=>{

    get_Produtos_Nome_Restaurante(req,res)
})

router.get("/Restaurantes/:Nome",(req,res)=>{

    get_Produtos_Nome(req,res)
    
})

//rota post

router.post("/Restaurantes/:Nome_Restaurante/Produtos",(req,res)=>{
    
    create_Produtos(req,res)

})

//rota put

router.put("/Restaurantes/:Nome_Restaurante/Produtos/:id",(req,res)=>{

    update_Produtos(req,res)
    
})

//rota delete

router.delete("/Restaurantes/:Nome_Restaurante/Produtos/:id",(req,res)=>{
    
    delete_Produtos(req,res)

})