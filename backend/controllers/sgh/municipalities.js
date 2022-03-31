const Municipality = require("../../models").Municipality;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let municipalities = await Municipality.findAll({
                    include: ["zone"]
                });
                return res.status(200).json(municipalities);
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
                let municipality = await Municipality.findByPk(req.params.id, {
                    include: ["zone"]
                });
                if (municipality) return res.status(200).json(municipality);
                return res.status(404).json("Municipio no encontrado");
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
                await Municipality.create({
                    name: req.body.name,
                    zoneId: req.body.zoneId
                });
                return res.status(201).json("Nuevo municipio creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Muncipio ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Municipality.update({
                    name: req.body.name,
                    zoneId: req.body.zoneId,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Municipio actualizado");
                return res.status(404).json("Municipio no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Muncipio ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Municipality.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Municipio eliminado");
                return res.status(404).json("Municipio no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este municipio esta asociado a una programacion, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};