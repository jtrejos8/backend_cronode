const { Router } = require("express");

const router = Router();
/**
 * @swagger
 * paths:
 *  /demo/ambients/schedules:
 *    get:
 *      summary: "Se usa para obtener los horarios de todos los ambientes"
 *      tags:
 *        - ambients
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/schedules", function(req, res){
    let data = [
        {
            "id": 1,
            "name": "SISTEMAS 1",
            "state": "activo",
            "usability": "Tecnologicos",
            "userId": null,
            "user": null,
            "schedule": [
                {
                    "id": 9,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Lunes",
                    "startDate": "2020-07-23T12:00:00.000Z",
                    "endDate": "2020-07-23T14:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 10,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Lunes",
                    "startDate": "2020-07-23T15:00:00.000Z",
                    "endDate": "2020-07-23T17:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 11,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Lunes",
                    "startDate": "2020-07-23T19:00:00.000Z",
                    "endDate": "2020-07-23T22:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 12,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Martes",
                    "startDate": "2020-07-23T12:00:00.000Z",
                    "endDate": "2020-07-23T13:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 13,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Martes",
                    "startDate": "2020-07-23T13:30:00.000Z",
                    "endDate": "2020-07-23T15:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 14,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Martes",
                    "startDate": "2020-07-23T16:00:00.000Z",
                    "endDate": "2020-07-23T18:30:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 15,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Jueves",
                    "startDate": "2020-07-23T18:00:00.000Z",
                    "endDate": "2020-07-24T03:00:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                },
                {
                    "id": 16,
                    "type": "Horario",
                    "state": "Aprobado",
                    "day": "Viernes",
                    "startDate": "2020-07-23T18:00:00.000Z",
                    "endDate": "2020-07-24T03:00:00.000Z",
                    "learningResultId": 1,
                    "summary": "Summary schedules test",
                    "ambientId": 1,
                    "programationId": 1,
                    "constantUserId": 4,
                    "temporaryUserId": null,
                    "periodicityId": null,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "AmbientId": 1,
                    "ProgramationId": 1,
                    "programation": {
                        "id": 1,
                        "startDate": "2020-07-24T00:17:08.000Z",
                        "endDate": "2020-09-23T05:00:00.000Z",
                        "trimester": 3,
                        "groupId": 1,
                        "municipalityId": 1,
                        "isActive": true,
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "GroupId": 1,
                        "MunicipalityId": 1,
                        "group": {
                            "id": 1,
                            "codeTab": 21312,
                            "modalityId": 6,
                            "quantityLearners": 30,
                            "activeLearners": 15,
                            "electiveStartDate": "2020-07-24T00:17:08.000Z",
                            "electiveEndDate": "2020-07-24T00:17:08.000Z",
                            "practiceStartDate": "2020-07-24T00:17:08.000Z",
                            "practiceEndDate": "2020-07-24T00:17:08.000Z",
                            "offer": "Offer test",
                            "managerId": 68,
                            "formationProgramId": 1,
                            "learnerId": null,
                            "groupState": "Active",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationProgram": {
                                "id": 1,
                                "code": "821609 V1",
                                "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                                "formationTypeId": 6,
                                "responsibleAreaId": null,
                                "isRegisterQualified": true,
                                "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z",
                                "formationType": {
                                    "id": 6,
                                    "name": "Tecnólogo 24m",
                                    "electiveMonths": 18,
                                    "practiceMonths": 6,
                                    "createdAt": "2020-07-24T00:17:08.000Z",
                                    "updatedAt": "2020-07-24T00:17:08.000Z"
                                }
                            }
                        }
                    },
                    "constantUser": {
                        "id": 4,
                        "username": "Alexandra Naranjo Cardona",
                        "misena_email": "alexa_nc@misena.edu.co ",
                        "document": "31321612",
                        "phone": "3135217056"
                    },
                    "temporaryUser": null
                }
            ]
        },
        {
            "id": 2,
            "name": "SISTEMAS 2",
            "state": "activo",
            "usability": "Tecnologicos",
            "userId": null,
            "user": null,
            "schedule": []
        }];
    return res.json({ambients: data});
});
/**
 * @swagger
 * paths:
 *  /demo/ambients/schedules/{id}:
 *    get:
 *      summary: Se usa para obtener el horario de un ambiente en especifico
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/schedules/:id", function(req, res){
    let data = {
        "id": 1,
        "name": "SISTEMAS 1",
        "state": "activo",
        "usability": "Tecnologicos",
        "userId": null,
        "schedule": [
            {
                "id": 9,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-07-23T12:00:00.000Z",
                "endDate": "2020-07-23T14:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 10,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-07-23T15:00:00.000Z",
                "endDate": "2020-07-23T17:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 11,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Lunes",
                "startDate": "2020-07-23T19:00:00.000Z",
                "endDate": "2020-07-23T22:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 12,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-07-23T12:00:00.000Z",
                "endDate": "2020-07-23T13:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 13,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-07-23T13:30:00.000Z",
                "endDate": "2020-07-23T15:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 14,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Martes",
                "startDate": "2020-07-23T16:00:00.000Z",
                "endDate": "2020-07-23T18:30:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 15,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Jueves",
                "startDate": "2020-07-23T18:00:00.000Z",
                "endDate": "2020-07-24T03:00:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            },
            {
                "id": 16,
                "type": "Horario",
                "state": "Aprobado",
                "day": "Viernes",
                "startDate": "2020-07-23T18:00:00.000Z",
                "endDate": "2020-07-24T03:00:00.000Z",
                "learningResultId": 1,
                "summary": "Summary schedules test",
                "ambientId": 1,
                "programationId": 1,
                "constantUserId": 4,
                "temporaryUserId": null,
                "periodicityId": null,
                "createdAt": "2020-07-24T00:17:08.000Z",
                "updatedAt": "2020-07-24T00:17:08.000Z",
                "AmbientId": 1,
                "ProgramationId": 1,
                "programation": {
                    "id": 1,
                    "startDate": "2020-07-24T00:17:08.000Z",
                    "endDate": "2020-09-23T05:00:00.000Z",
                    "trimester": 3,
                    "groupId": 1,
                    "municipalityId": 1,
                    "isActive": true,
                    "createdAt": "2020-07-24T00:17:08.000Z",
                    "updatedAt": "2020-07-24T00:17:08.000Z",
                    "GroupId": 1,
                    "MunicipalityId": 1,
                    "group": {
                        "id": 1,
                        "codeTab": 21312,
                        "modalityId": 6,
                        "quantityLearners": 30,
                        "activeLearners": 15,
                        "electiveStartDate": "2020-07-24T00:17:08.000Z",
                        "electiveEndDate": "2020-07-24T00:17:08.000Z",
                        "practiceStartDate": "2020-07-24T00:17:08.000Z",
                        "practiceEndDate": "2020-07-24T00:17:08.000Z",
                        "offer": "Offer test",
                        "managerId": 68,
                        "formationProgramId": 1,
                        "learnerId": null,
                        "groupState": "Active",
                        "createdAt": "2020-07-24T00:17:08.000Z",
                        "updatedAt": "2020-07-24T00:17:08.000Z",
                        "formationProgram": {
                            "id": 1,
                            "code": "821609 V1",
                            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
                            "formationTypeId": 6,
                            "responsibleAreaId": null,
                            "isRegisterQualified": true,
                            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
                            "createdAt": "2020-07-24T00:17:08.000Z",
                            "updatedAt": "2020-07-24T00:17:08.000Z",
                            "formationType": {
                                "id": 6,
                                "name": "Tecnólogo 24m",
                                "electiveMonths": 18,
                                "practiceMonths": 6,
                                "createdAt": "2020-07-24T00:17:08.000Z",
                                "updatedAt": "2020-07-24T00:17:08.000Z"
                            }
                        }
                    }
                },
                "constantUser": {
                    "id": 4,
                    "username": "Alexandra Naranjo Cardona",
                    "misena_email": "alexa_nc@misena.edu.co ",
                    "document": "31321612",
                    "phone": "3135217056"
                },
                "temporaryUser": null
            }
        ],
        "user": null
    };
    return res.json({ambient: data});
});
/**
 * @swagger
 * paths:
 *  /demo/ambients/pdf/{id}:
 *    get:
 *      summary: Se usa para exportar el horario de un ambiente en especifico en pdf
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A pdf file
 */
