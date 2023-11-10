const express = require('express');

const userController = require('./../controllers/userControllers');
const authController = require('./../controllers/authController');
const viewController = require('./../controllers/viewControllers');

const router = express.Router();

router.post(
  '/signup',
  authController.protect,
  authController.restricTo('MASTER'),
  authController.signUp
);

router.post('/login', authController.login);

module.exports = router;
