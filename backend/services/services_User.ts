import User from "../models/User";
import { Request, Response } from "express";

async function create_user(req:Request,res:Response) {
    try{

        const obj = req.body
        await User.create(obj)
    }catch{
    
        res.status(500).json({"Erro":"Não foi possivel criar o usuário"})
    
    }
    
}

export default create_user