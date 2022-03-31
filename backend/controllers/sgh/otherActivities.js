const OtherActivity = require("../../models").OtherActivity;
const Schedule = require('../../models/').Schedule;
const User = require("../../models").User;
const {
    Op
} = require("sequelize");
const {
    calcMinutes
} = require("../../functions.js");
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let otherActivities = await OtherActivity.findAll({
                    include: ["user", "typeActivity"],
                });
                return res.status(200).json(otherActivities);
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
                let otherActivity = await OtherActivity.findByPk(req.params.id, {
                    include: ["user", "typeActivity"],
                });
                if (otherActivity) return res.status(200).json(otherActivity);
                return res.status(404).json("Actividad no encontrado");
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
                let user = await User.findByPk(req.body.userId);
                if (!user) {
                    return res.status(400).json({
                        message: "Usuario no encontrado",
                    });
                }
                if (user.state == "Inactivo") {
                    return res.status(400).json({
                        message: "Este usuario esta inactivo",
                    });
                }

                // Verificacion de disponibilidad horarios

                // startDate === req.body.startDate
                let schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        startDate: req.body.startDate
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'Existe un horario programado a esta hora, no puedes programar'
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }

                // startDate < req.body.startDate & endDate > req.body.endDate
                schedule = await Schedule.findOne({
                    where:{
                        constantUserId:req.body.userId,
                        day:req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }
                // startDate < req.body.startDate & endDate === req.body.endDate
                schedule = await Schedule.findOne({
                    where:{
                        constantUserId:req.body.userId,
                        day:req.body.day,
                        endDate: req.body.endDate,
                        startDate: {
                            [Op.lt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }

                // Verificacion de disponibilidad otrasActividades

                // startDate === req.body.startDate
                let activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: req.body.startDate
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'Ya existe una actividad programada a esa hora'
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    })
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.startDate,
                            [Op.lt]: req.body.endDate
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    })
                }
                // startDate < req.body.startDate & endDate > req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    });
                }
                // startData < req.body.startDate & endDate === req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.startDate
                        },
                        endDate:req.body.endDate
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    });
                }
                await OtherActivity.create({
                    name: req.body.name,
                    typeActivityId: req.body.typeActivityId,
                    day: req.body.day,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    userId: req.body.userId,
                });
                return res.status(201).json("Nueva actividad creada");
            } else {
                return res.json({
                    message: 'Tu rol no puede hacer esta accion'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let otherActivity = await OtherActivity.findByPk(req.params.id);
                if (!otherActivity) {
                    return res.status(400).json({
                        message: "Esta actividad no existe",
                    });
                }
                if (req.body.userId) {
                    let user = await User.findByPk(req.body.userId);
                    if (!user) {
                        return res.status(400).json({
                            message: "Usuario no encontrado",
                        });
                    }
                    if (user.state == "Inactivo") {
                        return res.status(400).json({
                            message: "Este usuario esta inactivo",
                        });
                    }
                }

                // Verificacion de disponibilidad horarios

                // startDate === req.body.startDate
                let schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        startDate: req.body.startDate
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'Existe un horario programado a esta hora, no puedes programar'
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                schedule = await Schedule.findOne({
                    where: {
                        constantUserId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }

                // startDate < req.body.startDate & endDate > req.body.endDate
                schedule = await Schedule.findOne({
                    where:{
                        constantUserId:req.body.userId,
                        day:req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }
                // startDate < req.body.startDate & endDate === req.body.endDate
                schedule = await Schedule.findOne({
                    where:{
                        constantUserId:req.body.userId,
                        day:req.body.day,
                        endDate: req.body.endDate,
                        startDate: {
                            [Op.lt]: req.body.startDate
                        }
                    }
                });
                if (schedule) {
                    return res.json({
                        message: 'No puedes programar dentro de un horario'
                    });
                }

                // Verificacion de disponibilidad otrasActividades

                // startDate === req.body.startDate
                let activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: req.body.startDate,
                        id:{
                            [Op.ne]: req.params.id
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'Ya existe una actividad programada a esa hora'
                    });
                }
                // startDate < req.body.endDate & startDate > req.body.startDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.endDate,
                            [Op.gt]: req.body.startDate
                        },
                        id:{
                            [Op.ne]: req.params.id
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    })
                }
                // endDate > req.body.startDate & endDate < req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.startDate,
                            [Op.lt]: req.body.endDate
                        },
                        id:{
                            [Op.ne]: req.params.id
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    })
                }
                // startDate < req.body.startDate & endDate > req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        endDate: {
                            [Op.gt]: req.body.endDate,
                        },
                        startDate: {
                            [Op.lt]: req.body.startDate
                        },
                        id:{
                            [Op.ne]: req.params.id
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    });
                }
                // startData < req.body.startDate & endDate === req.body.endDate
                activity = await OtherActivity.findOne({
                    where: {
                        userId: req.body.userId,
                        day: req.body.day,
                        startDate: {
                            [Op.lt]: req.body.startDate
                        },
                        endDate:req.body.endDate,
                        id:{
                            [Op.ne]: req.params.id
                        }
                    }
                });
                if (activity) {
                    return res.json({
                        message: 'No puedes programar dentro de una actividad'
                    });
                }

                await OtherActivity.update({
                    name: req.body.name,
                    typeActivityId: req.body.typeActivityId,
                    day: req.body.day,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    userId: req.body.userId,
                    updatedAt: Date.now(),
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json("Actividad actualizada");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await OtherActivity.destroy({
                    where: {
                        id: req.params.id
                    },
                });
                if (data > 0) return res.status(200).json("Actividad eliminado");
                return res.status(404).json("Actividad no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};