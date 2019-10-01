const express = require('express');
const app = express();
//porta que a aplicação sera iniciada no servidor
app.listen(3333);

// iniciando a aplicação
// req => pega informações da rota tipo quais produtos estavam no carrinho do usuário. recebe informações que o usuário está enviando 
// res => res devolve uma resposta para a requisição
app.get('/', (req, res) => {
    return res.json({
        message: "Hello world",
    });
});