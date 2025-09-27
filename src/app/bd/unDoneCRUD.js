const sql = require("mssql")

class UnDoneCRUD{
    constructor(db){
        this._db = db;
    }

    buscaUnDonePorIDUsuario(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `select * from Momentum.UnDone where ID_Usuario = '${id}'`;
            this._db.query(sqlQuery, (erro, recordset) =>{
                if(erro)
                    return reject(erro);
                return resolve(recordset);
            });
        })
    }

    insereUnDone(unDone){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `insert into Momentum.UnDone values(`;
            sqlQuery += `${unDone.id_tarefa}, `
            sqlQuery += `${unDone.id_usuario}, ${unDone.id_tipo}, `;
            sqlQuery += `'${unDone.titulo}', '${unDone.descricao}', `;
            sqlQuery += `${unDone.prioridade}, '${new Date(unDone.data_criacao).toISOString()}', `;
            sqlQuery += `'${new Date(unDone.data_validade).toISOString()}')`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("INSERÇÃO DE UNDONE BEM-SUCEDIDA");
                }
            );
        });
    }

    atualizaUnDone(unDone){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `update Momentum.UnDone `;
            sqlQuery += `set ID_Usuario = ${unDone.id_usuario}, `;
            sqlQuery += `ID_Tipo = ${unDone.id_tipo}, `;
            sqlQuery += `Titulo = '${unDone.titulo}', `;
            sqlQuery += `Descricao = '${unDone.descricao}', `;
            sqlQuery += `Dificuldade = '${unDone.prioridade}', `;
            sqlQuery += `Data_Criacao = '${new Date(unDone.data_criacao).toISOString()}', `;
            sqlQuery += `Data_Validade = '${new Date(unDone.data_validade).toISOString()}' `;
            sqlQuery += `where ID_Tarefa = ${unDone.id_tarefa}`;
            console.log(sqlQuery);
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("ATUZALIZAÇÃO DE UNDONE BEM-SUCEDIDA");
                }
            );
        });
    }

    deletaUnDone(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `delete from Momentum.UnDone where ID_Tarefa = ${id}`;
            this._db.query(sqlQuery,
                function(erro){
                    if(erro)
                        return reject(erro);
                    return resolve("REMOÇÃO DE ONDONE BEM-SUCEDIDA");
                }
            );
        });
    }
}

module.exports = UnDoneCRUD;