const AuthController = require('../../controllers/sgh/auth');
const { Router } = require('express');

const router = Router();

router.post('/authenticate', AuthController.authenticate);
router.get('/authenticated', AuthController.getUserAuthenticated);

module.exports = router;