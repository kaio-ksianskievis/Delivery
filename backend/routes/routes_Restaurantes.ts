import { get_Restaurantes,get_Restaurantes_Nome,create_Restaurantes,update_Restaurantes,delete_Restaurantes } from "../services/services_Restaurantes";
import { App} from "../src/index"; 
import { Request,Response,Router } from "express";

const router = Router()

//rotas get
router.get("/",(req:Request,res:Response)=>{
    res.send("oi")
})

router.get("/Restaurantes",async (req:Request,res:Response)=>{

    get_Restaurantes(req,res)
})

router.get("/Restaurantes/:Nome",(req:Request,res:Response)=>{

    get_Restaurantes_Nome(req,res)
    
})

//rota post

router.post("/Restaurantes",(req:Request,res:Response)=>{
    
    create_Restaurantes(req,res)

})

//rota put

router.put("/Restaurantes/:Nome",(req,res)=>{

    update_Restaurantes(req,res)
    
})

//rota delete

router.delete("/Restaurantes/:Nome",(req,res)=>{
    
    delete_Restaurantes(req,res)

})

export default router