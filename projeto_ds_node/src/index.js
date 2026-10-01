// Rotas da API
const express = require('express');
const UsuarioModel = require('../model/UsuarioModel');

const app = express();

app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.send("AURA MAIS REGOOOOOOOOOOOOOOOOOOOOOOOOooo");
});

// Lista os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await UsuarioModel.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar dados no banco' });
  }
});

// Cadastra um usuário
app.post('/usuarios', async (req, res) => {
  const { nome, login, senha } = req.body;

  if (!nome || !login || !senha) {
    return res.status(400).json({ erro: 'Preencha nome, login e senha' });
  }

  try {
    const resultado = await UsuarioModel.criarUsuario(nome, login, senha);
    res.status(201).json({ id_usuario: resultado.insertId, nome, login });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
  }
});

module.exports = app;
