import { Router } from "express";
import {get_Restaurantes,get_Restaurantes_Id,get_Restaurantes_Nome,create_Restaurantes,delete_Restaurantes,update_Restaurantes} from  "../services/services_Restaurantes"
import {get_Avaliação_Nome,create_Avaliação} from "../services/services_Avaliações"
import {get_Produtos_Nome,get_Produtos_Nome_Restaurante,delete_Produtos,create_Produtos,update_Produtos} from "../services/services_Produtos"
import { create_user } from "../services/services_User";
import { gera_token } from "../authentication/auth";

const router = Router()

// rotas publicas

router.post("/login",gera_token)  //rota de login

router.post("/signup",create_user) //rota de cadastro


// rotas privadas
export default router

