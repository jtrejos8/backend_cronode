const Ambient = require("../../models").Ambient;
const User = require("../../models").User;
const pdf = require("html-pdf");
const path = require("path");
const createExcel = require("../../helpers/exports/ambient/ambientExcel");
const createStringToPDF = require("../../helpers/exports/ambient/ambientPdf");
module.exports = {
  detail: async function (req, res) {
    try {
      let ambients = await Ambient.findAll({
        attributes: ["id", "name"],
      });
      return res.status(200).json(ambients);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  index: async function (req, res) {
    try {
      if (req.user.rol.id == 1) {
        let ambients = await Ambient.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: {
            model: require("../../models").User,
            as: "user",
            required: false,
            attributes: [
              "id",
              "username",
              "misena_email",
              "document",
              "phone",
              "positionId",
            ],
            include: {
              model: require("../../models").Position,
              required: true,
              as: "position",
              attributes: ["id", "name", "type"],
            },
          },
        });
        return res.status(200).json(ambients);
      }
      return res.json({
        message: "Tu rol no puede hacer esta accion",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  show: async function (req, res) {
    try {
      if (req.user.rol.id == 1) {
        let ambient = await Ambient.findByPk(req.params.id, {
          include: [
            {
              model: require("../../models/").User,
              as: "user",
              required: false,
              attributes: [
                "id",
                "username",
                "misena_email",
                "document",
                "phone",
                "positionId",
              ],
              include: {
                model: require("../../models/").Position,
                required: true,
                as: "position",
                attributes: ["id", "name", "type"],
              },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (ambient) return res.status(200).json(ambient);
        return res.status(404).json("Ambiente no encontrado");
      }
      return res.json({
        message: "Tu rol no puede hacer esta accion",
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  create: async function (req, res) {
    try {
      if (req.user.rol.id == 1) {
        if (req.body.userId) {
          let user = await User.findByPk(req.body.userId);
          if (!user) {
            return res.json({
              message: "Usuario no encontrado",
            });
          }
          if (user.state == "Inactivo") {
            return res.status(400).json({
              message: "Este usuario no se encuentra activo",
            });
          }
        }
        await Ambient.create({
          name: req.body.name,
          state: req.body.state,
          usability: req.body.usability,
          userId: req.body.userId,
        });
        return res.status(201).json("Nuevo ambiente creado");
      }
      return res.json({
        message: "Tu rol no puede hacer esta accion",
      });
    } catch (error) {
      if (error.original.errno == 1062) {
        res.status(400).json({
          message: "Ambiente ya existente",
        });
      } else {
        res.status(400).json(error);
      }
    }
  },
  update: async function (req, res) {
    try {
      if (req.user.rol.id == 1) {
        if (req.body.userId) {
          let user = await User.findByPk(req.body.userId);
          if (!user) {
            return res.json({
              message: "Usuario no encontrado",
            });
          }
          if (user.state == "Inactivo") {
            return res.status(400).json({
              message: "Este usuario no se encuentra activo",
            });
          }
        }
        await Ambient.update(
          {
            name: req.body.name,
            state: req.body.state,
            usability: req.body.usability,
            userId: req.body.userId,
            updatedAt: Date.now(),
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        return res.status(200).json("Ambiente actualizado");
      }
      return res.json({
        message: "Tu rol no puede hacer esta accion",
      });
    } catch (error) {
      if (error.original.errno == 1062) {
        res.status(400).json("Ambiente ya existente");
      } else {
        res.status(400).json(error);
      }
    }
  },
  destroy: async function (req, res) {
    try {
      if (req.user.rol.id == 1) {
        let data = await Ambient.destroy({
          where: {
            id: req.params.id,
          },
        });
        if (data > 0) {
          return res.status(200).json("Ambiente eliminado");
        }
        return res.status(404).json("Ambiente no encontrado");
      }
      return res.json({
        message: "Tu rol no puede hacer esta accion",
      });
    } catch (error) {
      if (error.parent.errno == 1451) {
        return res.status(400).json({
          message:
            "Este ambiente esta asociado a un horario, no se puede eliminar",
        });
      }
      return res.status(400).json(error);
    }
  },
  getSchedules: async function (req, res) {
    try {
      if (
        req.user.rol.id == 1 ||
        req.user.rol.id == 3 ||
        req.user.rol.id == 5
      ) {
        let ambients = await Ambient.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: [
            {
              model: require("../../models/").User,
              as: "user",
              required: false,
            },
            {
              model: require("../../models/").Schedule,
              as: "schedule",
              required: false,
              include: [
                {
                  model: require("../../models/").Programation,
                  as: "programation",
                  required: false,
                  include: [
                    {
                      model: require("../../models/").Group,
                      as: "group",
                      required: false,
                      include: [
                        {
                          model: require("../../models/").FormationProgram,
                          as: "formationProgram",
                          required: false,
                          include: ["formationType"],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: require("../../models/").User,
                  as: "constantUser",
                  required: false,
                  attributes: [
                    "id",
                    "username",
                    "misena_email",
                    "document",
                    "phone",
                  ],
                },
                {
                  model: require("../../models/").TemporaryUserActivity,
                  as: "temporaryUser",
                  required: false,
                },
              ],
            },
          ],
        });
        return res.status(200).json({
          ambients,
        });
      }
      return res.json({
        message: "Tu rol no tiene acceso a esta informacion",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  getSchedule: async function (req, res) {
    try {
      if (
        req.user.rol.id == 1 ||
        req.user.rol.id == 3 ||
        req.user.rol.id == 5
      ) {
        let ambient = await Ambient.findByPk(req.params.id, {
          include: [
            {
              model: require("../../models/").Schedule,
              as: "schedule",
              required: false,
              include: [
                {
                  model: require("../../models/").Programation,
                  as: "programation",
                  required: false,
                  include: [
                    {
                      model: require("../../models/").Group,
                      as: "group",
                      required: false,
                      include: [
                        {
                          model: require("../../models/").FormationProgram,
                          as: "formationProgram",
                          required: false,
                          include: ["formationType"],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: require("../../models/").User,
                  as: "constantUser",
                  required: false,
                  attributes: [
                    "id",
                    "username",
                    "misena_email",
                    "document",
                    "phone",
                  ],
                },
                {
                  model: require("../../models/").TemporaryUserActivity,
                  as: "temporaryUser",
                  required: false,
                },
              ],
            },
            "user",
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        return res.status(200).json({
          ambient,
        });
      }
      return res.json({
        message: "Tu rol no tiene acceso a esta informacion",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  createPdf: async function (req, res) {
    try {
      if (
        req.user.rol.id == 1 ||
        req.user.rol.id == 3 ||
        req.user.rol.id == 5
      ) {
        let ambient = await Ambient.findByPk(req.params.id, {
          include: [
            {
              model: require("../../models/").Schedule,
              as: "schedule",
              required: false,
              where:{
                type:'Horario'
              },
              include: [
                {
                  model: require("../../models/").Programation,
                  as: "programation",
                  required: false,
                  include: [
                    {
                      model: require("../../models/").Group,
                      as: "group",
                      required: false,
                      include: [
                        {
                          model: require("../../models/").FormationProgram,
                          as: "formationProgram",
                          required: false,
                          include: ["formationType"],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: require("../../models/").User,
                  as: "constantUser",
                  required: false,
                  attributes: [
                    "id",
                    "username",
                    "misena_email",
                    "document",
                    "phone",
                  ],
                },
                {
                  model: require("../../models/").TemporaryUserActivity,
                  as: "temporaryUser",
                  required: false,
                },
              ],
            },
            "user",
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        // return res.json({ambient});
        pdf
          .create(createStringToPDF(ambient), {
            orientation: "landscape",
          })
          .toFile("./schedule.pdf", function (err, resp) {
            if (err) {
              return res.status(200).json(error);
            } else {
              return res.status(200).sendFile(path.resolve("schedule.pdf"));
            }
          });
      } else {
        return res.json({
          message: "Tu rol no tiene acceso a esta informacion",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  createExcel: async function (req, res) {
    try {
      if (
        req.user.rol.id == 1 ||
        req.user.rol.id == 3 ||
        req.user.rol.id == 5
      ) {
        let ambient = await Ambient.findByPk(req.params.id, {
          include: [
            {
              model: require("../../models/").Schedule,
              as: "schedule",
              required: false,
              where:{
                type: 'Horario'
              },
              include: [
                {
                  model: require("../../models/").Programation,
                  as: "programation",
                  required: false,
                  include: [
                    {
                      model: require("../../models/").Group,
                      as: "group",
                      required: false,
                      include: [
                        {
                          model: require("../../models/").FormationProgram,
                          as: "formationProgram",
                          required: false,
                          include: ["formationType"],
                        },
                      ],
                    },
                  ],
                },
                {
                  model: require("../../models/").User,
                  as: "constantUser",
                  required: false,
                  attributes: [
                    "id",
                    "username",
                    "misena_email",
                    "document",
                    "phone",
                  ],
                },
                {
                  model: require("../../models/").TemporaryUserActivity,
                  as: "temporaryUser",
                  required: false,
                },
              ],
            },
            "user",
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        if (!ambient) return res.status(404).json("Ambiente no encontrado");
        // return res.json({ambient});
        let wb = createExcel(ambient);
        return wb.write("schedule.xlsx", res);
      } else {
        return res.json({
          message: "Tu rol no tiene acceso a esta informacion",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
