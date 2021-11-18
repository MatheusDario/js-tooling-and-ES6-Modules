const { request, response } = require('express');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.send('Hello world!');
});

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente! Volte Sempre')
});

app.listen(3000, () => {
    console.log('Servidor Executando na porta 3000');
});

