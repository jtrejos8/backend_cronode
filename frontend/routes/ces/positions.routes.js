const { Router } = require('express');
const PositionsController = require('../../controllers/ces/positions.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/positions', verify, PositionsController.index);

module.exports = router;