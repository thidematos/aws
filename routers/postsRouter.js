const express = require('express');

const {
  uploader,
  ...postController
} = require('./../controllers/postControllers');

const authController = require('./../controllers/authController');

const router = express.Router();

//router.route('/', uploader.single('image'), postController.createPost);
router
  .route('/')
  .post(
    authController.protect,
    authController.restricTo('ADMIN', 'MASTER'),
    uploader.single('img'),
    postController.resizeImage,
    postController.createPost
  );

router
  .route('/:id')
  .patch(
    authController.protect,
    authController.restricTo('ADMIN', 'MASTER'),
    uploader.single('img'),
    postController.resizeImage,
    postController.patchPost
  )
  .delete(
    authController.protect,
    authController.restricTo('ADMIN', 'MASTER'),
    postController.deletePost
  );

module.exports = router;
