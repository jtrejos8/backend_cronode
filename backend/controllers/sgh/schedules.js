const Schedule = require("../../models").Schedule;
const User = require("../../models").User;
const TemporaryUserActivity = require("../../models").TemporaryUserActivity;
const OtherActivity = require("../../models").OtherActivity;
const Programation = require("../../models").Programation;
const Periodicity = require("../../models").Periodicity;
const { isHoliday } = require("../../functions");
const moment = require("moment");
const { Op } = require("sequelize");
module.exports = {
    index: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let schedules = await Schedule.findAll({
                    where: {
                        type: "Horario",
                    },
                });
                return res.json({
                    schedules,
                });
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    show: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let schedule = await Schedule.findByPk(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "AmbientId"],
                    },
                    include: [
                        {
                            model: require("../../models").Programation,
                            required: false,
                            include: [
                                {
                                    model: require("../../models").Group,
                                    required: true,
                                    as: "group",
                                },
                            ],
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                            as: "programation",
                        },
                        "learningResult",
                        {
                            model: require("../../models").Ambient,
                            as: "ambient",
                            required: true,
                        },
                        "temporaryUser",
                        "constantUser",
                        "deprogramming",
                    ],
                    where: {
                        state: "Aprobado",
                    },
                });
                if (schedule) return res.status(200).json(schedule);
                return res.status(404).json("Horario no encontrado");
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    create: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                if (req.body.constantUserId) {
                    let user = await User.findByPk(req.body.constantUserId);
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
                    // Validaciones de otras actividades
                    // startDate === req.body.startDate
                    let activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: req.body.startDate,
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "Ya existe una actividad programada a esa hora",
                        });
                    }
                    // startDate < req.body.endDate & startDate > req.body.startDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: {
                                [Op.lt]: req.body.endDate,
                                [Op.gt]: req.body.startDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // endDate > req.body.startDate & endDate < req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            endDate: {
                                [Op.gt]: req.body.startDate,
                                [Op.lt]: req.body.endDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // startDate < req.body.startDate & endDate > req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            endDate: {
                                [Op.gt]: req.body.endDate,
                            },
                            startDate: {
                                [Op.lt]: req.body.startDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // startDate < req.body.startDate & endDate === req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: {
                                [Op.lt]: req.body.startDate,
                            },
                            endDate: req.body.endDate,
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                } else if (req.body.temporaryUserId) {
                    let temporaryUser = await TemporaryUserActivity.findByPk(
                        req.body.temporaryUserId
                    );
                    if (!temporaryUser) {
                        return res.status(400).json({
                            message:
                                "Este usuario/actividad temporal no existe",
                        });
                    }
                }
                let programation = await Programation.findByPk(
                    req.body.programationId
                );
                if (programation) {
                    if (!programation.isActive) {
                        return res.status(400).json({
                            message: "Esta programacion no esta activa",
                        });
                    }
                }
                // Validaciones de horarios
                // startDate === req.body.startDate
                let schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        startDate: req.body.startDate,
                    },
                });
                if (schedule) {
                    return res.json({
                        message:
                            "Existe un horario programado a esta hora, no puedes programar",
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // startDate < req.body.startDate & endDate > req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // startDate < req.body.startDate & endDate === req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: req.body.endDate,
                        startDate: {
                            [Op.lt]: req.body.startDate,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                let loanExist = false;
                let loan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        startDate: {
                            [Op.lte]: req.body.startDate,
                        },
                        endDate: {
                            [Op.gte]: req.body.endDate,
                        },
                    },
                });
                if (loan) {
                    loanExist = true;
                }
                loan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        endDate: {
                            [Op.gt]: req.body.startDate,
                            [Op.lt]: req.body.endDate,
                        },
                    },
                });
                if (loan) {
                    loanExist = true;
                }
                await Schedule.create({
                    type: 'Horario',
                    state: 'Aprobado',
                    day: req.body.day,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    learningResultId: req.body.learningResultId,
                    ambientId: req.body.ambientId,
                    programationId: req.body.programationId,
                    constantUserId: req.body.constantUserId,
                    temporaryUserId: req.body.temporaryUserId,
                    summary: req.body.summary,
                });
                if (loanExist) {
                    return res.json({
                        message:
                            "Nuevo horario programado, cuidado hay un prestamo en estas fechas",
                    });
                }
                return res.json({
                    message: "Nuevo horario programado",
                });
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    update: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let schedule = await Schedule.findByPk(req.params.id);
                if (!schedule) {
                    return res.status(400).json({
                        message: "Horario no encontrado",
                    });
                }
                if (req.body.constantUserId) {
                    console.log("Existe usuario constante");
                    let user = await User.findByPk(req.body.constantUserId);
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
                    // Validaciones de otras actividades
                    // startDate === req.body.startDate
                    let activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: req.body.startDate,
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "Ya existe una actividad programada a esa hora",
                        });
                    }
                    // startDate < req.body.endDate & startDate > req.body.startDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: {
                                [Op.lt]: req.body.endDate,
                                [Op.gt]: req.body.startDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // endDate > req.body.startDate & endDate < req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            endDate: {
                                [Op.gt]: req.body.startDate,
                                [Op.lt]: req.body.endDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // startDate < req.body.startDate & endDate > req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            endDate: {
                                [Op.gt]: req.body.endDate,
                            },
                            startDate: {
                                [Op.lt]: req.body.startDate,
                            },
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                    // startDate < req.body.startDate & endDate === req.body.endDate
                    activity = await OtherActivity.findOne({
                        where: {
                            userId: req.body.constantUserId,
                            day: req.body.day,
                            startDate: {
                                [Op.lt]: req.body.startDate,
                            },
                            endDate: req.body.endDate,
                        },
                    });
                    if (activity) {
                        return res.json({
                            message:
                                "No puedes programar dentro de una actividad",
                        });
                    }
                } else if (req.body.temporaryUserId) {
                    let temporaryUser = await TemporaryUserActivity.findByPk(
                        req.body.temporaryUserId
                    );
                    if (!temporaryUser) {
                        return res.status(400).json({
                            message:
                                "Este usuario/actividad temporal no existe",
                        });
                    }
                }
                // Validaciones de horarios
                // startDate === req.body.startDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        startDate: req.body.startDate,
                        id: {
                            [Op.ne]: req.params.id,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message:
                            "Existe un horario programado a esta hora, no puedes programar",
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate,
                        },
                        id: {
                            [Op.ne]: req.params.id,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate,
                        },
                        id: {
                            [Op.ne]: req.params.id,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // startDate < req.body.startDate & endDate > req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate,
                        },
                        id: {
                            [Op.ne]: req.params.id,
                        },
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                // startDate < req.body.startDate & endDate === req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        [Op.or]: [
                            {
                                constantUserId: req.body.constantUserId
                                    ? req.body.constantUserId
                                    : 0,
                            },
                            {
                                temporaryUserId: req.body.temporaryUserId
                                    ? req.body.temporaryUserId
                                    : 0,
                            },
                        ],
                        ambientId: req.body.ambientId,
                        day: req.body.day,
                        endDate: req.body.endDate,
                        startDate: {
                            [Op.lt]: req.body.startDate,
                        },
                    },
                    id: {
                        [Op.ne]: req.params.id,
                    },
                });
                if (schedule) {
                    return res.json({
                        message: "No puedes programar dentro de un horario",
                    });
                }
                await Schedule.update(
                    {
                        type: req.body.type,
                        state: req.body.state,
                        day: req.body.day,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                        learningResultId: req.body.learningResultId,
                        ambientId: req.body.ambientId,
                        programationId: req.body.programationId,
                        constantUserId: req.body.constantUserId,
                        temporaryUserId: req.body.temporaryUserId,
                        summary: req.body.summary,
                    },
                    {
                        where: {
                            id: req.params.id,
                        },
                    }
                );
                if(req.body.constantUserId){
                    let user = await User.findByPk(req.body.constantUserId);
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.EMAIL_USER,
                            pass: process.env.EMAIL_PASSWORD
                        }
                    });
        
                    // var mailOptions = {
                    //     from: 'a.sbedoya200110@gmail.com',
                    //     to: user.misena_email,
                    //     subject: 'Actualizacion de horario - Cronode',
                    //     html: `
                    //     <h1>Cronode</h1>
                    //     <h3>Hola ${user.username}</h3>
                    //     <p>Actualizaron tu horario, ve y revisa para estar al tanto</p>
                    //     `
                    // }
                    // transporter.sendMail(mailOptions, function (error, info) {
                    //     if (error) {
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email Sent: ' + info.response);
                    //     }
                    // });
                }
                return res.status(201).json({
                    message: "Horario actualizado",
                });
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    destroy: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Schedule.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                if (data > 0) return res.status(200).json("Horario eliminado");
                return res.status(404).json("Horario no encontrado");
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message:
                        "Este horario esta asociado a una desprogramacion, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
    /**
     *
     * Temporary schedules for boss area recomendation
     *
     */
    createTemporary: async function (req, res) {
        try {
            if (req.user.rol.id == 2) {
                if (req.user.isBossArea) {
                    await Schedule.create({
                        type: "Temporal",
                        state: "Por aprobar",
                        day: req.body.day,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                        learningResultId: req.body.learningResultId,
                        ambientId: req.body.ambientId,
                        programationId: req.body.programationId,
                        constantUserId: req.body.constantUserId,
                        summary: req.body.summary,
                    });
                    return res
                        .status(201)
                        .json("Nuevo horario temporal creado");
                } else {
                    return res.json({
                        message:
                            "No eres jefe de area, no puedes hacer esta accion",
                    });
                }
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getTemporarys: async function (req, res) {
        try {
            if (req.user.rol.id == 1 || req.user.rol.id == 5) {
                let temporarySchedules = await Schedule.findAll({
                    where: {
                        type: "Temporal",
                        state: "Por aprobar",
                    },
                    include: [
                        {
                            model: require("../../models").Programation,
                            required: true,
                            include: [
                                {
                                    model: require("../../models").Group,
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt"],
                                    },
                                    required: true,
                                    as: "group",
                                },
                            ],
                            as: "programation",
                        },
                        "learningResult",
                        "ambient",
                        "temporaryUser",
                        "constantUser",
                        "deprogramming",
                    ],
                });
                return res.status(200).json({
                    temporarySchedules,
                });
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getTemporary: async function (req, res) {
        try {
            if (req.user.rol.id == 1 || req.user.rol.id == 5) {
                let temporarySchedule = await Schedule.findOne({
                    where: {
                        type: "Temporal",
                        id: req.params.id,
                        state: "Por aprobar",
                    },
                    include: [
                        {
                            model: require("../../models").Programation,
                            required: true,
                            include: [
                                {
                                    model: require("../../models").Group,
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt"],
                                    },
                                    required: true,
                                    as: "group",
                                },
                            ],
                            as: "programation",
                        },
                        "learningResult",
                        "ambient",
                        "temporaryUser",
                        "constantUser",
                        "deprogramming",
                    ],
                });
                if (!temporarySchedule)
                    return res.status(404).json({
                        message: "Horario temporal no encontrado",
                    });
                return res.status(200).json(temporarySchedule);
            }
            return res.json({
                message: "Tu rol no puede hacer esta accion",
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    },
    updateTemporary: async function (req, res) {
        try {
            let temporarySchedule = await Schedule.findByPk(req.params.id);
            if (!temporarySchedule)
                return res.status(404).json({
                    message: "Horario temporal no encontrado",
                });
            await Schedule.update(
                {
                    day: req.body.day,
                    startDate: req.body.startDate,
                    state: req.body.state,
                    endDate: req.body.endDate,
                    learningResultId: req.body.learningResultId,
                    ambientId: req.body.ambientId,
                    programationId: req.body.programationId,
                    constantUserId: req.body.constantUserId,
                    summary: req.body.summary,
                    updatedAt: Date.now(),
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            return res.status(404).json("Horario Actualizado");
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    destroyTemporary: async function (req, res) {
        try {
            let temporarySchedule = await Schedule.findByPk(req.params.id);
            if (!temporarySchedule)
                return res.status(404).json({
                    message: "Horario temporal no encontrado",
                });
            await Schedule.destroy({
                where: {
                    id: req.params.id,
                },
            });
            return res.status(404).json("Horario temporal eliminado");
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message:
                        "Este horario esta asociado a una desprogramacion, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
    /**
     *
     * Temporary Loans
     *
     */
    getTemporaryLoans: async function (req, res) {
        try {
            if (req.user.rol.id === 1) {
                let temporaryLoans = await Schedule.findAll({
                    where: {
                        type: "Prestamo",
                    },
                });
                return res.json({
                    temporaryLoans,
                });
            } else {
                return res.json({
                    message: "Tu rol no puede hacer esta accion",
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
    getTemporaryLoan: async function (req, res) {
        try {
            if (req.user.rol.id === 1) {
                let temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        id: req.params.id,
                    },
                });
                return res.json({
                    temporaryLoan,
                });
            } else {
                return res.json({
                    message: "Tu rol no puede hacer esta accion",
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
    destroyTemporaryLoan: async function (req, res) {
        try {
            if (req.user.rol.id === 1) {
                await Schedule.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                return res.json({
                    message: "Prestamo eliminado",
                });
            } else {
                return res.json({
                    message: "tu rol no puede hacer esta accion",
                });
            }
        } catch (error) {
            console.log(error);
            res.json({
                error,
            });
        }
    },
    createTemporaryLoans: async function (req, res) {
        try {
            if (req.user.rol.id === 1) {
                if (!req.body.temporaryUserId) {
                    return res.json({
                        message: "El usuario/actividad temporal es requerido",
                    });
                }
                let temporaryUser = await TemporaryUserActivity.findByPk(
                    req.body.temporaryUserId
                );
                if (!temporaryUser) {
                    return res.json({
                        message: "Este usuario/actividad temporar no exite",
                    });
                }
                if (!req.body.startDate || !req.body.endDate) {
                    return res.json({ message: "Las fechas son requridas" });
                }
                if (!req.body.periodicityId) {
                    return res.json({
                        message: "La periodicidad es requerida",
                    });
                }
                let periodicity = await Periodicity.findByPk(
                    req.body.periodicityId
                );
                if (!periodicity) {
                    return res.json({ message: "Esta periodicidad no existe" });
                }
                let temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        startDate: req.body.startDate,
                    },
                });
                if (temporaryLoan) {
                    return res.json({
                        message: "Ya existe un prestamo en esta fecha",
                    });
                }
                // Diario
                if (periodicity.id === 1) {
                    temporaryLoan = await Schedule.findOne({
                        where: {
                            type: "Prestamo",
                            ambientId: req.body.ambientId,
                            startDate: {
                                [Op.gt]: req.body.startDate,
                                [Op.lt]: req.body.endDate,
                            },
                            periodicityId: 1,
                        },
                    });
                    if (temporaryLoan) {
                        return res.json({
                            message:
                                "No puedes programar dentro de un prestamo",
                            temporaryLoan,
                        });
                    }
                    temporaryLoan = await Schedule.findOne({
                        where: {
                            type: "Prestamo",
                            ambientId: req.body.ambientId,
                            endDate: {
                                [Op.gt]: req.body.startDate,
                                [Op.lte]: req.body.endDate,
                            },
                            periodicityId: 1,
                        },
                    });
                    if (temporaryLoan) {
                        return res.json({
                            message:
                                "No puedes programar dentro de un prestamo",
                            temporaryLoan,
                        });
                    }
                    temporaryLoan = await Schedule.findOne({
                        where: {
                            type: "Prestamo",
                            ambientId: req.body.ambientId,
                            startDate: {
                                [Op.lt]: req.body.startDate,
                            },
                            endDate: {
                                [Op.gte]: req.body.endDate,
                            },
                            periodicityId: 1,
                        },
                    });
                    if (temporaryLoan) {
                        return res.json({
                            message:
                                "No puedes programar dentro de un prestamo",
                            temporaryLoan,
                        });
                    }
                }
                // Semanal
                if (periodicity.id === 2) {
                    if (!req.body.day) {
                        return res.json({ message: "El dia es requerido" });
                    }
                    let sd = moment(req.body.startDate);
                    let ed = moment(req.body.endDate);
                    if (sd.day() === 0) {
                        return res.json({
                            message:
                                "La fecha de inicio no puede ser un domingo",
                        });
                    }
                    if (ed.day() === 0) {
                        return res.json({
                            message: "La fecha de fin no puede ser un domingo",
                        });
                    }
                    if (sd.day() != ed.day()) {
                        return res.json({
                            message:
                                "El dia de fin tiene que ser igual al dia de inicio",
                        });
                    }

                    let dates = [];
                    while (sd <= ed) {
                        let temporaryLoan = await Schedule.findOne({
                            where: {
                                type: "Prestamo",
                                ambientId: req.body.ambientId,
                                startDate: req.body.startDate,
                            },
                        });
                        if (temporaryLoan) {
                            return res.json({
                                message:
                                    "Ya hay un prestamo en esta fecha inicio",
                                temporaryLoan,
                            });
                        }
                        temporaryLoan = await Schedule.findOne({
                            where: {
                                type: "Prestamo",
                                ambientId: req.body.ambientId,
                                startDate: {
                                    [Op.gt]: sd.format(),
                                },
                                endDate: {
                                    [Op.lte]: moment(
                                        `${sd.year()}-${sd.month()}-${sd.date()} ${ed.hours()}:${ed.minutes()}`
                                    ),
                                },
                            },
                        });
                        if (temporaryLoan) {
                            return res.json({
                                message:
                                    "No puedes programar dentro de un prestamo",
                                temporaryLoan,
                            });
                        }
                        temporaryLoan = await Schedule.findOne({
                            where: {
                                type: "Prestamo",
                                ambientId: req.body.ambientId,
                                startDate: {
                                    [Op.lt]: sd.format(),
                                },
                                endDate: {
                                    [Op.gte]: moment(
                                        `${sd.year()}-${sd.month()}-${sd.date()} ${ed.hours()}:${ed.minutes()}`
                                    ),
                                },
                            },
                        });
                        if (temporaryLoan) {
                            return res.json({
                                message:
                                    "No puedes programar dentro de un prestamo",
                                temporaryLoan,
                            });
                        }
                        temporaryLoan = await Schedule.findOne({
                            where: {
                                type: "Prestamo",
                                ambientId: req.body.ambientId,
                                startDate: {
                                    [Op.lt]: sd.format(),
                                },
                                endDate: {
                                    [Op.lte]: moment(
                                        `${sd.year()}-${sd.month()}-${sd.date()} ${ed.hours()}:${ed.minutes()}`
                                    ),
                                },
                            },
                        });
                        if (temporaryLoan) {
                            return res.json({
                                message:
                                    "No puedes programar dentro de un prestamo",
                                temporaryLoan,
                            });
                        }
                        if (
                            !isHoliday(
                                `${sd.year()}-${sd.month()}-${sd.date()}`
                            )
                        ) {
                            dates.push(sd.format());
                        }
                        sd.add(7, "days");
                    }
                    await Schedule.create({
                        type: "Prestamo",
                        state: "Aprobado",
                        ambientId: req.body.ambientId,
                        temporaryUserId: req.body.temporaryUserId,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                        periodicityId: 2,
                    });
                    return res.json({
                        message: "Nuevo prestamo creado",
                    });
                }
                // Mensual
                if (periodicity.id === 3) {
                    if (!req.body.day) {
                        return res.json({ message: "El dia es requerido" });
                    }
                    let sd = moment(req.body.startDate);
                    let ed = moment(req.body.endDate);
                    if (sd.day() === 0) {
                        return res.json({
                            message:
                                "La fecha de inicio no puede ser un domingo",
                        });
                    }
                    if (ed.day() === 0) {
                        return res.json({
                            message: "La fecha de fin no puede ser un domingo",
                        });
                    }
                    if (sd.day() != ed.day()) {
                        return res.json({
                            message:
                                "El dia de fin tiene que ser igual al dia de inicio",
                        });
                    }
                    let day = sd.day();
                    let startMonth = moment(sd).startOf("month");
                    let endMonth = moment(sd).endOf("month");
                    let nDay = 0;
                    let dates = [];
                    while (startMonth < endMonth) {
                        if (sd.day() === startMonth.day()) {
                            nDay++;
                            if (
                                sd.date() === startMonth.date()
                            ) {
                                let temporaryLoan = await Schedule.findOne({
                                    where:{
                                        type:'Prestamo',
                                        ambientId:req.body.ambientId,
                                        startDate: sd.format()
                                    }
                                });
                                if(temporaryLoan){
                                    return res.json({
                                        message: 'Ya existe un prestamo en esta fecha',
                                        temporaryLoan
                                    });
                                }
                                temporaryLoan = await Schedule.findOne({
                                    where:{
                                        type:'Prestamo',
                                        ambientId: req.body.ambientId,
                                        startDate: {
                                            [Op.gt]: sd.format(),
                                            [Op.lte]: moment(
                                                `${sd.year()}-${sd.month()}-${sd.date()} ${ed.hours()}:${ed.minutes()}`
                                            )
                                        }
                                    }
                                });
                                if(temporaryLoan){
                                    return res.json({
                                        message: 'No puedes programar dentro de un horario',
                                        temporaryLoan
                                    });
                                }
                                dates.push(sd.format());
                                break;
                            }
                        }
                        startMonth.add(1, "days");
                    }
                    sd.add(1, "month");
                    while (sd < ed) {
                        startMonth = moment(sd).startOf("month");
                        endMonth = moment(sd).endOf("month");
                        let n = 0;
                        while (startMonth <= endMonth) {
                            if (day === startMonth.day()) {
                                n++;
                                if (n === nDay) {
                                    let temporaryLoan = await Schedule.findOne({
                                        where:{
                                            type:'Prestamo',
                                            ambientId:req.body.ambientId,
                                            startDate: moment(`${startMonth.year()}-${startMonth.month()}-${startMonth.date()} ${sd.hours()}:${sd.minutes()}`)
                                        }
                                    });
                                    if(temporaryLoan){
                                        return res.json({
                                            message: 'Ya existe un prestamo en esta fecha',
                                            temporaryLoan
                                        });
                                    }
                                    temporaryLoan = await Schedule.findOne({
                                        where:{
                                            type:'Prestamo',
                                            ambientId: req.body.ambientId,
                                            startDate: {
                                                [Op.gt]: moment(`${startMonth.year()}-${startMonth.month()}-${startMonth.date()} ${sd.hours()}:${sd.minutes()}`),
                                                [Op.lte]: moment(`${startMonth.year()}-${startMonth.month()}-${startMonth.date()} ${ed.hours()}:${ed.minutes()}`)
                                            }
                                        }
                                    });
                                    if(temporaryLoan){
                                        return res.json({
                                            message: 'No puedes programar dentro de un horario',
                                            temporaryLoan
                                        });
                                    }
                                    dates.push(startMonth.format());
                                }
                            }
                            startMonth.add(1, "day");
                        }
                        sd.add(1, "month");
                    }
                    await Schedule.create({
                        type: "Prestamo",
                        state: "Aprobado",
                        ambientId: req.body.ambientId,
                        temporaryUserId: req.body.temporaryUserId,
                        startDate: req.body.startDate,
                        endDate: req.body.endDate,
                    });
                    return res.json({
                        message: "Nuevo prestamo creado",
                        dates
                    });
                }
                await Schedule.create({
                    type: "Prestamo",
                    state: "Aprobado",
                    ambientId: req.body.ambientId,
                    temporaryUserId: req.body.temporaryUserId,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                });
                return res.json({
                    message: "Nuevo prestamo creado",
                });
            } else {
                return res.json({
                    message: "Tu rol no puede hacer esta accion",
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                error,
            });
        }
    },
    updateTemporaryLoan: async function (req, res) {
        try {
            if (req.user.rol.id === 1) {
                if (!req.body.temporaryUserId) {
                    return res.json({
                        message: "El usuario/actividad temporal es requerido",
                    });
                }
                let temporaryUser = await TemporaryUserActivity.findByPk(
                    req.body.temporaryUserId
                );
                if (!temporaryUser) {
                    return res.json({
                        message: "Este usuario/actividad temporar no exite",
                    });
                }
                if (!req.body.startDate || !req.body.endDate) {
                    return res.json({ message: "Las fechas son requridas" });
                }
                let temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        startDate: req.body.startDate,
                    },
                });
                if (temporaryLoan) {
                    return res.json({
                        message: "Ya existe un prestamo en esta fecha",
                    });
                }
                temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        startDate: {
                            [Op.gt]: req.body.startDate,
                            [Op.lt]: req.body.endDate,
                        },
                    },
                });
                if (temporaryLoan) {
                    return res.json({
                        message: "No puedes programar dentro de un prestamo",
                    });
                }
                temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        endDate: {
                            [Op.gt]: req.body.startDate,
                            [Op.lte]: req.body.endDate,
                        },
                    },
                });
                if (temporaryLoan) {
                    return res.json({
                        message: "No puedes programar dentro de un prestamo",
                        temporaryLoan,
                    });
                }
                temporaryLoan = await Schedule.findOne({
                    where: {
                        type: "Prestamo",
                        ambientId: req.body.ambientId,
                        startDate: {
                            [Op.lt]: req.body.startDate,
                        },
                        endDate: {
                            [Op.gte]: req.body.endDate,
                        },
                    },
                });
                if (temporaryLoan) {
                    return res.json({
                        message: "No puedes programar dentro de un prestamo",
                    });
                }
                await Schedule.update({
                    type: "Prestamo",
                    state: "Aprobado",
                    ambientId: req.body.ambientId,
                    temporaryUserId: req.body.temporaryUserId,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                });
                return res.json({
                    message: "Nuevo prestamo creado",
                });
            } else {
                return res.json({
                    message: "Tu rol no puede hacer esta accion",
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                error,
            });
        }
    },
};
