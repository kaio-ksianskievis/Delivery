import { DataTypes } from "sequelize";
import DataBase from "./Conection";

const User = DataBase.define("Usuarios",{
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default User