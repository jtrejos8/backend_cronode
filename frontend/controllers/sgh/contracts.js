const Contract = require("../../models").Contract;
const User = require("../../models").User;
module.exports = {
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let contracts = await Contract.findAll({
                    include: [{
                        model: require("../../models").User,
                        required: true,
                        as: "user",
                        attributes: ["id", "username", "misena_email", "phone", "document"],
                        include: [{
                            model: require("../../models").Position,
                            required: true,
                            as: "position",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        }, ],
                    }, ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                });
                return res.status(200).json(contracts);
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
                let contract = await Contract.findByPk(req.params.id, {
                    include: [{
                        model: require("../../models").User,
                        required: true,
                        as: "user",
                        attributes: ["id", "username", "misena_email", "phone", "document"],
                        include: [{
                            model: require("../../models").Position,
                            required: true,
                            as: "position",
                            attributes: {
                                exclude: ["createdAt", "updatedAt"],
                            },
                        }, ],
                    }, ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                });
                if (contract) return res.status(200).json(contract);
                return res.status(404).json("Contrato no encontrado");
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
                        message: "Este usuario no se encuentra activo",
                    });
                }
                if (user.contractTypeId !== 3) {
                    return res.status(400).json({
                        message: "Este usuario no es contratista",
                    });
                }
                const contract = await Contract.create({
                    name: req.body.name,
                    description: req.body.description,
                    userId: req.body.userId,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                });
                return res.status(201).json({message: "Nuevo contrato creado", contract});
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },
    update: async function(req, res) {
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
                        message: "Este usuario no se encuentra activo",
                    });
                }
                if (user.contractTypeId !== 3) {
                    return res.status(400).json({
                        message: "Este usuario no es contratista",
                    });
                }
                await Contract.update({
                    name: req.body.name,
                    description: req.body.description,
                    userId: req.body.userId,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    updatedAt: Date.now(),
                }, {
                    where: {
                        id: req.params.id,
                    },
                });
                return res.status(200).json("Contrato actualizado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.json(error);
        }
    },
    destroy: async function(req, res) {
        try {
          if(req.user.rol.id == 1){
            let data = await Contract.destroy({
                where: {
                    id: req.params.id
                },
            });
            if (data > 0) return res.status(200).json("Contrato eliminado");
            return res.status(404).json("Contrato no encontrado");
          }
          return res.json({
            message:'Tu rol no puede hacer esta accion'
          });
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
};