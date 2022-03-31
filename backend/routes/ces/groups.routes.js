const { Router } = require('express');
const GroupsController = require('../../controllers/ces/groups.js');
const verify = require("../../middlewares/jwt.js");

const router = Router();

router.get('/groups', verify, GroupsController.index);

module.exports = router;