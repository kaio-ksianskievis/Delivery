import { Request, Response } from "express";
import Produtos from "../models/Produtos";


//busca por todos os Produtos

async function get_Produtos(req:Request,res:Response){
    try{
        const obj = await Produtos.findAll({raw: true})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(500)
        
    }
}
//busca por um Produto com o parametro nome

async function get_Produtos_Nome(req:Request,res:Response) {
    try{
        const name = req.params.Nome
        const obj = await Produtos.findOne({where:{Nome:name}})
        res.json(obj)
        res.status(200)
    }catch{
        res.status(404)
    }
}

// autalizando Produtos

async function update_Produtos(req:Request,res:Response) {
    try{
        const id = req.params.id
        const {Nome,Descrição,Id_Restaurante} = req.body
        await Produtos.update({Nome,Descrição,Id_Restaurante},{where: {id: id}})
        res.status(200)
    }catch{
        res.status(400)
    }
}

// criando Produtos

async function create_Produtos(req:Request,res:Response) {
    try{
        const obj = req.body
        await Produtos.create(obj)
        res.status(200)
    }catch{
        res.status(400)
    }
}

// deletando Produtos

async function delete_Produtos(req:Request,res:Response) {
    try{
        const id = req.params.id
        await Produtos.destroy({where: {id: id}})
        res.status(200)
    }catch{
        res.status(404)
    }
}

export {
    get_Produtos,
    get_Produtos_Nome,
    delete_Produtos,
    update_Produtos,
    create_Produtos 
}