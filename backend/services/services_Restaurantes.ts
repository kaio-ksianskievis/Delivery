import { Request, Response } from "express";
import Restaurantes from "../models/Restaurantes";


//busca por todos os restaurantes

export async function get_Restaurantes(req:Request,res:Response){
    try{
        const obj = await Restaurantes.findAll({raw: true})
        res.status(200).json(obj)
    }catch{
        res.status(500).json({"Erro":"Falha ao Mostrar Restaurantes"})
        
    }
}

//busca por um restaurante com o parametro nome

export async function get_Restaurantes_Nome(req:Request,res:Response) {
    try{
        const Nome = req.params.Nome
        const obj = await Restaurantes.findOne({where:{Nome:Nome}})
        res.status(200).json(obj)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel encontrar esse Restaurante"})
    }
}

// Busca restaurantes pelo parametro Id_User

export async function get_Restaurantes_Id(req:Request,res:Response) {
    try{
        const {Id_User} = req.body
        const obj = await  Restaurantes.findOne({where:{Id_User:Id_User}})
        res.status(200).json(obj)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel encontrar esse Restaurante"})
    }
}

// autalizando restaurante

export async function update_Restaurantes(req:Request,res:Response) {
    try{
        const name = req.params.Nome
        const {Nome,Endereço} = req.body
        await Restaurantes.update({Nome,Endereço},{where: {Nome: name}})
        res.status(200)
    }catch{
        res.status(400).json({"Erro":"Não foi possivel atualizar esse Restaurante"})
    }
}

// criando restaurante

export async function create_Restaurantes(req:Request,res:Response) {
    try{
        const {Nome,Endereço,Id_User} = req.body
        await Restaurantes.create({"Nome":Nome,"Endereço":Endereço,"Id_User":Id_User})
        res.status(200)
    }catch{
        res.status(400).json({"Erro":"Não foi possivel criar esse Restaurante"})
    }
}

// deletando restaurante

export async function delete_Restaurantes(req:Request,res:Response) {
    try{
        const Nome = req.params.Nome
        await Restaurantes.destroy({where: {Nome: Nome}})
        res.status(200)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel deletar esse Restaurante"})
    }
}

