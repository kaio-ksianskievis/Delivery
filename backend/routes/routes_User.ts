import create_user from "../services/services_User";
import { Router,Request,Response } from "express";

const router = Router()

//rota de Sign up

router.post("/signup",(req:Request,res:Response)=>{

    create_user(req,res)

})


//rota de login

router.post("/login",(req:Request,res:Response)=>{

    res.send("login")
})

export default router