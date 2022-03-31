const FormationProgram = require('../../models/').FormationProgram;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let formationPrograms = await FormationProgram.findAll();
                return res.json({
                    formationPrograms
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