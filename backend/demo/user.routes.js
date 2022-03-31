const { Router } = require("express");

const router = Router();

/**
 * @swagger
 * "/demo/users/excel/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para exportar el horario de un usuario en especifico en excel."
 *     parameters:
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get('/users/excel/:id', function (req, res) {
  return res.json('Devuelve un archivo de excel con el horario del usuario')
});
/**
 * @swagger
 * "/demo/users/pfd/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para exportar el horario de un usuario en especifico en pfd."
 *     parameters:
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/pdf/:id", function (req, res) {
  return res.json('Devuelve un archivo pdf con el horario del usuario')
});
/**
 * @swagger
 * "/demo/users/detail":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para obtener informacion reducida de los usuarios."
 *     parameters:
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/detail", function (req, res) {
  let data = [
    {
      "id": 1,
      "username": "Adriana Rodríguez Morales",
      "document": "51808949"
  },
  {
      "id": 2,
      "username": "Alejandro Moncada Betancur",
      "document": "75099551"
  },
  ];
  return res.json(data);
});

/**
 * @swagger
 * "/demo/users/schedules":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para obtener todos los usuarios con sus respectivos horarios."
 *     parameters:
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/schedules", function (req, res) {
  let data = [
    {
        "id": 4,
        "username": "Alexandra Naranjo Cardona",
        "misena_email": "alexa_nc@misena.edu.co ",
        "institutional_email": "alexa_nc@misena.edu.co ",
        "password": "$2b$10$FRprbV5iYo9xW7DTQiXCIOu4cO4OZSvWqzci3S6nZZiTjSR5IxEcC",
        "document": "31321612",
        "birthdate": "2020-06-07T05:00:00.000Z",
        "phone": "3135217056",
        "phone_ip": "",
        "gender": "F",
        "positionId": 5,
        "rolId": 2,
        "contractTypeId": 3,
        "profession": "Licenciada en Lenguas Modernas",
        "grade": 0,
        "isBossArea": false,
        "last_academic_level": "Profesional",
        "state": "Activo",
        "photo": null,
        "token": null,
        "email_state": false,
        "createdAt": "2020-09-15T02:55:53.000Z",
        "updatedAt": "2020-09-15T02:55:53.000Z",
        "schedules": [
            {
                "id": 1,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-09-14T12:00:00.000Z",
                "endDate": "2020-09-14T14:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 2,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-09-14T15:00:00.000Z",
                "endDate": "2020-09-14T17:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 3,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-09-14T19:00:00.000Z",
                "endDate": "2020-09-14T22:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 4,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-09-14T12:00:00.000Z",
                "endDate": "2020-09-14T13:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 5,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-09-14T13:30:00.000Z",
                "endDate": "2020-09-14T15:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 6,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-09-14T16:00:00.000Z",
                "endDate": "2020-09-14T18:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 7,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Jueves",
                "startDate": "2020-09-14T18:00:00.000Z",
                "endDate": "2020-09-15T03:00:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            },
            {
                "id": 8,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Viernes",
                "startDate": "2020-09-14T18:00:00.000Z",
                "endDate": "2020-09-15T03:00:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "programation": {
                    "id": 1,
                    "startDate": "2020-09-15T02:56:03.000Z",
                    "endDate": "2020-11-14T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 1,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-09-15T02:56:03.000Z",
                        "electiveEndDate": "2020-09-15T02:56:03.000Z",
                        "practiceStartDate": "2020-09-15T02:56:03.000Z",
                        "practiceEndDate": "2020-09-15T02:56:03.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-09-15T02:56:03.000Z",
                            "updatedAt": "2020-09-15T02:56:03.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-09-15T02:56:03.000Z",
                                "updatedAt": "2020-09-15T02:56:03.000Z"
                            }
                        }
                    },
                    "municipality": {
                        "id": 1,
                        "name": "Aguadas",
                        "zoneId": 6,
                        "createdAt": "2020-09-15T02:56:03.000Z",
                        "updatedAt": "2020-09-15T02:56:03.000Z",
                        "ZoneId": 6
                    }
                }
            }
        ]
    },
    {
        "id": 1,
        "username": "Adriana Rodríguez Morales",
        "misena_email": "arodriguez949@misena.edu.co",
        "institutional_email": "adrrodriguez@sena.edu.co",
        "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
        "document": "51808949",
        "birthdate": "2020-05-11T05:00:00.000Z",
        "phone": "3176366444",
        "phone_ip": "62441",
        "gender": "F",
        "positionId": 2,
        "rolId": 2,
        "contractTypeId": 2,
        "profession": "",
        "grade": 11,
        "isBossArea": false,
        "last_academic_level": "Maestria",
        "state": "Activo",
        "photo": null,
        "token": null,
        "email_state": false,
        "createdAt": "2020-09-15T02:55:52.000Z",
        "updatedAt": "2020-09-15T02:55:52.000Z",
        "schedules": []
    },];
  return res.json({schedules: data});
});
/**
 * @swagger
 * "/api/users/schedules/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para el horario de un usuario en especifico"
 *     parameters:
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/schedules/:id", function (req, res) {
  let data = {
    "id": 1,
    "username": "Adriana Rodríguez Morales",
    "misena_email": "arodriguez949@misena.edu.co",
    "institutional_email": "adrrodriguez@sena.edu.co",
    "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
    "document": "51808949",
    "birthdate": "2020-05-11T05:00:00.000Z",
    "phone": "3176366444",
    "phone_ip": "62441",
    "gender": "F",
    "positionId": 2,
    "rolId": 2,
    "contractTypeId": 2,
    "profession": "",
    "grade": 11,
    "isBossArea": false,
    "last_academic_level": "Maestria",
    "state": "Activo",
    "photo": null,
    "token": null,
    "email_state": false,
    "createdAt": "2020-09-15T02:55:52.000Z",
    "updatedAt": "2020-09-15T02:55:52.000Z",
    "schedules": []
};
  return res.json({schedules: data});
});

/**
 * @swagger
 * "/demo/passwordRecovery":
 *   post:
 *     tags: [users]
 *     summary: "Se usa para solicitar un codigo de verificacion para la recuperacion de contraseña."
 *     parameters:
 *       - name: "misena_email" 
 *         description: "Correo misena para comprobar la existencia del usuario y si es correcta, enviar un codigo de verficacion"
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.post('/passwordRecovery', function (req, res) {
  return res.json('Envia un codigo de verificacion al correo del usuario que desea recuperar la contraseña')
});
/**
 * @swagger
 * "/demo/passwordRecovery2":
 *   post:
 *     tags: [users]
 *     summary: "Se usa para validar el codigo de verificacion y si es valido recuperar la contraseña."
 *     parameters:
 *       - name: "code" 
 *         description: "Codigo de verificacion"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "userId" 
 *         description: "Id del usuario a cambiar contraseña"
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: "newPassword" 
 *         description: "Nueva contraseña"
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.post('/passwordRecovery2', function (req, res) {
  return res.json('Se verifica la atenticidad del codigo y se actualiza la contraseña')
});

router
  .route("/users")
  /**
   * @swagger
   * "/demo/users":
   *   get:
   *     tags: [users]
   *     summary: "Se usa para obtener todos los usuarios del sistema."
   *     parameters:
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let users = [
      {
          "id": 1,
          "username": "Adriana Rodríguez Morales",
          "misena_email": "arodriguez949@misena.edu.co",
          "institutional_email": "adrrodriguez@sena.edu.co",
          "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
          "document": "51808949",
          "birthdate": "2020-05-11T05:00:00.000Z",
          "phone": "3176366444",
          "phone_ip": "62441",
          "gender": "F",
          "positionId": 2,
          "rolId": 2,
          "contractTypeId": 2,
          "profession": "",
          "grade": 11,
          "isBossArea": false,
          "last_academic_level": "Maestria",
          "state": "Activo",
          "photo": null,
          "token": null,
          "email_state": false,
          "position": {
              "id": 2,
              "name": "Instructor Planta temporal",
              "type": "Instructor",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "rol": {
              "id": 2,
              "name": "Instructor",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "contractType": {
              "id": 2,
              "name": "Planta Temporal",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "contract": [],
          "zones": [
              {
                  "id": 7,
                  "name": "Caldas",
                  "createdAt": "2020-09-15T02:56:03.000Z",
                  "updatedAt": "2020-09-15T02:56:03.000Z",
                  "UserZones": {
                      "createdAt": "2020-09-15T02:55:52.000Z",
                      "updatedAt": "2020-09-15T02:55:52.000Z",
                      "UserId": 1,
                      "ZoneId": 7
                  }
              }
          ],
          "otherActivity": [
              {
                  "id": 1,
                  "name": "Salida escolar",
                  "typeActivityId": 1,
                  "day": "Lunes",
                  "startDate": "2020-08-11T00:00:00.000Z",
                  "endDate": "2020-08-12T00:00:00.000Z",
                  "userId": 1,
                  "createdAt": "2020-09-15T03:35:06.000Z",
                  "updatedAt": "2020-09-15T03:35:06.000Z",
                  "UserId": 1
              }
          ]
      },
      {
          "id": 2,
          "username": "Alejandro Moncada Betancur",
          "misena_email": "amoncadab@misena.edu.co",
          "institutional_email": null,
          "password": "$2b$10$kaPuV3dQXGNJjQSqobFOQeBNwJIv0a1uNR30O3SlDT.pWbYG8lGtS",
          "document": "75099551",
          "birthdate": "2020-11-26T05:00:00.000Z",
          "phone": "3005597955",
          "phone_ip": "",
          "gender": "M",
          "positionId": 18,
          "rolId": 3,
          "contractTypeId": 3,
          "profession": "Ingeniero de Sistemas y Telecomunicaciones",
          "grade": 0,
          "isBossArea": false,
          "last_academic_level": "Maestria",
          "state": "Activo",
          "photo": null,
          "token": null,
          "email_state": false,
          "position": {
              "id": 18,
              "name": "Apoyo Sennova",
              "type": "Apoyo",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "rol": {
              "id": 3,
              "name": "Consulta",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "contractType": {
              "id": 3,
              "name": "Contratista",
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "contract": [],
          "zones": [
              {
                  "id": 7,
                  "name": "Caldas",
                  "createdAt": "2020-09-15T02:56:03.000Z",
                  "updatedAt": "2020-09-15T02:56:03.000Z",
                  "UserZones": {
                      "createdAt": "2020-09-15T02:55:53.000Z",
                      "updatedAt": "2020-09-15T02:55:53.000Z",
                      "UserId": 2,
                      "ZoneId": 7
                  }
              }
          ],
          "otherActivity": []
      },]
      return res.json({users});
  })
  /**
   * @swagger
   * "/demo/users":
   *   post:
   *     tags: [users]
   *     summary: "Se usa para crear un usuario."
   *     parameters:
   *       - name: "username" 
   *         description: "Nombre completo del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "misena_email" 
   *         description: "Correo misena del usuario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "institutional_email" 
   *         description: "Correo sena del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "document" 
   *         description: "Documento de identidad del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "birthdate" 
   *         description: "Fecha de nacimiento"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone" 
   *         description: "Numero celular del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone_ip" 
   *         description: "Telefono de oficina del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "gender" 
   *         description: "Genero del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "positionId" 
   *         description: "Id del cargo que tiene asignado el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "rolId" 
   *         description: "Id del rol que tendra el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "contractTypeId" 
   *         description: "Id del tipo de contrato que tiene el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "profession" 
   *         description: "Profesion del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "grade" 
   *         description: "Grado del usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isBossArea" 
   *         description: "Si el usuario es jefe de area (1) y si no (0), por defecto es no"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "last_academic_level" 
   *         description: "Ultimo nivel academico del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "photo" 
   *         description: "Foto del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Usario creado');
  });
router
  .route("/users/:id")
  /**
   * @swagger
   * "/demo/users/{id}":
   *   get:
   *     tags: [users]
   *     summary: "Se usa para obtener un usuario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = {
      "id": 1,
      "username": "Adriana Rodríguez Morales",
      "misena_email": "arodriguez949@misena.edu.co",
      "institutional_email": "adrrodriguez@sena.edu.co",
      "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
      "document": "51808949",
      "birthdate": "2020-05-11T05:00:00.000Z",
      "phone": "3176366444",
      "phone_ip": "62441",
      "gender": "F",
      "positionId": 2,
      "rolId": 2,
      "contractTypeId": 2,
      "profession": "",
      "grade": 11,
      "isBossArea": false,
      "last_academic_level": "Maestria",
      "state": "Activo",
      "photo": null,
      "token": null,
      "email_state": false,
      "position": {
          "id": 2,
          "name": "Instructor Planta temporal",
          "type": "Instructor",
          "createdAt": "2020-09-15T02:55:52.000Z",
          "updatedAt": "2020-09-15T02:55:52.000Z"
      },
      "rol": {
          "id": 2,
          "name": "Instructor",
          "createdAt": "2020-09-15T02:55:52.000Z",
          "updatedAt": "2020-09-15T02:55:52.000Z"
      },
      "contractType": {
          "id": 2,
          "name": "Planta Temporal",
          "createdAt": "2020-09-15T02:55:52.000Z",
          "updatedAt": "2020-09-15T02:55:52.000Z"
      },
      "contract": [],
      "zones": [
          {
              "id": 7,
              "name": "Caldas",
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z",
              "UserZones": {
                  "createdAt": "2020-09-15T02:55:52.000Z",
                  "updatedAt": "2020-09-15T02:55:52.000Z",
                  "UserId": 1,
                  "ZoneId": 7
              }
          }
      ],
      "otherActivity": [
          {
              "id": 1,
              "name": "Salida escolar",
              "typeActivityId": 1,
              "day": "Lunes",
              "startDate": "2020-08-11T00:00:00.000Z",
              "endDate": "2020-08-12T00:00:00.000Z",
              "userId": 1,
              "createdAt": "2020-09-15T03:35:06.000Z",
              "updatedAt": "2020-09-15T03:35:06.000Z",
              "UserId": 1
          }
      ]
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/users/{id}":
   *   put:
   *     tags: [users]
   *     summary: "Se usa para actualizar un usuario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "username" 
   *         description: "Nombre completo del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "misena_email" 
   *         description: "Correo misena del usuario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "institutional_email" 
   *         description: "Correo sena del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "document" 
   *         description: "Documento de identidad del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "birthdate" 
   *         description: "Fecha de nacimiento"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone" 
   *         description: "Numero celular del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone_ip" 
   *         description: "Telefono de oficina del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "gender" 
   *         description: "Genero del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "positionId" 
   *         description: "Id del cargo que tiene asignado el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "rolId" 
   *         description: "Id del rol que tendra el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "contractTypeId" 
   *         description: "Id del tipo de contrato que tiene el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "profession" 
   *         description: "Profesion del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "grade" 
   *         description: "Grado del usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isBossArea" 
   *         description: "Si el usuario es jefe de area (1) y si no (0), por defecto es no"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "last_academic_level" 
   *         description: "Ultimo nivel academico del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "photo" 
   *         description: "Foto del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Usuario actualizado');
  })
  /**
   * @swagger
   * "/demo/users/{id}":
   *   delete:
   *     tags: [users]
   *     summary: "Se usa para eliminar un usuario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Usuario eliminado con exito');
  });

/**
 * @swagger
 * "/demo/users/{id}/updatePassword":
 *   put:
 *     tags: [users]
 *     summary: "Se usa para actualizar la contraseña de un usuario en especifico."
 *     parameters:
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "password" 
   *         description: "Nueva contraseña del usuario"
   *         in: formData
   *         required: true
   *         type: string
 *     responses:
 *       200:
 *         description: "A succesfull response"
 */
router.put("/users/:id/updatePassword", function (req, res) {
  return res.json('Contraseña actualizada');
});

module.exports = router;
