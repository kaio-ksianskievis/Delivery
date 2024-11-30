import DataBase from "./Conection";
import { DataTypes } from "sequelize";

const Restaurantes = DataBase.define("Restaurantes",{
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Endereço:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Id_User: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Restaurantes