const { Router } = require('express');
const UsersController = require('../../controllers/store/users');
const verify = require("../../middlewares/apiKey");

const router = Router();

router.get('/users', verify, UsersController.index);

module.exports = router;