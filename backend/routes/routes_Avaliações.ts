import { get_Avaliação_Nome, create_Avaliação } from "../services/services_Avaliações";
import { Router,Request,Response } from "express";

const router = Router()

//rotas get

router.get("/Restaurantes/:Nome/Avaliacao", (req:Request, res:Response) => {

    get_Avaliação_Nome(req, res)
})


//rota post

router.post("/Restaurantes/:Nome/Avaliacao", (req:Request, res:Response) => {

    create_Avaliação(req, res)

})

export default router
