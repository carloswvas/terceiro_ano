const mysql = require('mysql2') //Drive do Banco

//Criar a connect com o banco
const pool = mysql.createPool({
    connectionLimit:10, //Cache disponível para a aplicação
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'banco'
})
// exportando módulo criado 
module.exports = pool
