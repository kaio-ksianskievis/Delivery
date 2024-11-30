import { get_Avaliação_Nome,create_Avaliação} from "../services/services_Avaliações";
import { router } from "../src";

//rotas get

router.get("/Restaurantes/:Nome/Avaliações",(req,res)=>{

    get_Avaliação_Nome(req,res)
})


//rota post

router.post("/Restaurantes/:Nome/Avaliações",(req,res)=>{
    
    create_Avaliação(req,res)

})
