exports.paginaInicial = (request, response) => {
    console.log(request.flash('info'))
    response.render('index');
};

exports.trataPost = (request, response) => {
    response.send(request.body);
};

