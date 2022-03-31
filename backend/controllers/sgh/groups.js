const Group = require("../../models").Group;
const User = require("../../models").User;
const pdf = require("html-pdf");
const path = require("path");
const createStringToPDF = require("../../helpers/exports/groups/groupPdf.js");
const createExcel = require("../../helpers/exports/groups/groupExcel");
module.exports = {
    detail: async function(req, res) {
        try {
            let groups = await Group.findAll({
                attributes: ["id", "codeTab", "activeLearners", "electiveStartDate", "practiceEndDate", ],
                include: [{
                    attributes: ["id", "username", "document", "misena_email", "phone"],
                    model: require("../../models").User,
                    required: true,
                    as: "manager",
                }, ],
            });
            return res.status(200).json(groups);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let groups = await Group.findAll({
                    include: ["modality", "manager", "formationProgram", {
                        model: require('../../models').Programation,
                        as:'programation',
                        required: false,
                        where:{
                            isActive: true
                        },
                        include:['results', 'schedule']
                    }],
                });
                return res.status(200).json({
                    groups
                });
            }
            if (req.user.rol.id == 2) {
                let groups = await Group.findAll({
                    where: {
                        managerId: req.user.id
                    },
                    include: ["modality", "manager", "formationProgram"]
                });
                return res.json({
                    groups
                });
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    show: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let group = await Group.findByPk(req.params.id, {
                    include: ["modality", "manager", "formationProgram", 'learner', {
                        model: require('../../models').Programation,
                        as:'programation',
                        required: true,
                        where:{
                            isActive: true
                        },
                        include:['results', 'schedule']
                    }],
                });
                if (group) return res.status(200).json(group);
                return res.status(404).json("Grupo no encontrado");
            }
            if (req.user.rol.id == 2) {
                let group = await Group.findByPk(req.params.id, {
                    where: {
                        managerId: req.user.id
                    },
                    include: ["modality", "manager", "formationProgram", 'learner'],
                });
                if (group) return res.status(200).json(group);
                return res.status(404).json("Grupo no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    create: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let user = await User.findByPk(req.body.managerId);
                if (!user) {
                    return res.status(400).json({
                        message: "Este usuario no fue encontrado",
                    });
                }
                if (user.state == "Inactivo") {
                    return res.status(400).json({
                        message: "Este usuario se encuentra inactivo",
                    });
                }
                await Group.create({
                    codeTab: req.body.codeTab,
                    modalityId: req.body.modalityId,
                    quantityLearners: req.body.quantityLearners,
                    activeLearners: req.body.activeLearners,
                    electiveStartDate: req.body.electiveStartDate,
                    electiveEndDate: req.body.electiveEndDate,
                    practiceStartDate: req.body.practiceStartDate,
                    practiceEndDate: req.body.practiceEndDate,
                    offer: req.body.offer,
                    managerId: req.body.managerId,
                    formationProgramId: req.body.formationProgramId,
                    learnerId: req.body.learnerId,
                    groupState: req.body.groupState,
                });
                return res.status(201).json("Nuevo grupo creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            // if(error.parent.errno===1062){
            //     return res.status(400).json({message:'Este grupo ya existe'});
            // }
            return res.status(400).json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let group = await Group.findByPk(req.params.id);
                if (!group) {
                    return res.status(400).json({
                        message: "Grupo no encontrado",
                    });
                }
                if (req.body.managerId) {
                    let user = await User.findByPk(req.body.managerId);
                    if (!user) {
                        return res.status(400).json({
                            message: "Este usuario no fue encontrado",
                        });
                    }
                    if (user.state == "Inactivo") {
                        return res.status(400).json({
                            message: "Este usuario se encuentra inactivo",
                        });
                    }
                }
                await Group.update({
                    codeTab: req.body.codeTab,
                    modalityId: req.body.modalityId,
                    quantityLearners: req.body.quantityLearners,
                    activeLearners: req.body.activeLearners,
                    electiveStartDate: req.body.electiveStartDate,
                    electiveEndDate: req.body.electiveEndDate,
                    practiceStartDate: req.body.practiceStartDate,
                    practiceEndDate: req.body.practiceEndDate,
                    offer: req.body.offer,
                    managerId: req.body.managerId,
                    formationProgramId: req.body.formationProgramId,
                    learnerId: req.body.learnerId,
                    groupState: req.body.groupState,
                    updatedAt: Date.now(),
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json("Grupo actualizado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Group.destroy({
                    where: {
                        id: req.params.id
                    },
                });
                if (data > 0) return res.status(200).json("Grupo eliminado");
                return res.status(404).json("Grupo no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este grupo esta asociado a una programacion, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
    getSchedules: async function(req, res) {
        try {
            console.log(req.user.rol);
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1) {
                let groups = await Group.findAll({
                    include: [{
                        model: require("../../models").Programation,
                        as: "programation",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                        include: [{
                            model: require("../../models").Municipality,
                            as: "municipality",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                            include: [{
                                model: require("../../models").Zone,
                                as: "zone",
                                required: true,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            }, ],
                        }, {
                            model: require("../../models").Schedule,
                            as: "schedule",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                            include: [{
                                model: require("../../models").LearningResult,
                                as: "learningResult",
                                required: true,
                                include: [{
                                    model: require("../../models").Competence,
                                    required: true,
                                    as: "competence",
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt", "hours"],
                                    },
                                }, ],
                                attributes: {
                                    exclude: ["createdAt", "updatedAt", "associatedTrimesters", "trimesterEvaluate", "hours", "projectPhase", ],
                                },
                            }, {
                                model: require("../../models").Ambient,
                                as: "ambient",
                                required: true,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            }, {
                                model: require("../../models").User,
                                as: "constantUser",
                                required: false,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt", "institutional_email", "password", "birthdate", "phone_ip", "gender", "rolId", "positionId", "profession", "last_academic_level", "photo", "email_state", ],
                                },
                            }, {
                                model: require("../../models").TemporaryUserActivity,
                                as: "temporaryUser",
                                required: false,
                            }, ],
                        }, ],
                    }, {
                        model: require("../../models").Modality,
                        as: "modality",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    }, {
                        model: require("../../models").FormationProgram,
                        as: "formationProgram",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "isRegisterQualified", "isRegisterQualifiedDate", ],
                        },
                        include: [{
                            model: require("../../models").FormationProgramType,
                            as: "formationType",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                        }, ],
                    }, {
                        model: require("../../models").User,
                        as: "manager",
                        required: true,
                        include: [{
                            model: require("../../models").ContractType,
                            required: true,
                            as: "contractType",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                        }, ],
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "institutional_email", "password", "birthdate", "phone_ip", "gender", "rolId", "positionId", "profession", "last_academic_level", "photo", "email_state", ],
                        },
                    }, ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "groupState", "offer"],
                    },
                });
                return res.status(200).json(groups);
            }
            if (req.user.rol.id == 2) {
                let groups = await Group.findAll({
                    where: {
                        managerId: req.user.id
                    },
                    include: [{
                        model: require("../../models").Programation,
                        as: "programation",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                        include: [{
                            model: require("../../models").Municipality,
                            as: "municipality",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                            include: [{
                                model: require("../../models").Zone,
                                as: "zone",
                                required: true,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            }, ],
                        }, {
                            model: require("../../models").Schedule,
                            as: "schedule",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                            include: [{
                                model: require("../../models").LearningResult,
                                as: "learningResult",
                                required: true,
                                include: [{
                                    model: require("../../models").Competence,
                                    required: true,
                                    as: "competence",
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt", "hours"],
                                    },
                                }, ],
                                attributes: {
                                    exclude: ["createdAt", "updatedAt", "associatedTrimesters", "trimesterEvaluate", "hours", "projectPhase", ],
                                },
                            }, {
                                model: require("../../models").Ambient,
                                as: "ambient",
                                required: true,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"]
                                },
                            }, {
                                model: require("../../models").User,
                                as: "constantUser",
                                required: false,
                                attributes: {
                                    exclude: ["createdAt", "updatedAt", "institutional_email", "password", "birthdate", "phone_ip", "gender", "rolId", "positionId", "profession", "last_academic_level", "photo", "email_state", ],
                                },
                            }, {
                                model: require("../../models").TemporaryUserActivity,
                                as: "temporaryUser",
                                required: false,
                            }, ],
                        }, ],
                    }, {
                        model: require("../../models").Modality,
                        as: "modality",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    }, {
                        model: require("../../models").FormationProgram,
                        as: "formationProgram",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "isRegisterQualified", "isRegisterQualifiedDate", ],
                        },
                        include: [{
                            model: require("../../models").FormationProgramType,
                            as: "formationType",
                            required: true,
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                        }, ],
                    }, {
                        model: require("../../models").User,
                        as: "manager",
                        required: true,
                        include: [{
                            model: require("../../models").ContractType,
                            required: true,
                            as: "contractType",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"]
                            },
                        }, ],
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "institutional_email", "password", "birthdate", "phone_ip", "gender", "rolId", "positionId", "profession", "last_academic_level", "photo", "email_state", ],
                        },
                    }, ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "groupState", "offer"],
                    },
                });
                return res.json({
                    groups
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso a esta informacion'
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    getSchedule: async function(req, res) {
        try {
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1) {
                let group = await Group.findByPk(req.params.id, {
                    include: [{
                        model: require('../../models/').User,
                        as: 'learner',
                        required: false
                    }, {
                        model: require('../../models/').Programation,
                        as: 'programation',
                        required: false,
                        include: [{
                            model: require('../../models/').Schedule,
                            as: 'schedule',
                            required: false,
                            include: ['ambient', 'constantUser', 'temporaryUser']
                        }]
                    }, {
                        model: require('../../models/').User,
                        as: 'manager',
                        required: false
                    }, 'modality', {
                        model: require('../../models/').FormationProgram,
                        as: 'formationProgram',
                        required: false,
                        include: ['formationType']
                    }]
                });
                return res.json({
                    group
                });
            }
            if (req.user.rol.id == 2) {
                let group = await Group.findByPk(req.params.id, {
                    where: {
                        managerId: req.user.id
                    },
                    include: [{
                        model: require('../../models/').User,
                        as: 'learner',
                        required: false
                    }, {
                        model: require('../../models/').Programation,
                        as: 'programation',
                        required: false,
                        include: [{
                            model: require('../../models/').Schedule,
                            as: 'schedule',
                            required: false,
                            include: ['ambient', 'constantUser', 'temporaryUser']
                        }]
                    }, {
                        model: require('../../models/').User,
                        as: 'manager',
                        required: false
                    }, 'modality', {
                        model: require('../../models/').FormationProgram,
                        as: 'formationProgram',
                        required: false,
                        include: ['formationType']
                    }]
                });
                return res.json({
                    group
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso a esta informacion'
            })
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    createPdf: async function(req, res) {
        try {
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1 || req.user.rol.id == 2) {
                let group = await Group.findByPk(req.params.id, {
                    include: [{
                        model: require('../../models/').User,
                        as: 'learner',
                        required: false
                    }, {
                        model: require('../../models/').Programation,
                        as: 'programation',
                        required: false,
                        include: [{
                            model: require('../../models/').Schedule,
                            as: 'schedule',
                            required: false,
                            include: ['ambient', 'constantUser', 'temporaryUser']
                        }]
                    }, {
                        model: require('../../models/').User,
                        as: 'manager',
                        required: false
                    }, 'modality', {
                        model: require('../../models/').FormationProgram,
                        as: 'formationProgram',
                        required: false,
                        include: ['formationType']
                    }]
                });
                // return res.json(group);
                pdf.create(createStringToPDF(group), {
                    orientation: "landscape",
                }).toFile("./schedule.pdf", function(err, resp) {
                    if (err) {
                        console.log(err);
                        return res.status(200).json(error);
                    } else {
                        return res.status(200).sendFile(path.resolve("schedule.pdf"));
                    }
                });
            } else {
                return res.json({
                    message: 'Tu rol no tiene acceso a esta informacion'
                })
            }
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    createExcel: async function(req, res) {
        try {
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1 || req.user.rol.id == 2) {
                let group = await Group.findByPk(req.params.id, {
                    include: [{
                        model: require('../../models/').User,
                        as: 'learner',
                        required: false
                    }, {
                        model: require('../../models/').Programation,
                        as: 'programation',
                        required: false,
                        include: [{
                            model: require('../../models/').Schedule,
                            as: 'schedule',
                            required: false,
                            include: ['ambient', 'constantUser', 'temporaryUser']
                        }]
                    }, {
                        model: require('../../models/').User,
                        as: 'manager',
                        required: false
                    }, 'modality', {
                        model: require('../../models/').FormationProgram,
                        as: 'formationProgram',
                        required: false,
                        include: ['formationType']
                    }]
                });
                // return res.json(group);
                let wb = createExcel(group);
                return wb.write("schedule.xlsx", res);
            } else {
                return res.json({
                    message: 'Tu rol no tiene acceso a esta informacion'
                })
            }
        } catch (error) {
            console.log(error);
            return res.json({
                error
            });
        }
    },
};