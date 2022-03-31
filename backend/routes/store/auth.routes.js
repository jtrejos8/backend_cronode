const {Router } = require('express');
const AuthController = require('../../controllers/store/auth');

const router = Router();

router.post('/authenticate', AuthController.authenticate);

module.exports = router;