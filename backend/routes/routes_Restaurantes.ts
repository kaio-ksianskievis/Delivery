import { get_Restaurantes,get_Restaurantes_Id,get_Restaurantes_Nome,create_Restaurantes,update_Restaurantes,delete_Restaurantes } from "../services/services_Restaurantes";
import { Request,Response,Router } from "express";
import { busca_login } from "../authentication/auth";
const router = Router()

//rotas get
router.get("/",(req:Request,res:Response)=>{
    res.send("oi")
})

router.get("/Restaurantes",busca_login ,(req:Request,res:Response)=>{
    const {Função} = req.body
    
    if(Função == "vendedor"){

        get_Restaurantes_Id(req,res)
    }else{
        get_Restaurantes(req,res)
    }
})

router.get("/Restaurantes/:Nome",(req:Request,res:Response)=>{

    get_Restaurantes_Nome(req,res)
    
})

//rota post

router.post("/Restaurantes",(req:Request,res:Response)=>{
    
    create_Restaurantes(req,res)

})

//rota put

router.put("/Restaurantes/:Nome",(req:Request,res:Response)=>{

    update_Restaurantes(req,res)
    
})

//rota delete

router.delete("/Restaurantes/:Nome",(req:Request,res:Response)=>{
    
    delete_Restaurantes(req,res)

})

export default router