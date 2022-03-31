const { Router } = require("express");

const router = Router();

router
  .route("/schedules/loans")
  /**
   * @swagger
   * "/demo/schedules/loans":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener el horarios de los prestamos de ambientes."
   *     description: "Trae los prestamos de ambientes hechos por entidades diferentes del sena o instructores temporales"
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [];
    return res.json({temporaryLoans: data});
  })
  /**
   * @swagger
   * "/demo/schedules/loans":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para crear un prestamo de ambientes."
   *     description: "Se usa para registrar el prestamo de un ambiente a una entidad diferente del sena o a un instructor temporal. El prestamo puede tener una periodicidad como diario, semanal(un dia a la semana), mensual (cada 2do martes de cada mes)"
   *     parameters:
   *       - name: "temporaryUserId" 
   *         description: "Id del usuario o actividad temporal"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "ambientId" 
   *         description: "Id del ambiente a prestar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "periodicityId" 
   *         description: "Id de la periodicidad que va tener el prestamo"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Prestamo creado');
  });
router
  .route("/schedules/loans/:id")
  /**
   * @swagger
   * "/demo/schedules/loans/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un prestamo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del prestamo en especifico"
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
      "type": "Prestamo",
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
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z",
      "AmbientId": 1,
      "ProgramationId": 1
  };
    return res.json({temporaryLoan: data});
  })
  /**
   * @swagger
   * "/demo/schedules/loans/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para actualizar un prestamo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del prestamo en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "temporaryUserId" 
   *         description: "Id del usuario o actividad temporal"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "ambientId" 
   *         description: "Id del ambiente a prestar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "periodicityId" 
   *         description: "Id de la periodicidad que va tener el prestamo"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Prestamo actualizado');
  })
  /**
   * @swagger
   * "/demo/schedules/loans/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un prestamo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del prestamo en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Prestamo eliminado');
  });

router
  .route("/schedules/temporary")
  /**
   * @swagger
   * "/demo/schedules/temporary":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener los horarios temporales creados por los jefes de area."
   *     parameters:
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    return res.json({temporarySchedules: []});
  })
  /**
   * @swagger
   * "/demo/schedules/temporary":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para crear un horario temporal."
   *     parameters:
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del horario - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del horario - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "learningResultId" 
   *         description: "Id del resultado de aprendizaje del horario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "ambientId" 
   *         description: "Id del ambiente a programar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "programationId" 
   *         description: "Id de la programacion (hace referencia al registro que guarda el grupo y el trimestre)"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "constantUserId" 
   *         description: "Id del instructor que dara la clase"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen del horario"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Horario temporal creado');
  });

router
  .route("/schedules/temporary/:id")
  /**
   * @swagger
   * "/demo/schedules/temporary/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario temporal."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario temporal en especifico"
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
      "type": "Horario",
      "state": "Por aprobar",
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
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z",
      "AmbientId": 1,
      "ProgramationId": 1
  };
    return res.json({temporarySchedule: data});
  })
  /**
   * @swagger
   * "/demo/schedules/temporary/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para actualizar un horario temporal."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario temporal en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del horario - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del horario - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "learningResultId" 
   *         description: "Id del resultado de aprendizaje del horario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "ambientId" 
   *         description: "Id del ambiente a programar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "programationId" 
   *         description: "Id de la programacion (hace referencia al registro que guarda el grupo y el trimestre)"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "constantUserId" 
   *         description: "Id del instructor que dara la clase"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen del horario"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Horario temporal actualizado');
  })
  /**
   * @swagger
   * "/demo/schedules/temporary/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un horario temporal."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario temporal en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Horario temporal eliminado');
  });

router
  .route("/schedules/")
  /**
   * @swagger
   * "/demo/schedules":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener todos los horarios programados."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
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
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "AmbientId": 1,
          "ProgramationId": 1
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
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "AmbientId": 1,
          "ProgramationId": 1
      },];
      return res.json({schedules: data});
  })
  /**
   * @swagger
   * "/demo/schedules":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para programar un horario."
   *     description: "Para programar un horario se valida la programacion a la que pertenezca este activa, que en el tiempo del horario no se interfiera otro horario, una actividad. Se permite crear el horario cuando interfiere en un prestamo pero se indica la precaucion"
   *     parameters:
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "learningResultId" 
   *         description: "Id del resultado de apredizaje"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "ambientId" 
   *         description: "Id del ambiente a programar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "programationId" 
   *         description: "Id de la progracion (Hace referencia al registro del grupo y trimestre)"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "constantUserId" 
   *         description: "Id del instructor que dara la clase"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "temporaryUserId" 
   *         description: "Id del usuario o actividad temporal que dara la clase (Solo en caso de no enviar el instructor(constantUserId) )"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen del horario"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfulll response"
   */
  .post(function (req, res) {
    return res.json('Horario creado');
  });
router
  .route("/schedules/:id")
  /**
   * @swagger
   * "/demo/schedules/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = {
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
      "ProgramationId": 1,
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
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      },
      "learningResult": {
          "id": 1,
          "summary": "Learning summary test",
          "description": "Learning description test",
          "hours": 12,
          "projectPhase": "Development",
          "competenceId": 1,
          "associatedTrimesters": "3, 4",
          "trimesterEvaluate": 3,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      "ambient": {
          "id": 1,
          "name": "SISTEMAS 1",
          "state": "activo",
          "usability": "Tecnologicos",
          "userId": null,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      "temporaryUser": null,
      "constantUser": {
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
          "updatedAt": "2020-09-15T02:55:53.000Z"
      },
      "deprogramming": [
          {
              "id": 1,
              "scheduleId": 1,
              "date": "2020-08-11T00:00:00.000Z",
              "deprogrammingReasonId": 2,
              "description": "2020-08-11",
              "createdAt": "2020-09-15T02:58:02.000Z",
              "updatedAt": "2020-09-15T02:58:02.000Z",
              "ScheduleId": 1
          }
      ]
  };
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/schedules/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario"
   *         in: header
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo - Formato (YYYY-MM-DD h:m)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "learningResultId" 
   *         description: "Id del resultado de apredizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "ambientId" 
   *         description: "Id del ambiente a programar"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "programationId" 
   *         description: "Id de la progracion (Hace referencia al registro del grupo y trimestre)"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "constantUserId" 
   *         description: "Id del instructor que dara la clase"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "temporaryUserId" 
   *         description: "Id del usuario o actividad temporal que dara la clase (Solo en caso de no enviar el instructor(constantUserId) )"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen del horario"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Horario actualizado');
  })
  /**
   * @swagger
   * "/demo/schedules/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un horario en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del horario"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Horario eliminado');
  });

module.exports = router;
