const { Router } = require('express');
const FormationProgramsController = require('../../controllers/ces/formationPrograms.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/formationPrograms', verify, FormationProgramsController.index);

module.exports = router;