const ReceitaService = require('../services/ReceitaService')

module.exports = {
    Chamar: async (req, res) =>{
        let json = {error:'', result:[]}

        let receita = await ReceitaService.Chamar()

        for(let i in receita) {
            console.log("O que é  i =>", i)
            json.result.push({
                id: receita[i].id,
                nome: receita[i].nome,
                valor: receita[i].valor,
                data: receita[i].data,
            });
                
        }

        res.json(json); 
    },

    Enviar: async(req, res) => {
        let json = {error:'', result:{}};

        console.log("aqui por favor", req.body)

        let id = req.body.id;
        let nome = req.body.nome;
        let valor = req.body.valor;
        let data = req.body.data;
        
        if(nome && valor) {
            let ReceitaCodigo = await ReceitaService.Enviar(id, nome, valor, data);
            json.result = {
                id: ReceitaCodigo,
                nome,
                valor,
                data,
            };
                
        } else {
                json.error = 'campos não enviados!';
        }

        res.json(json);
    },


    

}
