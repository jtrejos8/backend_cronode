const Zone = require("../../models").Zone;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let zones = await Zone.findAll();
                return res.status(200).json(zones);
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
                let zone = await Zone.findByPk(req.params.id);
                if (zone) return res.status(200).json(zone);
                return res.status(404).json("Zona no encontrada");
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
                await Zone.create({
                    name: req.body.name
                });
                return res.status(201).json("Nueva zona creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Zona ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Zone.update({
                    name: req.body.name,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Zona actualizada");
                return res.status(404).json("Zona no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Zona ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Zone.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Zona eliminada");
                return res.status(404).json("Zona no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este zona esta asociado a otras entidades, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};