const User = require("../../models").User;
module.exports = {
    index: async function (req, res) {
        try {
            let users = await User.findAll({
                attributes: ["id", "username", "document", "misena_email", "institutional_email", "positionId",],
                include: [{
                    model: require("../../models").Schedule,
                    required: false,
                    as: "schedules",
                    attributes: {
                        exclude: ["createdAt", "updatedAt", "type", "state", "learningResultId", "summary",],
                    },
                    include: [{
                        model: require("../../models").Programation,
                        as: "programation",
                        required: false,
                        include: [{
                            model: require("../../models").Group,
                            required: false,
                            as: "group",
                            attributes: ["id", "codeTab", "formationProgramId", "modalityId",],
                            include: [{
                                model: require("../../models").Modality,
                                as: "modality",
                                required: true,
                                attributes: ["id", "name"],
                            }, {
                                model: require("../../models").FormationProgram,
                                as: "formationProgram",
                                required: true,
                                attributes: ["id", "code", "name", "formationTypeId"],
                                include: [{
                                    model: require("../../models").FormationProgramType,
                                    as: "formationType",
                                    required: true,
                                    attributes: ["id", "name"],
                                },],
                            },],
                        },],
                        attributes: ["id", "startDate", "endDate", "trimester", "groupId",],
                    }, {
                        model: require("../../models").Ambient,
                        as: "ambient",
                        required: true,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                    }, {
                        model: require("../../models").User,
                        as: "constantUser",
                        required: true,
                        attributes: ["id", "username", "misena_email", "institutional_email", "document", "phone",],
                    },],
                }, {
                    model: require("../../models").Position,
                    required: true,
                    as: "position",
                    attributes: ["id", "name", "type"],
                },],
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};