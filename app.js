const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');

const postController = require('./controllers/postControllers');
const viewController = require('./controllers/viewControllers');
const errorController = require('./controllers/errorController');
const authController = require('./controllers/authController');

const usersRouter = require('./routers/usersRouter');
const postsRouter = require('./routers/postsRouter');
const adminRouter = require('./routers/adminRouter');

const createReqTime = require('./utils/reqTimeStamp');

const app = express();

const limiter = rateLimit({
  max: process.env.NODE_ENV === 'dev' ? 5000 : 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Muitas requisições simultâneas. Por favor, aguarde para tentar novamente.',
});

//GLOBAL MIDDLEWARES

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.use('/admin', limiter);

app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data: blob:'],
    },
  })
);

app.use(xssClean());

app.use(mongoSanitize());

app.use(express.json());

app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(createReqTime);

//ROUTE MIDDLEWARES
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/admin', adminRouter);

app.get('/', postController.getLastPost, viewController.baseView);

app.get('/projetos', postController.getAllPosts, viewController.projetosView);

app.all('*', errorController.notFound, viewController.notFoundView);

app.use(errorController.globalErrorController, viewController.errorView);

module.exports = app;
