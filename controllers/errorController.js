const Post = require('./../model/postModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const sendErrorDev = (err, req, res, next) => {
  const error = {
    status: err.status,
    statusCode: err.statusCode,
    error: err,
    message: err.message,
    stack: err.stack,
  };
  req.err = error;
  //IMPLEMENTAR O REQ.LOCALS.ERR!
  res.status(err.statusCode).json({
    error,
  });
};

const sendErrorProd = (err, req, res, next) => {
  if (err.isOperational) {
    const error = {
      status: err.status,
      message: err.message,
      statusCode: err.statusCode,
    };

    req.err = error;
    res.status(err.statusCode).json({
      error,
    });
  } else {
    const error = {
      statusCode: 500,
      status: 'error',
      message: 'Algo deu errado!',
    };
    req.err = error;
    res.status(err.statusCode).json({
      error,
    });
  }
};

const handleCastErrorDB = (err) => {
  const message = `Inválido! ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateDB = (err) => {
  const message = `Campo único sendo duplicado no database: ${err.keyValue.name}. Por favor, insira outro valor.`;
  return new AppError(message, 400);
};

const handleValidationDB = (err) => {
  console.log('hello');
  const errors = Object.values(err.errors).map((error) => error.message);

  const message = `${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWT = (err) =>
  new AppError('Validação Inválida. Faça login novamente', 401);

exports.notFound = catchAsync(async (req, res, next) => {
  const post = await Post.find().limit(1).sort('-createdAt');

  res.locals.post = post[0];

  console.log(res.locals.post);

  next();
});

exports.globalErrorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'dev') {
    sendErrorDev(err, req, res, next);
  } else if (process.env.NODE_ENV === 'prod') {
    let error = Object.create(err);
    if (err.name === 'CastType') error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateDB(err);
    if (err.name === 'ValidationError') error = handleValidationDB(err);

    if (error.name === 'JsonWebTokenError') error = handleJWT(err);
    if (error.name === 'TokenExpiredError') error = handleJWT(err);
    sendErrorProd(error, req, res, next);
  }
};
