const LearningResult = require("../../models").LearningResult;
module.exports = {
    detail: async function(req, res) {
        try {
            let learningResults = await LearningResult.findAll({
                attributes: ["id", "summary", "description"],
                include: [{
                    attributes: ["id", "description", "summary"],
                    model: require("../../models").Competence,
                    required: true,
                    as: "competence"
                }]
            });
            return res.status(200).json(learningResults);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    index: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let learningResults = await LearningResult.findAll({
                    include: [{
                        model: require('../../models').Competence,
                        as: 'competence',
                        required: true,
                        include:[{
                            model: require('../../models').FormationProgram,
                            as: 'formationProgram',
                            required: true,
                            include:['formationType']
                        }]
                    }]
                });
                return res.status(200).json({
                    learningResults
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
                let learningResult = await LearningResult.findByPk(req.params.id, {
                    include: [{
                        model: require('../../models').Competence,
                        as: 'competence',
                        required: true,
                        include:[{
                            model: require('../../models').FormationProgram,
                            as: 'formationProgram',
                            required: true,
                            include:['formationType']
                        }]
                    }]
                });
                if (learningResult) return res.status(200).json(learningResult);
                return res.status(404).json("Resultado de aprendizaje no encontrado");
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
                await LearningResult.create({
                    projectPhase: req.body.projectPhase,
                    description: req.body.description,
                    summary: req.body.summary,
                    hours: req.body.hours,
                    competenceId: req.body.competenceId,
                    associatedTrimesters: req.body.associatedTrimesters,
                    trimesterEvaluate: req.body.trimesterEvaluate
                });
                return res.status(201).json("Nuevo resultado de aprendizaje creado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await LearningResult.update({
                    projectPhase: req.body.projectPhase,
                    description: req.body.description,
                    summary: req.body.summary,
                    hours: req.body.hours,
                    competenceId: req.body.competenceId,
                    associatedTrimesters: req.body.associatedTrimesters,
                    trimesterEvaluate: req.body.trimesterEvaluate,
                    updatedAt: Date.now()
                }, {
                    where: {
                        id: req.params.id
                    }
                });
                if (data[0] > 0) return res.status(200).json("Resultado de aprendizaje actualizado");
                return res.status(404).json("Resultado de aprendizaje no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    destroy: async function(req, res) {
        try {
            if (req.user.rol.id == 1) {
                let data = await LearningResult.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                if (data > 0) return res.status(200).json("Resultado de aprendizaje eliminado");
                return res.status(404).json("Resultado de aprendizaje no encontrado");
            }
            return res.json({
                message: 'Tu rol no puede hacer esta accion'
            });
        } catch (error) {
            if (error.parent.errno == 1451) {
                return res.status(400).json({
                    message: "Este resultado de aprendizaje esta asociado a un horario, no se puede eliminar"
                });
            }
            return res.status(400).json(error);
        }
    }
};