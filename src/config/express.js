const express = require("express");
const aplicacao = express();

const bodyParser = require("body-parser");
const { query, validationResult  } = require("express-validator");

aplicacao.use(bodyParser.json());
aplicacao.use(query());
aplicacao.use(bodyParser.urlencoded({ extended: true }));

const rotas = require("../app/rotas/rotas");
rotas(aplicacao);

module.exports = aplicacao;