router.get('/ambients/pdf/:id', function(req, res){
    return res.json('Obtendras un archivo pdf donde se especifique el horario del ambiente en especifico');
});
/**
 * @swagger
 * paths:
 *  /demo/ambients/excel/{id}:
 *    get:
 *      summary: Se usa para exportar el horario de un ambiente en especifico en excel
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A excel file
 */
router.get('/ambients/excel/:id', function(req, res){
    return res.json('Obtendras un archivo excel donde se especifique el horario del ambiente en especifico');
});
/**
 * @swagger
 * paths:
 *  /demo/ambients/detail:
 *    get:
 *      summary: Se usa para obtener informacion reducida de todos los ambientes
 *      tags:
 *        - ambients
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/detail", function(req, res){
    let ambients = [
        {
            "id": 17,
            "name": "AMBIENTE DE ENERGIA RENOVABLE"
        },
        {
            "id": 7,
            "name": "AUDITORIO"
        },
        {
            "id": 4,
            "name": "AUTOCAD"
        }]
    return res.json({ambients});
});

router
  .route("/ambients")
/**
 * @swagger
 * paths:
 *  /demo/ambients/:
 *    get:
 *      summary: Se usa para obtener todos los ambientes
 *      tags:
 *        - ambients
 *      responses:
 *        '200':
 *          description: A successfull response
*/
  .get(function(req, res){
    let ambients = [
        {
            "id": 1,
            "name": "SISTEMAS 1",
            "state": "activo",
            "usability": "Tecnologicos",
            "userId": null,
            "user": null
        },
        {
            "id": 2,
            "name": "SISTEMAS 2",
            "state": "activo",
            "usability": "Tecnologicos",
            "userId": null,
            "user": null
        },];
    return res.json({ambients});
  })
