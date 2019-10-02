// iniciando a aplicação
// req => pega informações da rota tipo quais produtos estavam no carrinho do usuário. recebe informações que o usuário está enviando 
// req.query => pega os query params {para filtros}
// req.params => acessar route params{para edição e delet}
// req.body => acessar corpo da requisição { criação e edição }
// res => res devolve uma resposta para a requisição

const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');



const routes = express.Router();
const upload = multer(uploadConfig);



const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


// Routes
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);


module.exports = routes;