const { response } = require("express");

exports.middlewareGlobal = (require, response, next) => {
    response.locals.umaVariavelLocal = 'Este e o valor da variavel local'
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