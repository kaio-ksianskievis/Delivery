import User from "../models/User";
import { Request, Response } from "express";
import { hash } from "bcrypt";

//cria usuário

async function create_user(req:Request,res:Response) {
    try{

        const {Email,Password,Função} = req.body
        const busca = await User.findOne({where:{Email:Email}})

        //não permite emails repetidos

        if(busca != null && busca != undefined){
            res.status(404).json({"Erro":"Já existe um cadastro com este email"})
        }else{
            const PasswordCriptografada = await hash(Password,8)
            await User.create({"Email":Email,"Password":PasswordCriptografada,"Função":Função})
        }
    
    }catch{
    
        res.status(500).json({"Erro":"Não foi possivel criar o usuário"})
    
    }
    
}

export default create_user