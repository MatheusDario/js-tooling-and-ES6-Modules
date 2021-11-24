const Login = require('../models/LoginModel');

exports.index = (require, response) => {
    if(require.session.user) return response.render('login-logado');
    return response.render('login');
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

exports.login = async (require, response) => {
    try {
        const login = new Login(require.body);
        await login.login();

        if(login.errors.length > 0) {
            require.flash('errors', login.errors);
            require.session.save(() => {
                return response.redirect('/login/index');
            });
            return; 
        }
         
        require.flash('successLogin', 'Login efetuado com Sucesso.');
        require.session.user = login.user;
        require.session.save(() => {
            return response.redirect('/login/index');
        });

    } catch(e) {
        console.log(e);
        return response.reder('404');
    }
};

exports.logout = (require, response) => {
    require.session.destroy();
    response.redirect('/');
}