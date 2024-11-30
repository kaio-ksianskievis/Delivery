import { Request, Response } from "express";
import Avaliações from "../models/Avaliações"

//busca por uma Avaliação com o parametro Id_Restaurante

async function get_Avaliação_Nome(req:Request,res:Response) {
    try{
        const Nome = req.params.Nome
        const obj = await Avaliações.findOne({where:{Nome:Nome}})
        res.status(200).json(obj)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel encontrar as Avaliações"})
    }
}

// criando Avaliação

async function create_Avaliação(req:Request,res:Response) {
    try{
        const obj = req.body
        await Avaliações.create(obj)
        res.status(200)
    }catch{
        res.status(400).json({"Erro":"Não foi possivel criar a Avaliação"})
    }
}

// deletando Avaliações

async function delete_Avaliação(req:Request,res:Response) {
    try{
        const id = req.params.id
        await Avaliações.destroy({where: {id: id}})
        res.status(200)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel deletar a Avaliação"})
    }
}

export {
    get_Avaliação_Nome,
    delete_Avaliação,
    create_Avaliação
}