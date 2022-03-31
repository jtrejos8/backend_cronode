const FormationProgramType = require('../../models').FormationProgramType;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let formationProgramTypes = await FormationProgramType.findAll();
                return res.json({
                    formationProgramTypes
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