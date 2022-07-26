// const sql = require('mssql')

console.log("caindo no banco de dados Caralho")

const connStr = "Server=localhost,1433;Database=LG_ControleFinanceiro;User Id=sa; Password=user_gabi; trustServerCertificate=true;";
const sql = require("mssql");

sql.connect(connStr)
   .then(conn => console.log("conectou! Porra"))
   .catch(err => console.log("erro! Se " + err));


module.exports = sql;