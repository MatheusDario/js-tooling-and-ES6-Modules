exports.paginaInicial = (request, response) => {
    response.send(`
    <form action "/" method="POST">
        Nome do Cliente: <input type"text" name="nome"><br>
        Outra coisa: <input type"text" name="outrocampo">
        <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (request, response) => {
    response.send('Ei, sou sua nova rota de POST');
};

