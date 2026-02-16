import express from 'express'
import clientsRouter from './routes/web.js'
import "dotenv/config";
import  methodOverride   from 'method-override';
import db from "./db.js"
import "./models/associations.js";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "minha_chave",
    resave: false,
    saveUninitialized: false
  })
);

const port = parseInt(`${process.env.PORT}`)

app.use(express.urlencoded({extended: true}));
app.use(methodOverride ('_method'));
app.use(clientsRouter);
app.set('view engine','pug')
app.set('views', './views')

db.sync().then(() => {
    console.log(`Conectado com sucesso ao banco: ${process.env.DB_Name}`)
}).then(() => {
    app.listen(port, () =>{
        console.log("Ola Mundo")
    })
})