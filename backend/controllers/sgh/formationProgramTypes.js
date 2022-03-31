const FormationProgramType = require("../../models").FormationProgramType;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let formationProgramTypes = await FormationProgramType.findAll();
                return res.status(200).json(formationProgramTypes);
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
                let formationProgramType = await FormationProgramType.findByPk(req.params.id);
                if (formationProgramType) return res.status(200).json(formationProgramType);
                return res.status(404).json("Tipo de programa de formacion no encontrado");
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
                await FormationProgramType.create({
                    name: req.body.name,
                    electiveMonths: req.body.electiveMonths,
                    practiceMonths: req.body.practiceMonths
                });
                return res.status(201).json("Nuevo tipo de programa de formacion creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de programa de formacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await FormationProgramType.update({
                    name: req.body.name,
                    electiveMonths: req.body.electiveMonths,
                    practiceMonths: req.body.practiceMonths,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Tipo de programa de formacion actualizado");
                return res.status(404).json("Tipo de programa de formacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Tipo de programa de formacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await FormationProgramType.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Tipo de programa de formacion eliminado");
                return res.status(404).json("Tipo de programa de formacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este tipo de programa de formacion esta asociado a un programa de formacion, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};