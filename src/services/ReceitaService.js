// Todas as regras do Banco de Dados estarão Aqui:

const db = require('../db')


module.exports = {
    Chamar: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM Receita', (error, results)=>{
                console.log("------- teste -------", error, results)
                if(error) {rejeitado(error); return; }
                aceito(results.recordset);
            })
        })
    },

    Enviar: (id, nome, valor, data) => {
        return new Promise((aceito, rejeitado) => {
            // let cod = (Math.random() * 1000)
            console.log('aqui', id, nome, valor, data )
            db.query(`INSERT INTO Receita (id, nome, valor, data) VALUES (${id}, '${nome}', ${valor}, '${data}')`, (error, results) => {
                
                if(error) { rejeitado(error); return; }

                aceito(results.inserirCodigo);
            })
        })
    },

    Editar: (id, nome, valor, data) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`update Receita set id = ${id}, nome = '${nome}', valor = ${valor}, data = '${data}'`, (error, results) => {
                 console.log('alterado pelo id filho da p', error, results)
                if(error) { rejeitado(error); return; }

                aceito(results);
            })
        })
    },

    Delete: (id) =>{
        return new Promise((aceito, rejeitado)=> {
            db.query(`DELETE FROM Receita WHERE id = ${id}`, (error, results)=>{
                console.log("------- deletado filho -------", error, results)
                if(error) {rejeitado(error); return; }
                aceito(results.recordset);
            })
        })
    },


};