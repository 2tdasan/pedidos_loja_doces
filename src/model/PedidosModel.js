import mysql from "mysql2"
import config from "../config.js"

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_categoria){
        let sql = `INSERT INTO doces (NOME_DOCE,ID_CATEGORIA) VALUES("${nome_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Categoria inserida"])
            })
        });
    }

    read(){
        let sql = `SELECT * FROM DOCES;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }
    update(id_categoria,nome_categoria){
        let sql = `UPDATE categorias SET nome_categoria="${nome_categoria}" WHERE id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }
    delete(id_categoria){
        let sql = `DELETE FROM categorias WHERE id_categoria="${id_categoria}"`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}

export default new DoceModel();