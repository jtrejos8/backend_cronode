const Rol = require("../../models").Rol;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let rols = await Rol.findAll({
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                });
                return res.status(200).json(rols);
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
                let rol = await Rol.findByPk(req.params.id);
                if (rol) return res.status(200).json(rol);
                return res.status(404).json("Rol no encontrado");
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
                await Rol.create({
                    name: req.body.name
                });
                return res.status(201).json("Nuevo rol creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Rol ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Rol.update({
                    name: req.body.name,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Rol actualizado");
                return res.status(404).json("Rol no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Rol ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Rol.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Rol eliminado");
                return res.status(404).json("Rol no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este rol esta asociado a un usuario, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};