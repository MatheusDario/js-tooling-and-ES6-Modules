const Contato = require('../models/ContatoModel');
exports.index = (require,response) => {
    response.render('contato');
}
exports.register = async(require,response) => {
    try {
    const contato = new Contato(require.body);
    await contato.register();
    
    if(contato.errors.length > 0) {
        require.flash('errors', contato.errors);
        require.session.save(() => response.redirect('/contato/index'));
        return;
    }

    require.flash('successContato', 'Contato registrado com Sucesso.');
    require.session.save(() => response.redirect('/'));
    return;

    } catch(e) {
        console.log(e);
        return response.render('404');
    }   
};