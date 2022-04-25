const DeprogrammingReason = require("../../models").DeprogrammingReason;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let deprogrogrammingReasons = await DeprogrammingReason.findAll({
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                return res.status(200).json(deprogrogrammingReasons);
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
                let deprogrogrammingReasons = await DeprogrammingReason.findByPk(req.params.id, {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                if (deprogrogrammingReasons) return res.status(200).json(deprogrogrammingReasons);
                return res.status(404).json("Razon de desprogramacion no encontrada");
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
                await DeprogrammingReason.create({
                    name: req.body.name
                });
                return res.status(201).json("Nueva razon de desprogramacion creada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Razon de desprogramacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await DeprogrammingReason.update({
                    name: req.body.name,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Razon de desprogramacion actualizada");
                return res.status(404).json("Razon de desprogramacion no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Razon de desprogramacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await DeprogrammingReason.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Razon de desprogramacion eliminado");
                return res.status(404).json("Razon de desprogramacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Esta razon de desprogramacion esta asociado a una desprogramacion, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};