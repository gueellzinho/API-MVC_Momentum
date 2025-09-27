const UsuarioCRUD = require("../bd/usuarioCRUD");
var db = require("../../config/database");

class UsuarioController{
    buscaUsuarioPorId(){
        return function(req, res){
            const id = req.params.id;
            const usuarioCRUD = new UsuarioCRUD(db);
            usuarioCRUD.buscaUsuarioPorId(id)
            .then((resultados) =>{
                res.status(200).send(resultados)
            })
            .catch(erro => res.status(400).send(erro.message))
        }
    }

    registraUsuario(){
        return function(req, res){
            const usuarioCRUD = new UsuarioCRUD(db);
            usuarioCRUD.registraUsuario(req.body)
            .then(() => res.status(200).send("REGSITRO BEM-SUCEDIDO"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    logaUsuario(){
        return function(req, res){
            const usuarioCRUD = new UsuarioCRUD(db);
            usuarioCRUD.logaUsuario(req.body)
            .then(() => res.status(200).send("LOGIN BEM-SUCEDIDO"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    atualizaUsuario(){
        return function(req, res){
            const usuarioCRUD = new UsuarioCRUD(db);
            usuarioCRUD.atualizaUsuario(req.body)
            .then(() => res.status(200).send("ATUALIZAÇÃO BEM SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    deletaUsuario(){
        return function(req, res){
            const id = req.params.id;
            const usuarioCRUD = new UsuarioCRUD(db);
            usuarioCRUD.deletaUsuario(id)
            .then(() => res.status(200).send("REMOÇÃO BEM SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }
}

module.exports = UsuarioController;