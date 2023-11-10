const catchAsync = require('./../utils/catchAsync');
const User = require('./../model/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const { promisify } = require('util');

const signToken = (id, res) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE * 24 * 60 * 60 * 100),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'prod') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  return token;
};

exports.signUp = catchAsync(async (req, res, next) => {
  const { name, password, passwordConfirm, user, photo } = req.body;

  const newUser = await User.create({
    name,
    password,
    passwordConfirm,
    user,
    photo,
  });

  res.status(201).json({
    status: 'sucess',
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { user, password } = req.body;

  if (!user || !password)
    return next(new AppError('Usuário ou senha inválidos', 400));

  const newUser = await User.findOne({ user: user }).select('+password');

  if (!newUser || !(await newUser.correctPassword(password, newUser.password)))
    return next(new AppError('Usuário ou senha inválidos!', 401));

  const token = signToken(newUser._id, res);

  res.status(200).json({
    status: 'sucess',
    token: token,
  });
});

exports.logout = (req, res, next) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  next();
};

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(new AppError('Erro de validação: não autorizado'), 401);

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) return next(new AppError('Usuário inexistente', 401));

  if (currentUser.changedPasswordAfter(decoded.iat))
    return next(new AppError('Erro de validação: não autorizado', 401));

  req.user = currentUser;
  res.locals.user = currentUser;

  next();
};

exports.restricTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(
        new AppError('Usuário não autorizado. Por favor, tente novamente', 403)
      );
    next();
  };
};
