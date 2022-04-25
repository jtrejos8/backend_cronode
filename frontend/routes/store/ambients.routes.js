const { Router } = require('express');
const AmbientsController = require('../../controllers/store/ambient');
const verify = require("../../middlewares/apiKey");

const router = Router();

router.get('/ambients', verify, AmbientsController.index);

module.exports = router;