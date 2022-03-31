const Position = require('../../models/').Position;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let positions = await Position.findAll();
                return res.json({
                    positions
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