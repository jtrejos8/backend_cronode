const TemporaryUserActivity = require("../../models").TemporaryUserActivity;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let temporaryUserActivities = await TemporaryUserActivity.findAll();
                return res.status(200).json(temporaryUserActivities);
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
                let temporaryUserActivity = await TemporaryUserActivity.findByPk(req.params.id);
                if (temporaryUserActivity) return res.status(200).json(temporaryUserActivity);
                return res.status(404).json("Usuario/Actividad temporal no encontrada(o)");
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
                await TemporaryUserActivity.create({
                    name: req.body.name,
                    observations: req.body.observations,
                    type: req.body.type
                });
                return res.status(201).json(`Usuario/Actividad creada(o)`);
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Usuario/Actividad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await TemporaryUserActivity.update({
                    name: req.body.name,
                    observations: req.body.observations,
                    type: req.body.type,
                    updatedAt: Date.now(),
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                if (data[0] > 0) return res.status(200).json("Usuario/Actividad actualizada(o)");
                return res.status(404).json("Usuario/Actividad no encontrada(o)");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Usuario/Actividad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await TemporaryUserActivity.destroy({
                    where: {
                        id: req.params.id
                    },
                });
                if (data > 0) return res.status(200).json("Usuario/Actividad eliminada(o)");
                return res.status(404).json("Usuario/Actividad no encontrada(o)");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este usuario o actividad temporal esta asociado a un horario, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
};