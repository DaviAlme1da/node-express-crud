import db from  "../db.js"
import Sequelize from "sequelize"

export default db.define(
    'perfil',{
        id:{
            type: Sequelize.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }  
)



