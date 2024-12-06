import { Request, Response } from "express";
import Produtos from "../models/Produtos";


//busca por todos os Produtos

export async function get_Produtos_Nome_Restaurante(req:Request,res:Response){
    try{
        
        const Nome_Restaurante = req.params.Nome
        const obj = await Produtos.findOne({where:{Nome_Restaurante:Nome_Restaurante}})
        res.status(200).json(obj)
    
    }catch{
        res.status(500).json({"Erro":"Não foi possivel mostrar os produtos"})
        
    }
}
//busca por um Produto com o parametro nome

export async function get_Produtos_Nome(req:Request,res:Response) {
    try{
        const name = req.params.Nome
        const obj = await Produtos.findOne({where:{Nome:name}})
        res.status(200).json(obj)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel encontrar esse produto"})
    }
}

// autalizando Produtos

export async function update_Produtos(req:Request,res:Response) {
    try{
        const id = req.params.id
        const Nome_Restaurante = req.params.Nome_Restaurante
        const {Nome,Descrição} = req.body
        await Produtos.update({Nome,Descrição,Nome_Restaurante},{where: {id: id}})
        res.status(200)
    }catch{
        res.status(400).json({"Erro":"Não foi possivel atualizar esse produto"})
    }
}

// criando Produtos

export async function create_Produtos(req:Request,res:Response) {
    try{
        const Nome_Restaurante = req.params.Nome_Restaurante
        const {Nome,Descrição} = req.body
        await Produtos.create({"Nome":Nome,"Descrição":Descrição,"Nome_Restaurante":Nome_Restaurante})
        res.status(200)
    }catch(err){
        console.log(err)
        res.status(400).json({"Erro":"Não foi possivel criar esse produto"})
    }
}

// deletando Produtos

export async function delete_Produtos(req:Request,res:Response) {
    try{
        const id = req.params.id
        await Produtos.destroy({where: {id: id}})
        res.status(200)
    }catch{
        res.status(404).json({"Erro":"Não foi possivel deletar esse produto"})
    }
}

