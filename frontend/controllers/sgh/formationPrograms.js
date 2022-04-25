const FormationProgram = require("../../models").FormationProgram;
const User = require("../../models").User;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let formationPrograms = await FormationProgram.findAll({
                    include: ["formationType", "responsibleArea"],
                });
                return res.status(200).json(formationPrograms);
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
                let formationProgram = await FormationProgram.findByPk(req.params.id, {
                    include: ["formationType", "responsibleArea"],
                });
                if (formationProgram) return res.status(200).json(formationProgram);
                return res.status(404).json("Programa de formacion no encontrado");
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
                if (req.body.responsibleAreaId) {
                    let user = await User.findByPk(req.body.responsibleAreaId);
                    if (!user) {
                        return res.status(400).json({
                            message: "Este usuario no existe",
                        });
                    }
                    if (user.state == "Inactivo") {
                        return res.status(400).json({
                            message: "Este usuario esta inactivo",
                        });
                    }
                }
                await FormationProgram.create({
                    code: req.body.code,
                    name: req.body.name,
                    formationTypeId: req.body.formationTypeId,
                    isRegisterQualified: req.body.isRegisterQualified,
                    isRegisterQualifiedDate: req.body.isRegisterQualifiedDate,
                    responsibleAreaId: req.body.responsibleAreaId,
                });
                return res.status(201).json("Nuevo programa de formacion creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if(error.parent.errno===1062){
                return res.status(400).json({message:'Este programa de formacion ya existe'});
            }
            res.status(400).json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let formationProgram = await FormationProgram.findByPk(req.params.id);
                if (!formationProgram) return res.status(404).json({
                    message: "Programa de formacion no encontrado",
                });
                if (req.body.responsibleAreaId) {
                    let user = await User.findByPk(req.body.responsibleAreaId);
                    if (!user) {
                        return res.status(400).json({
                            message: "Este usuario no existe",
                        });
                    }
                    if (user.state == "Inactivo") {
                        return res.status(400).json({
                            message: "Este usuario esta inactivo",
                        });
                    }
                }
                await FormationProgram.update({
                    code: req.body.code,
                    name: req.body.name,
                    formationTypeId: req.body.formationTypeId,
                    isRegisterQualified: req.body.isRegisterQualified,
                    isRegisterQualifiedDate: req.body.isRegisterQualifiedDate,
                    responsibleAreaId: req.body.responsibleAreaId,
                    updatedAt: Date.now(),
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json("Programa de formacion actualizado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            console.log(error);
            if(error.parent.errno===1062){
                return res.status(400).json({message:'Este programa de formacion ya existe'});
            }
            return res.status(400).json(error);
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await FormationProgram.destroy({
                    where: {
                        id: req.params.id
                    },
                });
                if (data > 0) return res.status(200).json("Programa de formacion eliminado");
                return res.status(404).json("Programa de formacion no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este programa de formacion esta asociado a un grupo, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
};