import { Request,Response,Router } from "express";
import { gera_token } from "../authentication/auth";
const router = Router()

router.post("/auth",(req:Request,res:Response)=>{
    gera_token(req,res)
})

export default router