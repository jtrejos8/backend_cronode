const Modality = require('../../models/').Modality;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let modalities = await Modality.findAll();
                return res.json({
                    modalities
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