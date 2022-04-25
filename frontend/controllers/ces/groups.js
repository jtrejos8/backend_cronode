const Group = require('../../models/').Group;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let groups = await Group.findAll();
                return res.json({
                    groups
                });
            } else {
                return res.json({
                    message: 'Tu rol no puede hacer esta accion'
                });
            }
        } catch (error) {
            return res.json({
                error
            });
        }
    }
}