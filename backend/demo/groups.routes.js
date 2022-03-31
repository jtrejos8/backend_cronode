const { Router } = require("express");

const router = Router();

/**
 * @swagger
 * "/demo/groups/schedules":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener los horarios de todos los grupos."
 *     parameters:
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/schedules", function (req, res) {
  let data = [
    {
      "id": 1,
      "codeTab": 21312,
      "modalityId": 1,
      "quantityLearners": 30,
      "activeLearners": 15,
      "electiveStartDate": "2020-09-15T02:56:03.000Z",
      "electiveEndDate": "2020-09-15T02:56:03.000Z",
      "practiceStartDate": "2020-09-15T02:56:03.000Z",
      "practiceEndDate": "2020-09-15T02:56:03.000Z",
      "managerId": 68,
      "formationProgramId": 1,
      "learnerId": null,
      "programation": [
        {
          "id": 1,
          "startDate": "2020-09-15T02:56:03.000Z",
          "endDate": "2020-11-14T05:00:00.000Z",
          "trimester": 3,
          "groupId": 1,
          "municipalityId": 1,
          "isActive": true,
          "GroupId": 1,
          "MunicipalityId": 1,
          "municipality": {
            "id": 1,
            "name": "Aguadas",
            "zoneId": 6,
            "ZoneId": 6,
            "zone": {
              "id": 6,
              "name": "Norte Caldense"
            }
          },
          "schedule": [
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
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
              "AmbientId": 1,
              "ProgramationId": 1,
              "learningResult": {
                "id": 1,
                "summary": "Learning summary test",
                "description": "Learning description test",
                "competenceId": 1,
                "competence": {
                  "id": 1,
                  "formationProgramId": 1,
                  "code": "213123",
                  "description": "Competence description test",
                  "summary": "Compentence summary test"
                }
              },
              "ambient": {
                "id": 1,
                "name": "SISTEMAS 1",
                "state": "activo",
                "usability": "Tecnologicos",
                "userId": null
              },
              "constantUser": {
                "id": 4,
                "username": "Alexandra Naranjo Cardona",
                "misena_email": "alexa_nc@misena.edu.co ",
                "document": "31321612",
                "phone": "3135217056",
                "contractTypeId": 3,
                "grade": 0,
                "isBossArea": false,
                "state": "Activo",
                "token": null
              },
              "temporaryUser": null
            }
          ]
        }
      ],
      "modality": {
        "id": 1,
        "name": "DIURNO"
      },
      "formationProgram": {
        "id": 1,
        "code": "821609 V1",
        "name": "821609 V1 - Mantenimiento Mecánico Industrial",
        "formationTypeId": 6,
        "responsibleAreaId": null,
        "formationType": {
          "id": 6,
          "name": "Tecnólogo 24m",
          "electiveMonths": 18,
          "practiceMonths": 6
        }
      },
      "manager": {
        "id": 68,
        "username": "Julián Humberto Salazar Pineda",
        "misena_email": "Jusapi824@misena.edu.co",
        "document": "75106549",
        "phone": "3113778657",
        "contractTypeId": 1,
        "grade": 0,
        "isBossArea": false,
        "state": "Activo",
        "token": null,
        "contractType": {
          "id": 1,
          "name": "Carrera Administrativa"
        }
      }
    }
  ];
  return res.json(data);
});
/**
 * @swagger
 * "/demo/groups/schedules/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener el horario de un grupo en especifico."
 *     parameters:
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/schedules/:id", function (req, res) {
  let data = {
    "id": 1,
    "codeTab": 21312,
    "modalityId": 1,
    "quantityLearners": 30,
    "activeLearners": 15,
    "electiveStartDate": "2020-09-15T02:56:03.000Z",
    "electiveEndDate": "2020-09-15T02:56:03.000Z",
    "practiceStartDate": "2020-09-15T02:56:03.000Z",
    "practiceEndDate": "2020-09-15T02:56:03.000Z",
    "managerId": 68,
    "formationProgramId": 1,
    "learnerId": null,
    "programation": [
      {
        "id": 1,
        "startDate": "2020-09-15T02:56:03.000Z",
        "endDate": "2020-11-14T05:00:00.000Z",
        "trimester": 3,
        "groupId": 1,
        "municipalityId": 1,
        "isActive": true,
        "GroupId": 1,
        "MunicipalityId": 1,
        "municipality": {
          "id": 1,
          "name": "Aguadas",
          "zoneId": 6,
          "ZoneId": 6,
          "zone": {
            "id": 6,
            "name": "Norte Caldense"
          }
        },
        "schedule": [
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
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
            "AmbientId": 1,
            "ProgramationId": 1,
            "learningResult": {
              "id": 1,
              "summary": "Learning summary test",
              "description": "Learning description test",
              "competenceId": 1,
              "competence": {
                "id": 1,
                "formationProgramId": 1,
                "code": "213123",
                "description": "Competence description test",
                "summary": "Compentence summary test"
              }
            },
            "ambient": {
              "id": 1,
              "name": "SISTEMAS 1",
              "state": "activo",
              "usability": "Tecnologicos",
              "userId": null
            },
            "constantUser": {
              "id": 4,
              "username": "Alexandra Naranjo Cardona",
              "misena_email": "alexa_nc@misena.edu.co ",
              "document": "31321612",
              "phone": "3135217056",
              "contractTypeId": 3,
              "grade": 0,
              "isBossArea": false,
              "state": "Activo",
              "token": null
            },
            "temporaryUser": null
          }
        ]
      }
    ],
    "modality": {
      "id": 1,
      "name": "DIURNO"
    },
    "formationProgram": {
      "id": 1,
      "code": "821609 V1",
      "name": "821609 V1 - Mantenimiento Mecánico Industrial",
      "formationTypeId": 6,
      "responsibleAreaId": null,
      "formationType": {
        "id": 6,
        "name": "Tecnólogo 24m",
        "electiveMonths": 18,
        "practiceMonths": 6
      }
    },
    "manager": {
      "id": 68,
      "username": "Julián Humberto Salazar Pineda",
      "misena_email": "Jusapi824@misena.edu.co",
      "document": "75106549",
      "phone": "3113778657",
      "contractTypeId": 1,
      "grade": 0,
      "isBossArea": false,
      "state": "Activo",
      "token": null,
      "contractType": {
        "id": 1,
        "name": "Carrera Administrativa"
      }
    }
  };
  return res.json(data);
});
/**
 * @swagger
 * "/demo/groups/excel/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para exportar el horario de un grupo en especifico en excel."
 *     parameters:
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get('/groups/excel/:id', function (req, res) {
  return res.json('Devuelve un archivo de excel con el horario del grupo')
});
/**
 * @swagger
 * "/demo/groups/pdf/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para exportar el horario de un grupo en especifico en pdf."
 *     parameters:
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/pdf/:id", function (req, res) {
  return res.json('Devuelve un archivo de excel con el horario del grupo')
});
/**
 * @swagger
 * "/demo/groups/detail":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener informacion reducida de todos los grupos"
 *     parameters:
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/detail", function (req, res) {
  let data = [
    {
      "id": 1,
      "codeTab": 21312,
      "activeLearners": 15,
      "electiveStartDate": "2020-09-15T02:56:03.000Z",
      "practiceEndDate": "2020-09-15T02:56:03.000Z",
      "manager": {
        "id": 68,
        "username": "Julián Humberto Salazar Pineda",
        "document": "75106549",
        "misena_email": "Jusapi824@misena.edu.co",
        "phone": "3113778657"
      }
    }
  ];
  return res.json(data);
});
router
  .route("/groups")
  /**
   * @swagger
   * "/demo/groups":
   *   get:
   *     tags: [groups]
   *     summary: "Se usa para obtener todos los grupos."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let groups = [
      {
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
        "modality": {
          "id": 1,
          "name": "DIURNO",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
        },
        "manager": {
          "id": 68,
          "username": "Julián Humberto Salazar Pineda",
          "misena_email": "Jusapi824@misena.edu.co",
          "institutional_email": "jsalazar@sena.edu.co",
          "password": "$2b$10$MOYGd/TjdFQLlSu0LorLpOYz111qu/ULBd7C4yprXP9ls2H7YEa0q",
          "document": "75106549",
          "birthdate": "2020-10-07T05:00:00.000Z",
          "phone": "3113778657",
          "phone_ip": "",
          "gender": "M",
          "positionId": 1,
          "rolId": 2,
          "contractTypeId": 1,
          "profession": "",
          "grade": 0,
          "isBossArea": false,
          "last_academic_level": "",
          "state": "Activo",
          "photo": null,
          "token": null,
          "email_state": false,
          "createdAt": "2020-09-15T02:55:58.000Z",
          "updatedAt": "2020-09-15T02:55:58.000Z"
        },
        "formationProgram": {
          "id": 1,
          "code": "821609 V1",
          "name": "821609 V1 - Mantenimiento Mecánico Industrial",
          "formationTypeId": 6,
          "responsibleAreaId": null,
          "isRegisterQualified": true,
          "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
        }
      }
    ];
    return res.json({groups});
  })
  /**
   * @swagger
   * "/demo/groups":
   *   post:
   *     tags: [groups]
   *     summary: "Se usa para crear un grupo."
   *     parameters:
   *       - name: "codeTab" 
   *         description: "Ficha de caracterizacion del grupo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "modalityId" 
   *         description: "Id de la modalidad del grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "quantityLearners" 
   *         description: "Numero de aprendices"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "activeLearners" 
   *         description: "Aprendices activos"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "electiveStartDate" 
   *         description: "Fecha de inicio de etapa electiva"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "electiveEndDate" 
   *         description: "Fecha de fin de etapa electiva"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "practiceStartDate" 
   *         description: "Fecha de inicio de etapa practica"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "practiceEndDate" 
   *         description: "Fecha de fin de etapa practica"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "offer" 
   *         description: "Oferta del grupo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "managerId" 
   *         description: "Id del gestor del grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "formationProgramId" 
   *         description: "Id del programa de formacion al que pertenece el grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "learnerId" 
   *         description: "Id del aprendiz que podra consultar el horario de este grupo"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "groupState" 
   *         description: "Estado del grupo"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Grupo creado');
  });
router
  .route("/groups/:id")
  /**
   * @swagger
   * "/demo/groups/{id}":
   *   get:
   *     tags: [groups]
   *     summary: "Se usa para obtener la informacion de un grupo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del grupo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let group = {
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
      "modality": {
          "id": 1,
          "name": "DIURNO",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      "manager": {
          "id": 68,
          "username": "Julián Humberto Salazar Pineda",
          "misena_email": "Jusapi824@misena.edu.co",
          "institutional_email": "jsalazar@sena.edu.co",
          "password": "$2b$10$MOYGd/TjdFQLlSu0LorLpOYz111qu/ULBd7C4yprXP9ls2H7YEa0q",
          "document": "75106549",
          "birthdate": "2020-10-07T05:00:00.000Z",
          "phone": "3113778657",
          "phone_ip": "",
          "gender": "M",
          "positionId": 1,
          "rolId": 2,
          "contractTypeId": 1,
          "profession": "",
          "grade": 0,
          "isBossArea": false,
          "last_academic_level": "",
          "state": "Activo",
          "photo": null,
          "token": null,
          "email_state": false,
          "createdAt": "2020-09-15T02:55:58.000Z",
          "updatedAt": "2020-09-15T02:55:58.000Z"
      },
      "formationProgram": {
          "id": 1,
          "code": "821609 V1",
          "name": "821609 V1 - Mantenimiento Mecánico Industrial",
          "formationTypeId": 6,
          "responsibleAreaId": null,
          "isRegisterQualified": true,
          "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      "learner": null
  };
    return res.json(group);
  })
  /**
   * @swagger
   * "/demo/groups/{id}":
   *   put:
   *     tags: [groups]
   *     summary: "Se usa para actualizar la informacion de un grupo."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del grupo"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "codeTab" 
   *         description: "Ficha de caracterizacion del grupo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "modalityId" 
   *         description: "Id de la modalidad del grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "quantityLearners" 
   *         description: "Numero de aprendices"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "activeLearners" 
   *         description: "Aprendices activos"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "electiveStartDate" 
   *         description: "Fecha de inicio de etapa electiva"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "electiveEndDate" 
   *         description: "Fecha de fin de etapa electiva"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "practiceStartDate" 
   *         description: "Fecha de inicio de etapa practica"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "practiceEndDate" 
   *         description: "Fecha de fin de etapa practica"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "offer" 
   *         description: "Oferta del grupo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "managerId" 
   *         description: "Id del gestor del grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "formationProgramId" 
   *         description: "Id del programa de formacion al que pertenece el grupo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "learnerId" 
   *         description: "Id del aprendiz que podra consultar el horario de este grupo"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "groupState" 
   *         description: "Estado del grupo"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Grupo actualizado');
  })
  /**
   * @swagger
   * "/demo/groups/{id}":
   *   delete:
   *     tags: [groups]
   *     summary: "Se usa para eliminar un grupo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del grupo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Grupo eliminado');
  });

module.exports = router;
