const Modality = require("../../models").Modality;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let modalities = await Modality.findAll();
                return res.status(200).json(modalities);
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
                let modality = await Modality.findByPk(req.params.id);
                if (modality) return res.status(200).json(modality);
                return res.status(404).json("Modalidad no encontrada");
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
                await Modality.create({
                    name: req.body.name
                });
                return res.status(201).json("Nueva modalidad creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Modalidad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Modality.update({
                    name: req.body.name,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Modalidad actualizada");
                return res.status(404).json("Modalidad no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Modalidad ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Modality.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Modalidad eliminada");
                return res.status(404).json("Modalidad no encontrada");
            }
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Esta modalidad esta asociada a un grupo, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};