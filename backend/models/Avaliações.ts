import DataBase from "./Conection";
import { DataTypes } from "sequelize";

const Avaliações = DataBase.define("Avaliações",{
    
    Descrição: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Id_Restaurante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Estrelas:{
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})

export default Avaliações