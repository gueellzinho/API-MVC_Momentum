const bcrypt = require("bcrypt");

class UsuarioCRUD{

    constructor(db){
        this._db = db
    }

    buscaUsuarioPorId(id){
       return new Promise((resolve, reject) =>{
         var sqlQuery = `select * from Momentum.Usuario where ID_Usuario = ${id}`
         this._db.query(sqlQuery, function(erro, recordset){
            if(erro){
               return reject("BUSCA DE USUARIO FALHOU");
            }
            resolve(recordset);
         })
       });
    }

    async registraUsuario(usuario){
        return new Promise(async (resolve, reject) =>{
            try{
                const hashSenha = await bcrypt.hash(usuario.senha, 5);

                var sqlQuery = `insert into Momentum.Usuario `;
                sqlQuery += `values ('${usuario.nome}', '${usuario.email}', `;
                sqlQuery += `'${hashSenha}', '${usuario.foto}', '${usuario.public_id}')`;

                this._db.query(sqlQuery, 
                    function(erro){
                        if(erro)
                            return reject(erro);
                        return resolve("REGISTRO BEM-SUCEDIDO");
                    }
                );
            }
            catch(erro){
                return reject("ERRO AO GERAR HASH DA SENHA");
            }
        });
    }

    logaUsuario(dados){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `select * from Momentum.Usuario where Email = '${dados.email}'`;

            this._db.query(sqlQuery, 
                async function(erro, resultado){
                    if(erro)
                        return reject("LOGIN FALHOU!");
                    if(resultado.recordset.length === 0 || !resultado.recordset)
                        return reject("EMAIL NÃO ENCONTRADO");

                    const usuario = resultado.recordset[0];

                    const senhaCorreta = await bcrypt.compare(dados.senha, usuario.Senha);

                    if(!senhaCorreta)
                        return reject("SENHA INCORRETA");

                    delete usuario.Senha;

                    return resolve(usuario);
                }
            );
        });
    }


    atualizaUsuario(usuario){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `update Momentum.Usuario `;
            sqlQuery += `set Nome = '${usuario.nome}', `;
            sqlQuery += `Email = '${usuario.email}', `;
            sqlQuery += `Senha = '${usuario.senha}', `;
            sqlQuery += `foto = '${usuario.foto}', `;
            sqlQuery += `public_id = '${usuario.public_id}'`;
            sqlQuery += `where ID_Usuario = '${usuario.id}'`;
            this._db.query(sqlQuery,
                function(erro){
                    if(erro){
                        return reject("ATUALIZAÇÃO DE USUÁRIO FALHOU!");
                    }
                    return resolve("INSERÇÃO BEM-SUCEDIDA");
                }
            );
        });
    }

    deletaUsuario(id){
        return new Promise((resolve, reject) =>{
            var sqlQuery = `delete from Momentum.Usuario where ID_Usuario = '${id}'`;
            this._db.query(sqlQuery, 
                function(erro){
                    if(erro){
                        return reject("REMOÇÃO DE USUÁRIO FALHOU!");
                    }
                    return resolve("REMOÇÃO BEM-SUCEDIDA");
                }
            );
        });
    }
}

module.exports = UsuarioCRUD;