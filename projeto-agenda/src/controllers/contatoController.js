const Contato = require('../models/ContatoModel');
exports.index = (require,response) => {
    response.render('contato', {
        contato: {}
    });
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
    require.session.save(() => response.redirect(`/contato/index/${contato.contato._id}`));
    return;

    } catch(e) {
        console.log(e);
        return response.render('404');
    }   
};

exports.editIndex = async  function (require, response)  {
    if(!require.params.id) return response.render('404');
    
    const contato = await Contato.buscaPorId(require.params.id);
    if(!contato) return response.render('404')

    response.render('contato', { contato });
};

exports.edit = async function(require, response) {
    try{
        if(!require.params.id) return response.render('404');
        const contato = new Contato(require.body);
        await contato.edit(require.params.id);

        if(contato.errors.length > 0) {
            require.flash('errors', contato.errors);
            require.session.save(() => response.redirect('/contato/index'));
            return;
        }

        require.flash('contatoEditado', 'Contato editado com Sucesso.');
        require.session.save(() => response.redirect(`/contato/index/${contato.contato._id}`));
        return;

    } catch(e) {
        console.log(e);
        response.render('404');
    }
    
};

exports.delete = async function(require, response) {
    if(!require.params.id) return response.render('404');
    
    const contato = await Contato.delete(require.params.id);
    if(!contato) return response.render('404')

    require.flash('deleteContato', 'Seu contato foi Deletado com Sucesso.');
    require.session.save(() => response.redirect('http://localhost:3000/'));
    return;
}