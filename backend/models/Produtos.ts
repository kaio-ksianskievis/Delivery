import DataBase from "./Conection";
import { DataTypes } from "sequelize";

const Produtos = DataBase.define("Produtos",{
    
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Descrição:{
        type: DataTypes.STRING,
        allowNull: false
    },

    Id_Restaurante: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Produtos