const express = require('express');
const userController = require('../Controllers/userController');
const { authLocal, authJwt } = require('../Authentication/passport');

const router = express.Router();

router.route('/').get(authJwt, userController.getUsers);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.post('/signup', userController.signup);
router.post('/login', authLocal, userController.login);

module.exports = router;
