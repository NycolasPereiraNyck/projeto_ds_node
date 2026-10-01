// Model: só conversa com o banco de dados
const db = require('../config/database');

// Busca todos os usuários (sem a senha)
async function listarUsuarios() {
  const sql = `SELECT id_usuario, nome, login FROM usuarios`;
  const [usuarios] = await db.query(sql);
  return usuarios;
}

// Cadastra um usuário novo
async function criarUsuario(nome, login, senha) {
  const sql = `INSERT INTO 
                usuarios (nome, login, senha)
               VALUES (?, ?, ?)`;
  const [resultado] = await db.execute(sql, [nome, login, senha]);
  return resultado;
}

module.exports = {
  listarUsuarios,
  criarUsuario
};
