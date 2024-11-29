import { get_Restaurantes,get_Restaurantes_Nome,create_Restaurantes,update_Restaurantes,delete_Restaurantes } from "../services/services_Restaurantes";
import { router } from "../src/index"; 

//rotas get

router.get("/Restaurantes",(req,res)=>{

    get_Restaurantes(req,res)
})

router.get("/Restaurantes/:Nome",(req,res)=>{

    get_Restaurantes_Nome(req,res)
    
})

//rota post

router.post("/Restaurantes",(req,res)=>{
    
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