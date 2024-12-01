import { Request,Response,Router } from "express";
import { gera_toke } from "../authentication/auth";
const router = Router()

router.post("/auth",(req:Request,res:Response)=>{
    gera_toke(req,res)
})

export default router