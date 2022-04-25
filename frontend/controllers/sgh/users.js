const User = require("../../models").User;
const { Op } = require('sequelize');
const Notification = require("../../models").Notification;
const bcrypt = require("bcryptjs");
const pdf = require("html-pdf");
const path = require("path");
const createStringToPDF = require("../../helpers/exports/user/userPdf.js");
const createExcel = require("../../helpers/exports/user/userExcel");
const nodemailer = require('nodemailer');
const fs = require('fs');
const { request } = require("https");
module.exports = {
    passwordRecovery: async function (req, res) {
        try {
            let user = await User.findOne({
                where: {
                    misena_email: req.body.misena_email
                }
            });
            if (!user) {
                return res.json({ message: 'Este correo no se encuentra registrado en sistema' });
            }
            let code = Math.round(Math.random() * 10000);
            if (code < 1000) {
                code += "1"
            }
            code = parseInt(code);

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            });

            var mailOptions = {
                from: 'a.sbedoya200110@gmail.com',
                to: user.misena_email,
                subject: 'Codigo de verificacíon - Cronode',
                html: `
                <h1>Cronode</h1>
                <h3>Hola ${user.username}</h3>
                <p>Solicitaste una recuperacion de contraseña, tu codigo de verificacion es <strong>${code}</strong></p>
                `
            }
            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email Sent: ' + info.response);
            //     }
            // });
            req.session.code = code;
            return res.json({ message: 'Se ha enviado a tu correo un codigo de verificacion', userId: user.id });
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    passwordRecovery2: async function(req, res){
        try {
            if(req.session.code){
                if(req.body.code === null){
                    return res.json({message: 'El codigo es requerido'});
                }
                if(req.body.userId === null){
                    return res.json({message: 'El id del usuario es requerido'});
                }
                if(req.session.code != req.body.code){
                    req.session.destroy();
                    return res.json({
                        message: 'Codigo de verificacion invalido/incorrecto, solicitalo de nuevo'
                    });
                }
                let newPassword = await bcrypt.hash(req.body.newPassword, 10);
                await User.update({
                    password: newPassword
                }, {
                    where:{
                        id: req.body.userId
                    }
                });
                req.session.destroy();
                return res.status(200).json({message:'Tu contraseña ha sido actualizada correctamente'})
            }else{
                return res.json({message:'Ha ocurrido un error, porfavor intentalo de nuevo o mas tarde'});
            }
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    excel: async function (req, res) {
        try {
            let user = await User.findByPk(req.params.id, {
                include: [{
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "programationId", "learningResultId", "ambientId",],
                    },
                    model: require("../../models").Schedule,
                    required: true,
                    as: "schedules",
                    include: [{
                        model: require("../../models").Programation,
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt", "groupId", "municipalityId",],
                        },
                        as: "programation",
                        include: [{
                            model: require("../../models").Group,
                            attributes: {
                                exclude: ["createdAt", "updatedAt", "modalityId", "quantityLearners", "activeLearners", "electiveStartDate", "electiveEndDate", "practiceStartDate", "practiceEndDate", "managerId", "formationProgramId", "groupState", "offer",],
                            },
                            required: true,
                            as: "group",
                            include: [{
                                attributes: {
                                    exclude: ["createdAt", "updatedAt", "isRegisterQualified", "isRegisterQualifiedDate",],
                                },
                                model: require("../../models").FormationProgram,
                                required: true,
                                as: "formationProgram",
                                include: [{
                                    attributes: {
                                        exclude: ["createdAt", "updatedAt"],
                                    },
                                    model: require("../../models").FormationProgramType,
                                    required: true,
                                    as: "formationType",
                                },],
                            }, {
                                attributes: {
                                    exclude: ["createdAt", "updatedAt"],
                                },
                                model: require("../../models").Modality,
                                required: true,
                                as: "modality",
                            },],
                        }, {
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                            model: require("../../models").Municipality,
                            required: true,
                            as: "municipality",
                        },],
                    }, {
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        model: require("../../models").Ambient,
                        required: true,
                        as: "ambient",
                    },],
                }, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                    model: require("../../models").Rol,
                    required: true,
                    as: "rol",
                }, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                    model: require("../../models").Position,
                    required: true,
                    as: "position",
                }, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                    model: require("../../models").ContractType,
                    required: true,
                    as: "contractType",
                },],
                attributes: {
                    exclude: ["createdAt", "updatedAt", "misena_email", "institutional_email", "password", "birthdate", "phone", "phone_ip", "gender", "rolId", "positionId", "profession", "last_academic_level", "photo", "email_state",],
                },
            });
            if (!user) return res.status(404).json("Usuario no encontrado");
            let wb = createExcel(user);
            return wb.write("schedule.xlsx", res);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    detail: async function (req, res) {
        try {
            let users = await User.findAll({
                attributes: ["id", "username", "document"],
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    index: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let users = await User.findAll({
                    where: {
                        rolId: {
                            [Op.ne]: 4
                        }
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: ["position", "rol", "contractType", "contract", "zones", "otherActivity"],
                });
                let learners = await User.findAll({
                    where: {
                        rolId: 4
                    },
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: ["position", "rol", "contractType", "contract", "zones", "otherActivity"],
                });
                return res.status(200).json({
                    users,
                    learners
                });
            }
            if (req.user.rol.id == 2) {
                let user = await User.findByPk(req.user.id, {
                    include: ['position', 'rol', 'contractType', 'contract', 'zones', 'otherActivity', 'notifications']
                })
                return res.json({
                    user
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso acceso a esta informacion'
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    show: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let user = await User.findByPk(req.params.id, {
                    include: ["position", "rol", "contractType", "contract", "zones", "otherActivity", "schedules"],
                });
                if (user) return res.status(200).json(user);
                return res.status(404).json("Usuario no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    create: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let user = await User.create({
                    username: req.body.username,
                    misena_email: req.body.misena_email,
                    institutional_email: req.body.institutional_email,
                    password: req.body.document + "" + new Date(req.body.birthdate).getDate(),
                    document: req.body.document,
                    birthdate: req.body.birthdate,
                    phone: req.body.phone,
                    phone_ip: req.body.phone_ip,
                    gender: req.body.gender,
                    positionId: req.body.positionId,
                    rolId: req.body.rolId,
                    contractTypeId: req.body.contractTypeId,
                    profession: req.body.profession,
                    grade: req.body.grade,
                    last_academic_level: req.body.last_academic_level,
                    isBossArea: req.body.isBossArea,
                    photo: req.file ? req.file.path : null,
                });
                if (user) {
                    if (req.body.zones) {
                        await user.setZones(req.body.zones);
                    }
                }
                return res.status(201).json({message: 'Nuevo usuario creado', user});
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    update: async function (req, res) {
        try {
            if (req.user.rol.id == 1) {
                let user = await User.findByPk(req.params.id);
                if (!user) {
                    return res.status(404).json({
                        message: 'Este usuario no existe'
                    });
                }
                if(req.file){
                    await User.update({
                        username: req.body.username,
                        misena_email: req.body.misena_email,
                        institutional_email: req.body.institutional_email,
                        document: req.body.document,
                        birthdate: req.body.birthdate,
                        phone: req.body.phone,
                        phone_ip: req.body.phone_ip,
                        gender: req.body.gender,
                        positionId: req.body.positionId,
                        rolId: req.body.rolId,
                        contractTypeId: req.body.contractTypeId,
                        profession: req.body.profession,
                        grade: req.body.grade,
                        last_academic_level: req.body.last_academic_level,
                        isBossArea: req.body.isBossArea,
                        photo: req.file ? req.file.path : null,
                        state: req.body.state,
                        updatedAt: Date.now(),
                    }, {
                        where: {
                            id: user.id
                        },
                    });
                }else{
                    await User.update({
                        username: req.body.username,
                        misena_email: req.body.misena_email,
                        institutional_email: req.body.institutional_email,
                        document: req.body.document,
                        birthdate: req.body.birthdate,
                        phone: req.body.phone,
                        phone_ip: req.body.phone_ip,
                        gender: req.body.gender,
                        positionId: req.body.positionId,
                        rolId: req.body.rolId,
                        contractTypeId: req.body.contractTypeId,
                        profession: req.body.profession,
                        grade: req.body.grade,
                        last_academic_level: req.body.last_academic_level,
                        isBossArea: req.body.isBossArea,
                        state: req.body.state,
                        updatedAt: Date.now(),
                    }, {
                        where: {
                            id: user.id
                        },
                    });
                }
                
                if (req.body.zones) {
                    if (user.state == "Activo") {
                        await user.setZones(req.body.zones);
                        if (req.user.id != user.id) {
                            await Notification.create({
                                userId: user.id,
                                state: 'Pendiente',
                                title: 'Cambio de informacion - Zonas',
                                description: 'Te hicieron un cambio de informacion!!',
                                type: 'cambio de informacion'
                            });
                        }
                        return res.status(200).json("Usuario actualizado");
                    } else {
                        return res.status(400).json({
                            message: "Este usuario esta inactivo, se pueden asignar zonas",
                        });
                    }
                } else {
                    if (req.user.id != user.id) {
                        await Notification.create({
                            userId: user.id,
                            state: 'Pendiente',
                            title: 'Cambio de informacion - Personal',
                            description: 'Te hicieron un cambio de informacion, revisa',
                            type: 'cambio de informacion'
                        });
                    }
                    return res.status(200).json("Usuario actualizado");
                }
            }
            if (req.user.rol.id == 2) {
                let user = await User.findByPk(req.params.id);
                if (!user) {
                    return res.json({
                        message: 'Este usuario no existe'
                    });
                }
                await User.update({
                    misena_email: req.body.misena_email,
                    birthdate: req.body.birthdate,
                    phone: req.body.phone,
                    profession: req.body.profession,
                    last_academic_level: req.body.last_academic_level,
                    photo: req.file ? req.file.path : null
                }, {
                    where: {
                        id: user.id
                    }
                });
                return res.json({
                    message: 'Usuario actualizado'
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso a esta informacion'
            });
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    destroy: async function (req, res) {
        try {
            let data = await User.destroy({
                where: {
                    id: req.params.id
                },
            });
            if (data > 0) return res.status(200).json("Usuario eliminado");
            return res.status(404).json("Usuario no encontrado");
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este usuario esta asociado a otras entidades, no se puede eliminar",
                });
            }
            return res.status(400).json(error);
        }
    },
    updatePassword: async function (req, res) {
        try {
            let password = await bcrypt.hash(req.body.password, 10);
            let data = await User.update({
                password: password
            }, {
                where: {
                    id: req.params.id
                }
            });
            if (data[0] > 0) return res.status(200).json("Contraseña actualizada");
            return res.status(404).json("Usuario no encontrado");
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    getSchedules: async function (req, res) {
        try {
            /**
             * Rols -> Coordinador, almacen, consulta
             */
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1) {
                let users = await User.findAll({
                    where: {
                        rolId: 2
                    },
                    include: [{
                        model: require('../../models').Schedule,
                        as: 'schedules',
                        required: false,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'AmbientId', 'ProgramationId']
                        },
                        include: [{
                            model: require('../../models/').Programation,
                            as: 'programation',
                            required: false,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            include: [{
                                model: require('../../models/').Group,
                                as: 'group',
                                required: false,
                                include: [{
                                    model: require('../../models/').FormationProgram,
                                    as: 'formationProgram',
                                    required: false,
                                    include: ['formationType']
                                }]
                            }, 'municipality']
                        }]
                    }]
                });
                return res.status(200).json({
                    schedules: users
                });
            }
            // Rols -> Instructor
            if (req.user.rol.id == 2) {
                let user = await User.findByPk(req.user.id, {
                    include: [{
                        model: require('../../models/').Schedule,
                        as: 'schedules',
                        required: false,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'ProgramationId', 'AmbientId']
                        },
                        include: [{
                            model: require('../../models/').Programation,
                            as: 'programation',
                            required: false,
                            include: [{
                                model: require('../../models/').Group,
                                as: 'group',
                                required: false,
                                include: [{
                                    model: require('../../models/').FormationProgram,
                                    as: 'formationProgram',
                                    required: false,
                                    include: ['formationType']
                                }]
                            }]
                        }]
                    }]
                });
                return res.json({
                    schedules: user
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso a esta informacion'
            })
        } catch (error) {
            return res.json(error);
        }
    },
    getSchedule: async function (req, res) {
        try {
            if (req.user.rol.id == 3 || req.user.rol.id == 5 || req.user.rol.id == 1) {
                let users = await User.findByPk(req.params.id, {
                    where: {
                        rolId: 2
                    },
                    include: [{
                        model: require('../../models').Schedule,
                        as: 'schedules',
                        required: false,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'AmbientId', 'ProgramationId']
                        },
                        include: [{
                            model: require('../../models/').Programation,
                            as: 'programation',
                            required: false,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            include: [{
                                model: require('../../models/').Group,
                                as: 'group',
                                required: false,
                                include: [{
                                    model: require('../../models/').FormationProgram,
                                    as: 'formationProgram',
                                    required: false,
                                    include: ['formationType']
                                }]
                            }, 'municipality']
                        }]
                    }]
                });
                return res.status(200).json({
                    schedules: users
                });
            }
            return res.json({
                message: 'Tu rol no tiene acceso a esta informacion'
            });
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    getSchedulesByIdForPDF: async function (req, res) {
        try {
            let user = await User.findByPk(req.params.id, {
                include: [{
                    model: require('../../models/').Schedule,
                    as: 'schedules',
                    include: [{
                        model: require('../../models/').Ambient,
                        as: 'ambient',
                        required: true,
                        include: [{
                            model: require('../../models/').User,
                            as: 'user',
                            required: false
                        }]
                    }, {
                        model: require('../../models/').Programation,
                        as: 'programation',
                        required: true,
                        include: [{
                            model: require('../../models/').Group,
                            as: 'group',
                            required: true,
                            include: [{
                                model: require('../../models/').FormationProgram,
                                as: 'formationProgram',
                                required: true
                            }]
                        }, {
                            model: require('../../models/').Municipality,
                            as: 'municipality',
                            required: true
                        }]
                    }, {
                        model: require('../../models/').LearningResult,
                        as: 'learningResult',
                        required: true,
                        include: ['competence']
                    }]
                },],
            });
            if (!user) return res.status(404).json("Usuario no encontrado");
            pdf.create(createStringToPDF(user), {
                orientation: "landscape",
            }).toFile("./schedule.pdf", function (err, resp) {
                if (err) {
                    console.log(err);
                    return res.status(200).json(error);
                } else {
                    return res.status(200).sendFile(path.resolve("schedule.pdf"));
                }
            });
        } catch (error) {
            console.log(error);
        }
    },
};