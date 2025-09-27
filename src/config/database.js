const sql = require("mssql");
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,     
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect()
    .then(() => {
        console.log("✅ CONEXÃO com o BD MSSQL realizada com SUCESSO!");
    })
    .catch(err => {
        console.error("❌ Erro na CONEXÃO com o BD MSSQL:", err);
    });

module.exports = pool;
