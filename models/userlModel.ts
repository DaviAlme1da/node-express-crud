import db from  "../db.js"
import Sequelize from "sequelize"
import Perfil from "./perfilModel.js";

export default db.define(
    'usuario',{
        id:{
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
                type: Sequelize.STRING,
                allowNull: false
        },
        idPerfil: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: "perfils",
                key: "id"
            }
        }
    }
)

