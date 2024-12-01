import { get_Produtos_Nome_Restaurante,get_Produtos_Nome,create_Produtos,delete_Produtos,update_Produtos } from "../services/services_Produtos";
import { Router,Request,Response } from "express";

const router = Router()

//rotas get

router.get("/Restaurantes/:Nome_Restaurante/Produtos",(req:Request,res:Response)=>{

    get_Produtos_Nome_Restaurante(req,res)
})

router.get("/Restaurantes/:Nome",(req:Request,res:Response)=>{

    get_Produtos_Nome(req,res)
    
})

//rota post

router.post("/Restaurantes/:Nome_Restaurante/Produtos",(req:Request,res:Response)=>{
    
    create_Produtos(req,res)

})

//rota put

router.put("/Restaurantes/:Nome_Restaurante/Produtos/:id",(req:Request,res:Response)=>{

    update_Produtos(req,res)
    
})

//rota delete

router.delete("/Restaurantes/:Nome_Restaurante/Produtos/:id",(req:Request,res:Response)=>{
    
    delete_Produtos(req,res)

})

export default router