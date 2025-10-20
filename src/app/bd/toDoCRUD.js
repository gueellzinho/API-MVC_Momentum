class ToDoCRUD{
    constructor(db){
        this._db = db;
    }

    buscaToDoPorIDUsuario(id, body){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `select * from Momentum.ToDo where ID_Usuario = '${id}' and Data_Validade = '${body.data_validade}'`;
            this._db.query(sqlQuery, (erro, recordset) =>{
                if(erro){
                    console.log(erro);
                    return reject("BUSCA DE TODO FALHOU!");
                }
                return resolve(recordset);
            });
        })
    }

    insereToDo(todo){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `insert into Momentum.ToDo values(`;
            sqlQuery += `${todo.id_usuario}, ${todo.id_tipo}, `;
            sqlQuery += `'${todo.titulo}', '${todo.descricao}', `;
            sqlQuery += `${todo.prioridade}, '${todo.data_criacao}', `;
            sqlQuery += `'${todo.data_validade}')`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("INSERÇÃO DE TODO BEM-SUCEDIDA");
                }
            );
        });
    }

    atualizaToDo(todo){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `update Momentum.ToDo `;
            sqlQuery += `set ID_Usuario = ${todo.id_usuario}, `;
            sqlQuery += `ID_Tipo = ${todo.id_tipo}, `;
            sqlQuery += `Titulo = '${todo.titulo}', `;
            sqlQuery += `Descricao = '${todo.descricao}', `;
            sqlQuery += `Dificulade = ${todo.prioridade}, `;
            sqlQuery += `Data_Criacao = '${todo.data_criacao}', `;
            sqlQuery += `Data_Validade = '${todo.data_validade}' `;
            sqlQuery += `where ID_Tarefa = ${todo.id_tarefa}`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("ATUZALIZAÇÃO DE TODO BEM-SUCEDIDA");
                }
            );
        });
    }

    deletaToDo(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `delete from Momentum.ToDo where ID_Tarefa = ${id}`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("REMOÇÃO DE TODO BEM-SUCEDIDA");
                }
            );
        });
    }

    trocaToDoDone(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `insert into Momentum.Done `;
            sqlQuery += `select * from Momentum.Todo where ID_Tarefa = ${id};`;
            sqlQuery += `delete from Momentum.ToDo where ID_Tarefa = ${id};`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("TROCA DE SITUAÇÃO BEM-SUCEDIDA");
                }
            );
        });
    }
}

module.exports = ToDoCRUD;