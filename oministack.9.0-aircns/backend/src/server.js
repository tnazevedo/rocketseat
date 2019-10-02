const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://air-cnc:aircnc1@aircnc-ztiqe.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const routes = require('./routes');
//porta que a aplicação sera iniciada no servidor
app.listen(3333);
app.use(cors());
app.use(express.json());
app.use(routes);