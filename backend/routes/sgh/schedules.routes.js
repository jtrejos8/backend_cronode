const { Router } = require("express");
const SchedulesController = require("../../controllers/sgh/schedules");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/schedules/loans")
  /**
   * @swagger
   * "/api/schedules/loans":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener el horarios de los prestamos de ambientes."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.getTemporaryLoans)
  /**
   * @swagger
   * "/api/schedules/loans":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para crear un prestamo de ambientes."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string
   *       - name: "temporaryUserId" 
   *         description: "Id del usuario o actividad temporal"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo"
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
  .post(verify, SchedulesController.createTemporaryLoans);
router
  .route("/schedules/loans/:id")
  /**
   * @swagger
   * "/api/schedules/loans/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un prestamo en especifico."
   *     parameters:
   *       - name: "autorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del prestamo en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.getTemporaryLoan)
  /**
   * @swagger
   * "/api/schedules/loans/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para actualizar un prestamo en especifico."
   *     parameters:
   *       - name: "autorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
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
   *         description: "Fecha inicio del prestamo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo"
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
  .put(verify, SchedulesController.createTemporaryLoans)
  /**
   * @swagger
   * "/api/schedules/loans/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un prestamo en especifico."
   *     parameters:
   *       - name: "autorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del prestamo en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, SchedulesController.destroyTemporaryLoan);

router
  .route("/schedules/temporary")
  /**
   * @swagger
   * "/api/schedules/temporary":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener los horarios temporales creados por los jefes de area."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.getTemporarys)
  /**
   * @swagger
   * "/api/schedules/temporary":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para crear un horario temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del horario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del horario"
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
  .post(verify, SchedulesController.createTemporary);

router
  .route("/schedules/temporary/:id")
  /**
   * @swagger
   * "/api/schedules/temporary/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del horario temporal en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.getTemporary)
  /**
   * @swagger
   * "/api/schedules/temporary/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para actualizar un horario temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
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
   *         description: "Fecha inicio del horario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del horario"
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
  .put(verify, SchedulesController.updateTemporary)
  /**
   * @swagger
   * "/api/schedules/temporary/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un horario temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del horario temporal en especifico"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, SchedulesController.destroyTemporary);

router
  .route("/schedules/")
  /**
   * @swagger
   * "/api/schedules":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener todos los horarios programados."
   *     parameters:
   *       - name: "autorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.index)
  /**
   * @swagger
   * "/api/schedules":
   *   post:
   *     tags: [schedules]
   *     summary: "Se usa para programar un horario."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "day" 
   *         description: "Dia (Lunes, Martes, Miercoles)"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "startDate" 
   *         description: "Fecha inicio del prestamo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo"
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
   *         description: "A successfulll response"
   */
  .post(verify, SchedulesController.create);
router
  .route("/schedules/:id")
  /**
   * @swagger
   * "/api/schedules/{id}":
   *   get:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del horario"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, SchedulesController.show)
  /**
   * @swagger
   * "/api/schedules/{id}":
   *   put:
   *     tags: [schedules]
   *     summary: "Se usa para obtener un horario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
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
   *         description: "Fecha inicio del prestamo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin del prestamo"
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
  .put(verify, SchedulesController.update)
  /**
   * @swagger
   * "/api/schedules/{id}":
   *   delete:
   *     tags: [schedules]
   *     summary: "Se usa para eliminar un horario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del horario"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, SchedulesController.destroy);

module.exports = router;
