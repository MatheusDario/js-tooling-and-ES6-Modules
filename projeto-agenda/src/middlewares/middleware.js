const { response } = require("express");

exports.middlewareGlobal = (require, response, next) => {
    response.locals.umaVariavelLocal = 'Este e o valor da variavel local'
    next();
};

exports.checkCsrfError = (err, require, response, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return response.render('404');
    }
};

exports.csrfMiddleware = (require, response, next) => {
    response.locals.csrfToken = require.csrfToken();
    next();
};