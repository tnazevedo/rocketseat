// iniciando a aplicação
// req => pega informações da rota tipo quais produtos estavam no carrinho do usuário. recebe informações que o usuário está enviando 
// req.query => pega os query params {para filtros}
// req.params => acessar route params{para edição e delet}
// req.body => acessar corpo da requisição { criação e edição }
// res => res devolve uma resposta para a requisição

const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.store);


module.exports = routes;