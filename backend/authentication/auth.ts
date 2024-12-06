import { Request,Response,NextFunction } from "express";
import User from "../models/User";
import { compare } from "bcrypt";
import { sign,verify } from "jsonwebtoken";

//faz verivicação de login e gera token

export async function gera_token(req:Request,res:Response) {
    
    const {Email,Password} = req.body
    const data = await User.findOne({where:{Email:Email}})

    if(data != null && data != undefined){

        compare(Password,data.dataValues.Password,(err,obj)=>{

            if(obj){
                
                //token para vendedores

                if(data.dataValues.Função == "vendedor"){

                    sign({Função:data.dataValues.Função,Email:Email},process.env.SECRET_VENDEDOR,{expiresIn:"5h"},(err,token)=>{
                        if(token){
                            res.status(200).json({"token":token})
                        }else{
                            res.status(500).json({"erro":"falha interna"})
                        }
                    })
                }else{

                // token usuários

                    sign({Função:data.dataValues.Função,Email:Email},process.env.SECRET_USER,{expiresIn:"5h"},(err,token)=>{
                        if(token){
                            res.status(200).json({"token":token})
                        }else{
                            res.status(500).json({"erro":"falha interna"})
                        }
                    })
                }
            }else{
                res.status(400).json({"erro":"Senha ou email inválidos"})
            }
        })
    }else{

        res.status(400).json({"erro":"não encontramos nenhum usuário com essas credenciais"})

    }

}

// middleware que  confere token de usuários

export async function auth_token_user(req:Request,res:Response,next:NextFunction) {
    var token = req.headers.authorization

    if(token != undefined && token != null){
        const bearer = token.split(" ")
        token = bearer[1]
        verify(token,process.env.SECRET_USER,async(err,data)=>{
            if(data){
                next()
            }else{
                res.status(400).send("token inválido")
            }
        })
    }else{
        res.status(400).send("token não informado")
    }
}

//middleware que confere token de vendedores

export async function auth_token_vendedor(req:Request,res:Response,next:NextFunction) {
    var token = req.headers.authorization

    if(token != undefined && token != null){
        const bearer = token.split(" ")
        token = bearer[1]
        verify(token,process.env.SECRET_VENDEDOR,async(err,data)=>{
            if(data){
                
                next()
            }else{
                res.status(400).send("token inválido")
            }
        })
    }else{
        res.status(400).send("token não informado")
    }
}