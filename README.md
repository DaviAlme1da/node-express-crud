# 📌 Sistema Web com CRUD, Autenticação e Controle de Acesso

Aplicação web desenvolvida em Node.js utilizando Express e Sequelize, com foco em boas práticas de organização de projeto, autenticação de usuários e controle de permissões por perfil.

O sistema implementa operações completas de CRUD, além de possuir login, cadastro de usuários e controle de acesso baseado em papéis (roles).

Este projeto foi desenvolvido com finalidade acadêmica e para consolidação dos conhecimentos em desenvolvimento back-end e front-end.

---

## 🚀 Funcionalidades

- Cadastro de usuários
- Login de usuários
- Sistema de autenticação
- CRUD completo de clientes
- Controle de acesso por perfil:
  - Administrador
  - Usuário comum
- Proteção de rotas
- Organização em rotas, controllers e models

---

## 🧠 Objetivo do projeto

Este projeto tem como objetivo:

- Consolidar conceitos de desenvolvimento back-end com Node.js
- Praticar a criação de aplicações web estruturadas com Express
- Implementar autenticação e autorização de usuários
- Aplicar controle de acesso baseado em perfis
- Desenvolver um projeto com organização próxima à utilizada no mercado

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- Banco de dados relacional (MySQL)
- Pug (template engine)
- TypeScript

---

## ⚙️ Como executar o projeto

Clone o repositório:
git clone <url-do-repositorio>


Instale as dependências:
npm install


Configure o banco de dados no arquivo de configuração do projeto.
Inicie o servidor:
npm start

---

## 🔐 Perfis de acesso

O sistema possui dois tipos de usuários:

### 👨‍💼 Administrador

- Possui acesso completo às funcionalidades do sistema
- Pode realizar todas as operações de CRUD

### 👤 Usuário comum

- Possui acesso restrito
- Pode apenas visualizar os dados permitidos
- Não possui permissão para editar, criar e excluir 

---

## 🧩 Estrutura básica do projeto

- routes – rotas da aplicação
- controllers – regras de negócio
- models – modelos do banco de dados
- views – páginas da aplicação
- middlewares – autenticação e autorização

---

## 📦 Atualizações e versões do projeto

### ✅ Versão 1.0 – CRUD básico

Implementação das operações:

- criar
- listar
- editar
- excluir registros
- Estrutura inicial do projeto com Express e Sequelize

### ✅ Versão 2.0 – Autenticação de usuários

Implementação do sistema de:

- cadastro de usuários
- login

### ✅ Versão 3.0 – Controle de acesso por perfil

Implementação de perfis de usuários:

- administrador
- usuário comum
- Criação de middleware de autorização
- Restrições de acesso de acordo com o perfil do usuário
  
### ✅ A Versão 4.0 - Mudança no Layout e autenticação completa:

Implementação:

- Design moderno 
- Proteção total de rotas (bloqueio de acesso direto via URL)

---

## 📚 Observações

Este projeto faz parte do meu processo de aprendizado em desenvolvimento web e back-end, com foco em boas práticas, organização de código e entendimento de segurança e controle de acesso.

---

## 👨‍🎓 Autor

Desenvolvido por Davi Lucas de Almeida, estudante de Análise e Desenvolvimento de Sistemas.
