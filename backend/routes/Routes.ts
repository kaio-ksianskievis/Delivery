import { Router } from "express";
import {get_Restaurantes,get_Restaurantes_Id,get_Restaurantes_Nome,create_Restaurantes,delete_Restaurantes,update_Restaurantes} from  "../services/services_Restaurantes"
import {get_Avaliação_Nome,create_Avaliação} from "../services/services_Avaliações"
import {get_Produtos_Nome,get_Produtos_Nome_Restaurante,delete_Produtos,create_Produtos,update_Produtos} from "../services/services_Produtos"
import { create_user } from "../services/services_User";
import { auth_token_user, gera_token,auth_token,auth_token_vendedor } from "../authentication/auth";

const router = Router()

// rotas publicas

router.post("/login",gera_token)  //rota de login

router.post("/signup",create_user) //rota de cadastro

// rotas privadas Restaurantes

router.get("/Restaurantes",auth_token) //rota dos restaurantes | usuários | vendedores

router.get("/Restaurantes/:Nome",auth_token,get_Restaurantes_Nome) // rota de restaurantes pelo nome  | usuários | vendedores

router.post("/Restaurantes",auth_token_vendedor,create_Restaurantes) //rota de criação de restaurantes | vendedores

router.put("/Restaurantes/:Nome",auth_token_vendedor,update_Restaurantes) // rota de atualização de restaurantes | vendedor

router.delete("/Restaurantes/:Nome",auth_token_vendedor,delete_Restaurantes) // rota para excluir restaurantes | vendedores

// rotas privadas Produtos

router.get("/:Nome/Produtos",auth_token,get_Produtos_Nome_Restaurante) //rota de produtos | usuários | vendedores

router.get("/Produtos/:Nome",auth_token_user,get_Produtos_Nome) //rota de produtos pelo nome | usuários

router.post("/Produtos",auth_token_vendedor,create_Produtos) // rota de criação de produtos | vendedores

router.put("/Produtos/:id",auth_token_vendedor,update_Produtos) // rota de atualização de produtos | vendedor

router.delete("/Produtos/:id",auth_token_vendedor,delete_Produtos) // rota para excluir produtos | vendedores

// rotas privadas Avaliações

router.get("/Avaliações/:Nome",auth_token,get_Avaliação_Nome) //rota de avaliações pelo nome | usuários | vendedores

router.post("/Avaliações",auth_token_user,create_Avaliação) // rota de criação de avaliações  | usuários

export default router

