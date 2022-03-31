const { Router } = require("express");

const router = Router();

router
  .route("/deprogrammings")
  /**
   * @swagger
   * "/demo/deprogrammings":
   *   get:
   *     tags: [deprogrammings]
   *     summary: "Se usa para obtener todas las programaciones realizadas."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let deprogrammings = [
      {
        "id": 1,
        "scheduleId": 1,
        "date": "2020-08-11T00:00:00.000Z",
        "deprogrammingReasonId": 2,
        "description": "2020-08-11",
        "ScheduleId": 1,
        "schedule": {
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
        "deprogrammingReason": {
          "id": 2,
          "name": "Incapacidad médica",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
        }
      }
    ];
    return res.json({deprogrammings});
  })
  /**
   * @swagger
   * "/demo/deprogrammings":
   *   post:
   *     tags: [deprogrammings]
   *     summary: "Se usa para registrar una desprogramacion a un horario por alguna razon."
   *     parameters: 
   *       - name: "scheduleId" 
   *         description: "Id del horario que desea desprogramar"
   *         in: body
   *         required: true
   *         type: integer
   *       - name: "date" 
   *         description: "Fecha en que se va desprogramar un horario"
   *         in: body
   *         required: true
   *         type: string
   *       - name: "deprogrammingReasonId" 
   *         description: "Id de la razon por la cual se va desprogramar el horario"
   *         in: body
   *         required: true
   *         type: integer 
   *       - name: "description" 
   *         description: "Id de la razon por la cual se va desprogramar el horario"
   *         in: body
   *         required: false
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .post(function (req, res) {
    return res.json('Deprogramacion creada');
  });
router
  .route("/deprogrammings/:id")
  /**
   * @swagger
   * "/demo/deprogrammings/{id}":
   *   get:
   *     tags: [deprogrammings]
   *     summary: "Se usa para obtener una desprogramacion en especifico."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let deprogramming = {
      "id": 1,
      "scheduleId": 1,
      "date": "2020-08-11T00:00:00.000Z",
      "deprogrammingReasonId": 2,
      "description": "2020-08-11",
      "ScheduleId": 1,
      "schedule": {
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
      "deprogrammingReason": {
        "id": 2,
        "name": "Incapacidad médica",
        "createdAt": "2020-09-15T02:56:03.000Z",
        "updatedAt": "2020-09-15T02:56:03.000Z"
      }
    };
    return res.json({deprogramming});
  })
  /**
   * @swagger
   * "/demo/deprogrammings/{id}":
   *   put:
   *     tags: [deprogrammings]
   *     summary: "Se usa para actualizar la informacion de una desprogramacion."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Desprogramacion actualizada');
  })
  /**
   * @swagger
   * "/demo/deprogrammings/{id}":
   *   delete:
   *     tags: [deprogrammings]
   *     summary: "Se usa para eliminar una desprogramacion de un horario."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Desprogramacion eliminada');
  });

module.exports = router;
