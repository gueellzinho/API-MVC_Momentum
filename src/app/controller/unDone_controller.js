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
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    insereUnDone(){
        return function(req, res){
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.insereUnDone(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    atualizaUnDone(){
        return function(req, res){
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.atualizaUnDone(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    deletaUnDone(){
        return function(req, res){
            const id = req.params.id;
            const unDoneCRUD = new UnDoneCRUD(db);
            unDoneCRUD.deletaUnDone(id)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }
}

module.exports = UnDoneController;