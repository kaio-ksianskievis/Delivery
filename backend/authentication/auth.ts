import { Request,Response,NextFunction } from "express";
import User from "../models/User";
import { compare } from "bcrypt";

//criando midware para verificação de login

export async function busca_login(req:Request,res:Response,next:NextFunction) {
    
    const {Email,Password,Função} = req.body
    const data = await User.findOne({where:{Email:Email}})

    if(data != null && data != undefined){

        compare(Password,data.dataValues.Password,(err,obj)=>{

            if(obj){
                next()
            }else{
                res.status(400).redirect("/login")
            }
        })
    }else{

        res.status(400).redirect("/login")

    }
}