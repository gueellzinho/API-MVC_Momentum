const UnDoneCRUD = require("../bd/unDoneCRUD");
var db = require("../../config/database");

class UnDoneController{
    buscaUnDonePorIDUsuario(){
        return function(req, res){
            const id = req.params.id;
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.buscaUnDonePorIDUsuario(id)
            .then((resultados) =>{
                res.status(200).send(resultados)
            })
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    insereUnDone(){
        return function(req, res){
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.insereUnDone(req.body)
            .then(() => res.status(200).send("INSERÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    atualizaUnDone(){
        return function(req, res){
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.atualizaUnDone(req.body)
            .then(() => res.status(200).send("ATUALIZAÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    deletaUnDone(){
        return function(req, res){
            const id = req.params.id;
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.deletaUnDone(id)
            .then(() => res.status(200).send("REMOÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }
}

module.exports = UnDoneController;