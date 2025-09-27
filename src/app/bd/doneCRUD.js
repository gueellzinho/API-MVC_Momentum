class DoneCRUD{
    constructor(db){
        this._db = db;
    }

    buscaDonePorIDUsuario(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `select * from Momentum.Done where ID_Usuario = '${id}'`;
            this._db.query(sqlQuery, (erro, recordset) =>{
                if(erro){
                    console.log(erro);
                    return reject("BUSCA DE DONE FALHOU!");
                }
                return resolve(recordset);
            });
        })
    }

    insereDone(done){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `insert into Momentum.Done values(`;
            sqlQuery += `${done.id_tarefa}, `
            sqlQuery += `${done.id_usuario}, ${done.id_tipo}, `;
            sqlQuery += `'${done.titulo}', '${done.descricao}', `;
            sqlQuery += `${done.prioridade}, '${done.data_criacao}', `;
            sqlQuery += `'${done.data_validade}')`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("INSERÇÃO DE DONE BEM-SUCEDIDA");
                }
            );
        });
    }

    atualizaDone(done){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `update Momentum.Done `;
            sqlQuery += `set ID_Usuario = ${done.id_usuario}, `;
            sqlQuery += `ID_Tipo = ${done.id_tipo}, `;
            sqlQuery += `Titulo = '${done.titulo}', `;
            sqlQuery += `Descricao = '${done.descricao}', `;
            sqlQuery += `Dificuldade = ${done.prioridade}, `;
            sqlQuery += `Data_Criacao = '${done.data_criacao}', `;
            sqlQuery += `Data_Validade = '${done.data_validade}' `;
            sqlQuery += `where ID_Tarefa = ${done.id_tarefa}`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("ATUZALIZAÇÃO DE DONE BEM-SUCEDIDA");
                }
            );
        });
    }

    deletaDone(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `delete from Momentum.Done where ID_Tarefa = ${id}`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("REMOÇÃO DE DONE BEM-SUCEDIDA");
                }
            );
        });
    }

    trocaDoneToDo(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `insert into Momentum.ToDo `;
            sqlQuery += `select ID_Usuario, ID_Tipo, Titulo, Descricao, `;
            sqlQuery += `Dificuldade, Data_Criacao, Data_Validade `
            sqlQuery += `from Momentum.Done where ID_Tarefa = ${id};`;
            sqlQuery += `delete from Momentum.Done where ID_Tarefa = ${id};`
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

module.exports = DoneCRUD;