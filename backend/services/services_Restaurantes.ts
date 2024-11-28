import { Request, Response } from "express";
import Restaurantes from "../models/Restaurantes";


//busca por todos os restaurantes

async function get_Restaurantes(req:Request,res:Response){
    try{
        const obj = await Restaurantes.findAll({raw: true})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(500)
        
    }
}
//busca por um restaurante com o parametro nome

async function get_Restaurantes_Nome(req:Request,res:Response) {
    try{
        const name = req.params
        const obj = await Restaurantes.findOne({where:{Nome:name}})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(404)
    }
}

// autalizando restaurante

async function update_Restaurantes(req:Request,res:Response) {
    try{
        const name = req.params
        const {Nome,Endereço,Avaliação} = req.body
        await Restaurantes.update({Nome,Endereço,Avaliação},{where: {Nome: name}})
        res.status(200)
    }catch{
        res.status(400)
    }
}

// criando restaurante

async function create_Restaurantes(req:Request,res:Response) {
    try{
        const obj = req.body
        await Restaurantes.create(obj)
        res.status(200)
    }catch{
        res.status(400)
    }
}

// deletando restaurante

async function delete_Restaurantes(req:Request,res:Response) {
    try{
        const name = req.params
        await Restaurantes.destroy({where: {Nome: name}})
        res.status(200)
    }catch{
        res.status(404)
    }
}