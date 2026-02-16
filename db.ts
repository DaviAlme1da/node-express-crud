import { Sequelize } from "sequelize";
import "dotenv/config";

const dbNome = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST!;


const sequelize = new Sequelize(dbNome, dbUser,dbPassword, {
    dialect: 'mysql',
    host: dbHost
});

export default sequelize;