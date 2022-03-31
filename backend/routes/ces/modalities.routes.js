const { Router } = require('express');
const ModalitiesController = require('../../controllers/ces/modalities.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/modalities', verify, ModalitiesController.index);

module.exports = router;