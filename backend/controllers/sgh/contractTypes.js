const ContractType = require("../../models").ContractType;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let contractTypes = await ContractType.findAll({
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                return res.status(200).json(contractTypes);
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    show: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let contractType = await ContractType.findByPk(req.params.id, {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                if (contractType) return res.status(200).json(contractType);
                return res.status(404).json("Tipo de contrato no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    create: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                await ContractType.create({
                    name: req.body.name
                });
                return res.status(201).json("Nuevo tipo de contrato creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de contrato ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await ContractType.update({
                    name: req.body.name,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Tipo de contrato actualizado");
                return res.status(404).json("Tipo de contrato no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de contrato ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await ContractType.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Tipo de contrato eliminado");
                return res.status(404).json("Tipo de contrato no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este tipo de contrato esta asociado a un usuario, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};