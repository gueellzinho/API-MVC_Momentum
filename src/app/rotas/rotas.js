const DoneController = require("../controller/done_controller");
const ToDoController = require("../controller/toDo_controller");
const UnDoneController = require("../controller/unDone_controller");
const UsuarioController = require("../controller/usuario_controller");

const obj_DoneController = new DoneController();
const obj_ToDoController = new ToDoController();
const obj_UnDoneController = new UnDoneController();
const obj_UsuarioController = new UsuarioController();

module.exports = (aplicacao) =>{
    aplicacao.use((req, res, next) =>{
        res.header("Acess-Control-Allow-Origin", "*");
        next();
    })

    /**************ENDPOINTS****************/

    //GET - Busca Done por ID_Usuario
    aplicacao.get("/done/:id", obj_DoneController.buscaDonePorIDUsuario());

    //POST - Inserção de Done
    aplicacao.post("/done", obj_DoneController.insereDone());

    //PATCH - Atualização de Done
    aplicacao.patch("/done", obj_DoneController.atualizaDone());

    //DELETE - Remoção de Done
    aplicacao.delete("/done/:id", obj_DoneController.deletaDone());

    //POST - Troca Done para ToDo
    aplicacao.post("/done/:id", obj_DoneController.trocaDoneToDo());



    //GET - Busca ToDo por ID_Usuario
    aplicacao.get("/todo/:id", obj_ToDoController.buscaToDoPorIDUsuario());

    //POST - Inserção de ToDo
    aplicacao.post("/todo", obj_ToDoController.insereToDo());

    //PATCH - Atualização de ToDo
    aplicacao.patch("/todo", obj_ToDoController.atualizaToDo());

    //DELETE - Remoção de ToDo
    aplicacao.delete("/todo/:id", obj_ToDoController.deletaToDo());

    //POST - Troca ToDo para Done
    aplicacao.post("/todo/:id", obj_ToDoController.trocaToDoDone());



    //GET - Busca UnDone por ID_Usuario
    aplicacao.get("/undone/:id", obj_UnDoneController.buscaUnDonePorIDUsuario());

    //POST - Inserção de UnDone
    aplicacao.post("/undone/", obj_UnDoneController.insereUnDone());

    //PATCH - Atualização de UnDone
    aplicacao.patch("/undone/", obj_UnDoneController.atualizaUnDone());

    //DELETE - Remoção de UnDone
    aplicacao.delete("/undone/:id", obj_UnDoneController.deletaUnDone());



    //GET - Busca Usuario por ID_Usuario
    aplicacao.get("/usuario/:id", obj_UsuarioController.buscaUsuarioPorId());

    //POST - Registro de Usuario
    aplicacao.post("/usuario/registro", obj_UsuarioController.registraUsuario());
    
    //POST - Login de Usuario
    aplicacao.post("/usuario/login", obj_UsuarioController.logaUsuario());

    //PATCH - Atualização de Usuario
    aplicacao.patch("/usuario/", obj_UsuarioController.atualizaUsuario());

    //DELETE - Remoção de Usuario
    aplicacao.delete("/usuario/:id", obj_UsuarioController.deletaUsuario());
}