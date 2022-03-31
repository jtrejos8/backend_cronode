const { Router } = require('express');
const InstructorsController = require('../../controllers/ces/instructors.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/instructors', verify, InstructorsController.index);

module.exports = router;