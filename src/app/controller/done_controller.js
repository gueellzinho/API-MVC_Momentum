const DoneCRUD = require("../bd/doneCRUD");
var db = require("../../config/database");

class DoneController{
    buscaDonePorIDUsuario(){
        return function(req, res){
            const id = req.params.id;
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.buscaDonePorIDUsuario(id)
            .then((resultados) =>{
                res.status(200).send(resultados)
            })
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    insereDone(){
        return function(req, res){
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.insereDone(req.body)
            .then(() => res.status(200).send("INSERÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    atualizaDone(){
        return function(req, res){
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.atualizaDone(req.body)
            .then(() => res.status(200).send("ATUALIZAÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    deletaDone(){
        return function(req, res){
            const id = req.params.id;
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.deletaDone(id)
            .then(() => res.status(200).send("REMOÇÃO BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }

    trocaDoneToDo(){
        return function(req, res){
            const id = req.params.id;
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.trocaDoneToDo(id)
            .then(() => res.status(200).send("TROCA BEM-SUCEDIDA"))
            .catch(erro => res.status(400).send(erro.message));
        }
    }
}

module.exports = DoneController;