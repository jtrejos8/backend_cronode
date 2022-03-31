const Competence = require("../../models").Competence;
module.exports = {
    detail: async function(req, res) {
        try {
            let competences = await Competence.findAll({
                attributes: ["id", "code", "description", "summary", "hours"]
            });
            return res.status(200).json(competences);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error);
        }
    },
    index: async function(req, res) {
        try {
          if(req.user.rol.id == 1){
            let competences = await Competence.findAll({
                include: [{
                    model: require('../../models').FormationProgram,
                    required: true,
                    as: 'formationProgram',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', ]
                    }
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            return res.status(200).json(competences);
          }
          return res.json({
            message:'Tu rol no puede hacer esta accion'
          });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    show: async function(req, res) {
        try {
          if(req.user.rol.id == 1){
            let competence = await Competence.findByPk(req.params.id, {
                include: [{
                    model: require('../../models').FormationProgram,
                    required: true,
                    as: 'formationProgram',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', ]
                    }
                }],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            if (competence) return res.status(200).json(competence);
            return res.status(404).json("Competencia no encontrada");
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
                await Competence.create({
                    code: req.body.code,
                    description: req.body.description,
                    summary: req.body.summary,
                    hours: req.body.hours,
                    formationProgramId: req.body.formationProgramId
                });
                return res.status(201).json("Nueva competencia creada");
            }
            return res.json({
                message: 'Tu rol no puede realizar esta accion'
            });
        } catch (error) {
            return res.json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Competence.update({
                    code: req.body.code,
                    description: req.body.description,
                    summary: req.body.summary,
                    hours: req.body.hours,
                    formationProgramId: req.body.formationProgramId,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id 
                    }
                });
                if (data[0] > 0) return res.status(200).json("Competencia actualizada");
                return res.status(404).json("Competencia no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede realizar esta accion'
            });
        } catch (error) {
            if (error.original.errno == 1062) {
                res.status(400).json("Competencia ya existente");
            } else {
                res.status(400).json(error);
            }
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await Competence.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Competencia eliminada");
                return res.status(404).json("Competencia no encontrada");
            }
            return res.json({
                message: 'Tu rol no puede realizar esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Esta competencia esta asociado a un resultado de aprendizaje, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};