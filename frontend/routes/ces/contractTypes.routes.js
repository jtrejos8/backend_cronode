const { Router } = require('express');
const ContractTypesController = require('../../controllers/ces/contractTypes.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/contractTypes', verify, ContractTypesController.index);

module.exports = router;