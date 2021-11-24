const Login = require('../models/LoginModel');

exports.index = (require, response) => {
    response.render('login');
};

exports.register = async (require, response) => {
    try {
        const login = new Login(require.body);
        await login.register();

        if(login.errors.length > 0) {
            require.flash('errors', login.errors);
            require.session.save(() => {
                return response.redirect('/login/index');
            });
            return; 
        }
         
        require.flash('success', 'Usuário criado com sucesso');
        require.session.save(() => {
            return response.redirect('/login/index');
        });

    } catch(e) {
        console.log(e);
        return response.reder('404');
    }
    
};