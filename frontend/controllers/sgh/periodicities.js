const Periodicity = require("../../models").Periodicity;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let periodicities = await Periodicity.findAll({
                    attributes: ["id", "name"],
                });
                return res.status(200).json(periodicities);
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    show: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let periodicity = await Periodicity.findByPk(req.params.id, {
                    attributes: ["id", "name"],
                });
                if (!periodicity) return res.status(404).json({
                    message: "Periodicidad no encontrada",
                });
                return res.status(200).json(periodicity);
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    create: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                await Periodicity.create({
                    name: req.body.name,
                });
                return res.status(201).json({
                    message: "Nueva periodicidad creada",
                });
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let periodicity = await Periodicity.findByPk(req.params.id);
                if (!periodicity) return res.status(404).json({
                    message: "Periodicidad no encontrada",
                });
                await Periodicity.update({
                    name: req.body.name,
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json({
                    message: "Periodicidad actualizada",
                });
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let periodicity = await Periodicity.findByPk(req.params.id);
                if (!periodicity) return res.status(404).json({
                    message: "Periodicidad no encontrada",
                });
                await Periodicity.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json({
                    message: "Periodicidad eliminada",
                });
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};