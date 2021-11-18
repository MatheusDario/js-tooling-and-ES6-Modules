const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (request, response) => {
    response.send(`
    <form action "/" method="POST">
        Nome do Cliente: <input type"text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    response.send(request.query);
});

app.post('/', (request, response)=> {
    console.log(request.body);
    response.send(`O que voce enviou no formulario foi: ${request.body.nome}`);
});


app.listen(3000, () => {
    console.log('Servidor Executando na porta 3000');
});

