const { response } = require("express");

exports.middlewareGlobal = (require, response, next) => {
    response.locals.errors = require.flash('errors');
    response.locals.success = require.flash('success');
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