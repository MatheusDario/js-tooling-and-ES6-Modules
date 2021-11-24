const { response } = require("express");

exports.middlewareGlobal = (require, response, next) => {
    response.locals.errors = require.flash('errors');
    response.locals.success = require.flash('success');
    response.locals.successLogin = require.flash('successLogin');
    response.locals.successContato = require.flash('successContato');
    response.locals.user = require.session.user;
    next();
};

exports.checkCsrfError = (err, require, response, next) => {
    if(err) {
        return response.render('404');
    }
    next();
};

exports.csrfMiddleware = (require, response, next) => {
    response.locals.csrfToken = require.csrfToken();
    next();
};

exports.loginRequired = (require, response, next) => {
    if(!require.session.user) {
        require.flash('errors', 'Você precisa fazer login.');
        require.session.save(() => response.redirect('/login/index'));
        return;
    }
    next();
}