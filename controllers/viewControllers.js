const Features = require('./../utils/apiFeatures');

exports.baseView = (req, res, next) => {
  res.status(200).render('base');
};

exports.projetosView = (req, res, next) => {
  res.status(200).render('projetos');
};

exports.notFoundView = (req, res, next) => {
  res.status(404).render('not-found');
};

exports.errorView = (req, res, next) => {
  res.status(req.err.statusCode).render('error', {
    error: req.err,
  });
};

exports.loginView = (req, res, next) => {
  res.status(200).render('admin', {});
};

exports.dashboardView = (req, res, next) => {
  res.status(200).render('dashboard');
};

exports.postView = (req, res, next) => {
  res.status(200).render('post');
};

exports.newProjectView = (req, res, next) => {
  res.status(200).render('newProject');
};
