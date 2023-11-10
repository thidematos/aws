const express = require('express');

const authController = require('./../controllers/authController');
const viewController = require('./../controllers/viewControllers');
const postController = require('./../controllers/postControllers');

const router = express.Router({ mergeParams: true });

router.route('/').get(viewController.loginView);

router.get(
  '/dashboard',
  authController.protect,
  authController.restricTo('MASTER', 'ADMIN'),
  postController.getAllPosts,
  viewController.dashboardView
);

router.get('/logout', authController.logout, viewController.loginView);

router.get(
  '/novo-projeto',
  authController.protect,
  authController.restricTo('MASTER', 'ADMIN'),
  viewController.newProjectView
);

router.get(
  '/dashboard/:id',
  authController.protect,
  authController.restricTo('MASTER', 'ADMIN'),
  postController.getPost,
  viewController.postView
);

module.exports = router;
