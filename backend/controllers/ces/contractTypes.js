const ContractType = require('../../models/').ContractType;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id === 3) {
                let contractTypes = await ContractType.findAll();
                return res.json({
                    contractTypes
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