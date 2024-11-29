import { Request, Response } from "express";
import Avaliações from "../models/Avaliações"

//busca por todos os Avaliações

async function get_Avaliação(req:Request,res:Response){
    try{
        const obj = await Avaliações.findAll({raw: true})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(500)
        
    }
}
//busca por uma Avaliação com o parametro Id_Restaurante

async function get_Avaliação_id(req:Request,res:Response) {
    try{
        const Id_Restaurante = req.params.id
        const obj = await Avaliações.findOne({where:{Id_Restaurante:Id_Restaurante}})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(404)
    }
}



// criando Avaliação

async function create_Avaliação(req:Request,res:Response) {
    try{
        const obj = req.body
        await Avaliações.create(obj)
        res.status(200)
    }catch{
        res.status(400)
    }
}

// deletando Avaliações

async function delete_Avaliação(req:Request,res:Response) {
    try{
        const id = req.params.id
        await Avaliações.destroy({where: {id: id}})
        res.status(200)
    }catch{
        res.status(404)
    }
}

export {
    get_Avaliação,
    get_Avaliação_id,
    delete_Avaliação,
    create_Avaliação
}