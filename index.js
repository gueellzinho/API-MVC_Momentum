const aplicacao = require("./src/config/express");

aplicacao.listen(3000, () => {
    console.log("API RODANDO NA PORTA 3000");
});