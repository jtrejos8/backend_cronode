const Deprogramming = require("../../models").Deprogramming;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let deprogrammings = await Deprogramming.findAll({
                    include: ["schedule", "deprogrammingReason"],
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                return res.status(200).json(deprogrammings);
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
                let deprogramming = await Deprogramming.findByPk(req.params.id, {
                    include: ["schedule", "deprogrammingReason"]
                });
                if (deprogramming) return res.status(200).json(deprogramming);
                return res.status(404).json("Desprogramacion no encontrada");
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
                await Deprogramming.create({
                    scheduleId: req.body.scheduleId,
                    date: req.body.date,
                    deprogrammingReasonId: req.body.deprogrammingReasonId,
                    description: req.body.description
                });
                return res.status(201).json("Desprogramacion creada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Desprogramacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Deprogramming.update({
                    scheduleId: req.body.scheduleId,
                    date: req.body.date,
                    deprogrammingReasonId: req.body.deprogrammingReasonId,
                    description: req.body.description,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Desprogramacion actualizado");
                return res.status(404).json("Desprogramacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Desprogramacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Deprogramming.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Desprogramacion eliminado");
                return res.status(404).json("Desprogramacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    }
};