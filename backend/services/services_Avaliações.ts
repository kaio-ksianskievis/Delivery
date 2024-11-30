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
        const Nome = req.params.Nome
        const {Descrição,Estrelas} = req.body

        await Avaliações.create({Descrição: Descrição, Nome: Nome, Estrelas:Estrelas})
        res.status(200)
    }catch{
        res.status(400).json({"Erro":"Não foi possivel criar a Avaliação"})
    }
}

export {
    get_Avaliação_Nome,
    create_Avaliação
}