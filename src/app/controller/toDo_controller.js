const ToDoCRUD = require("../bd/toDoCRUD");
var db = require("../../config/database");

class ToDoController{
    buscaToDoPorIDUsuario(){
        return function(req, res){
            const id = req.params.id;
            const toDoCRUD = new ToDoCRUD(db);
            toDoCRUD.buscaToDoPorIDUsuario(id, req.body)
            .then((resultados) =>{
                res.status(200).send(resultados)
            })
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    insereToDo(){
        return function(req, res){
            const toDoCRUD = new ToDoCRUD(db);
            toDoCRUD.insereToDo(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    atualizaToDo(){
        return function(req, res){
            const toDoCRUD = new ToDoCRUD(db);
            toDoCRUD.atualizaToDo(req.body)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    deletaToDo(){
        return function(req, res){
            const id = req.params.id;
            const toDoCRUD = new ToDoCRUD(db);
            toDoCRUD.deletaToDo(id)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }

    trocaToDoDone(){
        return function(req, res){
            const id = req.params.id;
            const toDoCRUD = new ToDoCRUD(db);
            toDoCRUD.trocaToDoDone(id)
            .then(() => res.status(200).json({ message: "LOGIN BEM-SUCEDIDO" }))
            .catch(erro => res.status(400).json({ message: erro.message }));
        }
    }
}

module.exports = ToDoController;