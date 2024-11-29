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
        const Nome = req.params.Nome
        const obj =  Restaurantes.findOne({where:{Nome:Nome}}).then((obj)=>{res.json(obj)})
        //res.json(obj)
        res.status(200)
    }catch{
        res.status(404)
    }
}

// autalizando restaurante

async function update_Restaurantes(req:Request,res:Response) {
    try{
        const name = req.params.Nome
        const {Nome,Endereço} = req.body
        await Restaurantes.update({Nome,Endereço},{where: {Nome: name}})
        res.status(200)
    }catch{
        res.status(400)
    }
}

// criando restaurante

async function create_Restaurantes(req:Request,res:Response) {
    try{
        const {Nome,Endereço} = req.body
        await Restaurantes.create({"Nome":Nome,"Endereço":Endereço})
        res.status(200)
    }catch{
        res.status(400)
    }
}

// deletando restaurante

async function delete_Restaurantes(req:Request,res:Response) {
    try{
        const Nome = req.params.Nome
        await Restaurantes.destroy({where: {Nome: Nome}})
        res.status(200)
    }catch{
        res.status(404)
    }
}

export {
    get_Restaurantes,
    get_Restaurantes_Nome,
    delete_Restaurantes,
    update_Restaurantes,
    create_Restaurantes
}