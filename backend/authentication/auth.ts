import { Request,Response,NextFunction } from "express";
import User from "../models/User";
import { compare } from "bcrypt";
import { sign,verify } from "jsonwebtoken";

//criando midware para verificação de login

async function busca_login(req:Request,res:Response,next:NextFunction) {
    
    const {Email,Password} = req.body

    
    const data = await User.findOne({where:{Email:Email}})

    if(data != null && data != undefined){

        compare(Password,data.dataValues.Password,(err,obj)=>{

            if(obj){
                req.body = data.dataValues
                next()
            }else{
                res.status(400).redirect("/login")
            }
        })
    }else{

        res.status(400).redirect("/login")

    }
}

//gera token

async function gera_toke(req:Request,res:Response) {
    
    const {Email,Password,Função} = req.body
    const data = await User.findOne({where:{Email:Email}})
    if(data != null && data != undefined){

        compare(Password,data.dataValues.Password,(err,obj)=>{

            if(obj){
                sign({id:data.dataValues.id,Email:Email},process.env.SECRET,{expiresIn:"5h"},(err,token)=>{
                    if(token){
                        res.status(200).json({"token":token})
                    }else{
                        res.status(500).json({"erro":"falha interna"})
                    }
                })
            }else{
                res.status(400).redirect("/login")
            }
        })
    }else{

        res.status(400).redirect("/login")

    }

}

// middleware que  confere token

async function auth_token(req:Request,res:Response,next:NextFunction) {
    var token = req.headers.authorization
    if(token != undefined && token != null){
        const bearer = token.split(" ")
        token = bearer[1]
        verify(token,process.env.SECRET,(err,data)=>{
            if(data){
                next()
            }else{
                res.status(400).send("token inválido")
            }
        })
    }else{
        
        res.status(400).send("token inválido")
    }
}

export {gera_toke,busca_login,auth_token}