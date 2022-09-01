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

    Id: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = await ReceitaService.Id(id);
        
        if(nome) {
            json.result = nome;
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

    Editar: async(req, res) => { 
        let json = {error:'', result:{}};

        console.log("REQ aqui:", req.body)
        let id = req.params.id;
        let nome = req.body.nome;
        let valor = req.body.valor;
        let data = req.body.data;
    
        if (nome.length > 20) {
            json.error = "Campo contem mais de 20 caracteres"
        } else {
            if(id && nome && valor && data) {
                await ReceitaService.Editar(id, nome, valor, data);
                json.result = {
                    id,
                    nome,
                    valor,
                    data,
                };
                    
            } else {
                    json.error = 'campos não Editados';
            }
        }
        
        res.json(json);
    },

    Delete: async(req, res) => {
        let json = {error:'', result:{}};

        await ReceitaService.Delete(req.params.id);

        res.json(json);

    },


    

}
