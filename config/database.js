const mysql = require('mysql2/promise');

// Pool de conexões com o MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projeto_backend_angela'
});

module.exports = db;
