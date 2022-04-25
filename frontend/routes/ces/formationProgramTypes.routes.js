const { Router } = require('express');
const FormationProgramTypesController = require('../../controllers/ces/formationProgramTypes.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/formationProgramTypes', verify, FormationProgramTypesController.index);

module.exports = router;