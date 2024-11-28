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
    Avaliação:{
        type: DataTypes.DOUBLE,
        defaultValue: 0.0
    }
})

export default Restaurantes