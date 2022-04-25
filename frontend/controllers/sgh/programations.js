const Programation = require("../../models").Programation;
const Group = require("../../models").Group;
module.exports = {
    index: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let programations = await Programation.findAll({
                    include: [{
                        model: require('../../models').Group,
                        as: 'group',
                        required: true,
                        include: [{
                            model: require('../../models').FormationProgram,
                            as: 'formationProgram',
                            required: true,
                            include: ['formationType']
                        }]
                    }, "municipality", "results"]
                });
                return res.status(200).json(programations);
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    show: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let programation = await Programation.findByPk(req.params.id, {
                    include: ["results"],
                });
                if (programation) return res.status(200).json(programation);
                return res.status(404).json("Programacion no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    create: async function (req, res) {
        try {
            if(req.body.isActive){
                let programation = await Programation.findOne({
                    where: {
                        groupId: req.body.groupId,
                        isActive: true
                    }
                });
    
                if (programation) {
                    return res.json({
                        message: 'Hay una programacion activa de este grupo'
                    })
                }
            }

            Programation.create({
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                trimester: req.body.trimester,
                groupId: req.body.groupId,
                municipalityId: req.body.municipalityId,
                isActive: req.body.isActive
            }).then((programation) => {
                if (programation) {
                    if (req.body.results) {
                        programation.setResults(req.body.results, {
                            through: {
                                state: req.body.state,
                                observations: req.body.observations,
                            },
                        }).then(() => {
                            return res.status(201).json({
                                message: "Nueva programacion creada",
                                programation
                            });
                        });
                    } else {
                        return res.status(201).json({
                            message: "Nueva programacion creada",
                            programation
                        });
                    }
                }
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Programacion ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    update: async function (req, res) {
        try {
            Programation.update({
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                trimester: req.body.trimester,
                groupId: req.body.groupId,
                municipalityId: req.body.municipalityId,
                isActive: req.body.isActive,
                updatedAt: Date.now(),
            }, {
                where: {
                    id: req.params.id,
                },
            }).then(() => {
                /* 
                  Para actualizar o eliminar los registros de la tabla pivote
                  se debe enviar este JSON:
                  {
                    "results":[<id`s de los learningResults>] -> Si esta vacio [elimina] : [actualiza]
                    "camposAactualizar":"new value" -> (state, observations)
                  }
                */
                Programation.findByPk(req.params.id).then((programation) => {
                    if (programation) {
                        if (req.body.results || req.body.state || req.body.observations) {
                            programation.setResults(req.body.results, {
                                through: {
                                    state: req.body.state,
                                    observations: req.body.observations,
                                },
                            }).then(() => {
                                return res.status(200).json("Programacion actualizada");
                            });
                        } else {
                            return res.status(201).json("Programacion actualizada");
                        }
                    }
                });
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Cargo ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function (req, res) {
        try {
            let data = await Programation.destroy({
                where: {
                    id: req.params.id
                },
            });
            if (data > 0) return res.status(200).json("Programacion eliminada");
            return res.status(404).json("Programacion no encontrado");
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Esta programacion esta asociado a un horario, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },

    getSchedules: async function (req, res) {
        let data = await Programation.findByPk(req.params.id, {
            include: [{
                model: require('../../models').Group,
                as: 'group',
                required: true,
                include: [{
                    model: require('../../models').User,
                    as: 'manager',
                    required: true,
                    include: ['position', 'contractType']
                },
                    'modality',
                {
                    model: require('../../models').FormationProgram,
                    as: 'formationProgram',
                    required: true,
                    include: ['formationType']
                }]
            },
            {
                model: require('../../models').Schedule,
                as: 'schedule',
                required: false,
                include: [
                    "learningResult",
                    {
                        model: require("../../models").Ambient,
                        as: "ambient",
                        required: true,
                    },
                    "temporaryUser",
                    "constantUser",
                    "deprogramming",
                ]
            }
            ]
        });
        return res.json(data);
    }
};