const Position = require("../../models").Position;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let positions = await Position.findAll();
                return res.status(200).json(positions);
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
                let position = await Position.findByPk(req.params.id);
                if (position) return res.status(200).json(position);
                return res.status(404).json("Cargo no encontrado");
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
                await Position.create({
                    name: req.body.name,
                    type: req.body.type
                });
                return res.status(201).json("Nuevo cargo creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Cargo ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Position.update({
                    name: req.body.name,
                    type: req.body.type,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Cargo actualizado");
                return res.status(404).json("Rol no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Cargo ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Position.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Cargo eliminado");
                return res.status(404).json("Cargo no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este cargo esta asociado a un usuario, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};