import type { Request, Response } from "express";
import type { IClients } from "../models/clients.js";
import ClientRepository from '../models/clientsRepository.js'
import PerfilRepository from '../models//perfilModel.js'
import UsuarioRepository from '../models//userlModel.js'
import userlModel from "../models//userlModel.js";
import { where } from "sequelize";

function login(req: Request, res: Response, next: any){
    res.render('login');
}

async function validar(req: Request, res: Response, next: any){
  try {
    const { nome, senha } = req.body;

    const usuario = await UsuarioRepository.findOne({
      where: {nome},
      include: PerfilRepository
    })

    if (!usuario) {
      return res.render("login", {
      erro: "Usuário ou senha inválidos"
      });
    }

    if (usuario.getDataValue("senha") !== senha) {
      return res.render("login", {
      erro: "Usuário ou senha inválidos"
    });
    }

    req.session.usuario = usuario

    res.redirect("/home");

  } catch (error) {
    console.log(error);
    res.status(500).send("Erro no login");
  }
}

function cadastro(req: Request, res: Response, next: any){
    res.render('cadastro');
}

async function cadastroPost(req: Request, res: Response) {
  try {
    const { nome, senha } = req.body;

    await UsuarioRepository.create({
      nome,
      senha,
      idPerfil: 2
    });

  res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}

async function home(req: Request, res: Response, next: any){
   const totalClientes = await ClientRepository.count();
    res.render('home', {totalClientes});
}

async function index(req: Request, res: Response, next: any){
    const clients = await ClientRepository.findAll();
    const totalClientes = await ClientRepository.count();
    const erro = req.query.erro;

    res.render('index', {clients: clients, erro: erro, totalClientes})
}

async function show(req: Request, res: Response, next: any){

    const id = Number(req.params.id);
    const client = await ClientRepository.findByPk(id)

    res.render('show', {client: client,})
}

function create(req: Request, res: Response, next: any){
    res.render('create')
}   

async function store(req: Request, res: Response) {
  try {
    const { nome, email } = req.body;

    await ClientRepository.create({
      nome,
      email
    });

    res.redirect('/clients');
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}

async function edit(req: Request, res: Response, next: any){
  try{
      const id = Number(req.params.id);
      const client = await ClientRepository.findByPk(id)
      if(client == null){
        res.status(404).send('Não encontrado')
      }else{
        res.status(200).render('edit', {client: client})
      }
  }catch(error){
    console.log(error);
    res.status(500).end();
  }
  
}

async function update(req: Request, res: Response, next: any){
  try{
      await ClientRepository.update(
        req.body as IClients, {
          where:{
            id: req.params.id
          }
        }
      )
      res.redirect('/clients')
  }catch(error){
    console.log(error)
    res.status(500).end()
  }
  
}

async function destroy(req: Request, res: Response, next: any){
  try{
      await ClientRepository.destroy({
        where:{
          id: req.params.id
        }
      })  
      res.redirect('/clients')

  }catch(error){
    console.log(error)
    res.status(500).end()
  }
}

export default {index,show, create, store, edit, update, destroy, home, login, cadastro, cadastroPost, validar};