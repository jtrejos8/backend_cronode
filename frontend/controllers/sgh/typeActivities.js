const TypeActivity = require("../../models").TypeActivity;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let typeActivities = await TypeActivity.findAll();
                return res.status(200).json(typeActivities);
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
                let typeActivity = await TypeActivity.findByPk(req.params.id);
                if (typeActivity) return res.status(200).json(typeActivity);
                return res.status(404).json("Tipo de actividad no encontrado");
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
                await TypeActivity.create({
                    name: req.body.name,
                    color: req.body.color
                });
                return res.status(201).json("Nuevo tipo de actividad creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            })
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de actividad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await TypeActivity.update({
                    name: req.body.name,
                    color:req.body.color,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Tipo de actividad actualizado");
                return res.status(404).json("Tipo de actividad no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de actividad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await TypeActivity.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Tipo de actividad eliminado");
                return res.status(404).json("Tipo de actividad no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este tipo de actividad esta asociada a un otra actividad, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};