/**
 * @swagger
 * "/demo/ambients":
 *   post:
 *     tags: [ambients]
 *     summary: "Se usa para crear un ambiente"
 *     parameters:
 *       - name: "name" 
 *         description: "Nombre del ambiente"
 *         in: formData
 *         required: true
 *         type: string
 *       - name: "usability" 
 *         description: "Usabilidad"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "state" 
 *         description: "Estao del ambiente"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "userId" 
 *         description: "Gestor del ambiente"
 *         in: formData
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
  .post(function(req, res){
    return res.json('Nuevo ambiente creado');
  });
router
  .route("/ambients/:id")
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   put:
   *     tags: [ambients]
   *     summary: "Se usa para actualizar un ambiente."
   *     parameters:
   *       - name: "id" 
   *         description: "id del ambiente"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "nombre del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "usabiblity" 
   *         description: "usabilidad del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "state" 
   *         description: "estado del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "gestor del ambiente"
   *         in: formData
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .put(function(req, res){
    return res.json('Ambiente actualizado')
  })
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   get:
   *     tags: [ambients]
   *     summary: "Se usa para obtener un ambiente en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del ambiente"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function(req, res){
    let ambient = {
        "id": 1,
        "name": "SISTEMAS 1",
        "state": "activo",
        "usability": "Tecnologicos",
        "userId": null,
        "user": null
    };
    return res.json({ambient});
  })
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   delete:
   *     tags: [ambients]
   *     summary: "Se usa para eliminar un ambiente"
   *     parameters:
   *       - name: "id" 
   *         description: "Id del ambiente"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(function(req, res){
    return res.json('Ambiente eliminado');
  });

module.exports = router;
