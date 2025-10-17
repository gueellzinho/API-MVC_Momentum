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
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    insereDone(){
        return function(req, res){
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.insereDone(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    atualizaDone(){
        return function(req, res){
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.atualizaDone(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    deletaDone(){
        return function(req, res){
            const id = req.params.id;
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.deletaDone(id)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    trocaDoneToDo(){
        return function(req, res){
            const id = req.params.id;
            const doneCRUD = new DoneCRUD(db);
            doneCRUD.trocaDoneToDo(id)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }
}

module.exports = DoneController;