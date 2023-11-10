const multer = require('multer');
const Features = require('./../utils/apiFeatures');
const Post = require('./../model/postModel');
const catchAsync = require('./../utils/catchAsync');
const mathPage = require('./../utils/mathPages');
const sharp = require('sharp');

//Multer
/*
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './../public/uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `photo-${Date.now()}.${ext}`);
  },
});
*/
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image'))
    cb(new AppError('Not an image! Please, upload only images', 400), false);
  cb(null, true);
};

exports.uploader = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.resizeImage = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `photo-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(750, 600)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/${req.file.filename}`);

  next();
};

exports.createPost = catchAsync(async (req, res, next) => {
  const { title, material, local, description, user } = req.body;

  const imgs = req.file.filename;

  const newPost = await Post.create({
    title,
    material,
    local,
    imgs,
    description,
    user,
  });

  res.status(201).json({
    sucess: 'sucess!',
    newPost,
  });
});

exports.getAllPosts = catchAsync(async (req, res, next) => {
  let pages = await Post.find();
  pages = mathPage(pages.length);

  const query = new Features(Post.find(), req.query).sort().paginate().query;

  const posts = await Post.find(query);

  res.locals.posts = posts;
  res.locals.pages = pages;
  res.locals.activePage = req.query.page || 1;
  next();
});

exports.getPost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  if (!post)
    return next(
      new AppError(
        'Essa postagem não foi encontrada. Por favor, entre em contato com o administrador.',
        404
      )
    );

  res.locals.post = post;
  next();
});

exports.patchPost = catchAsync(async (req, res, next) => {
  let params = {
    title: req.body.title,
    material: req.body.material,
    local: req.body.local,
    description: req.body.description,
    user: req.body.user,
    imgs: req.file?.filename,
    createdAt: Date.now(),
  };

  for (let field in params) if (!params[field]) delete params[field];

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, params);

  res.status(200).json({
    status: 'sucess',
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  if (!req.params.id)
    return next(new AppError('Não foi passado nenhum ID para deletar!', 400));

  await Post.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});

exports.getLastPost = catchAsync(async (req, res, next) => {
  const post = await Post.find()
    .limit(1)
    .sort('-createdAt')
    .select('-_id -user');

  res.locals.post = post[0];

  next();
});
