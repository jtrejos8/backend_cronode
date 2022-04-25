const { Router } = require("express");
const GroupsController = require("../../controllers/sgh/groups");
const verify = require("../../middlewares/jwt");

const router = Router();

/**

 *    post:
 *      description: Use to create a new group
 *      tags:
 *        - groups
 *      parameters:
 *        - in: header
 *          name: authorization
 *          schema:
 *            type: string
 *            format: JWT
 *          required: true
 *        - in: body
 *          schema:
 *            type: object
 *            required:
 *              - codeTab
 *              - modalityId
 *              - quantityLearners
 *              - activeLearners
 *              - electiveStartDate
 *              - electiveEndDate
 *              - practiceStartDate
 *              - practiceEndDate
 *              - offer
 *              - managerId
 *              - formationProgramId
 *              - groupState
 *            properties:
 *              codeTab:
 *                type: string
 *              modalityId:
 *                type: integer
 *              quantityLearners:
 *                type: integer
 *              activeLearners:
 *                type: integer
 *              electiveStartDate:
 *                type: string
 *              electiceEndDate:
 *                type: string
 *              practiceStartDate:
 *                type: string
 *              practiceEndDate:
 *                type: string
 *              offer:
 *                type: string
 *              managerId:
 *                type: integer
 *              formationProgramId:
 *                type: integer
 *              learnerId:
 *                type: integer
 *              groupState:
 *                type: string
 */

/**
 * @swagger
 * "/api/groups/schedules":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener los horarios de todos los grupos."
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
router.get("/groups/schedules",verify, GroupsController.getSchedules);
/**
 * @swagger
 * "/api/groups/schedules/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener el horario de un grupo en especifico."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/schedules/:id",verify, GroupsController.getSchedule);
/**
 * @swagger
 * "/api/groups/excel/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para exportar el horario de un grupo en especifico en excel."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get('/groups/excel/:id', verify, GroupsController.createExcel);
/**
 * @swagger
 * "/api/groups/pdf/{id}":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para exportar el horario de un grupo en especifico en pdf."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del grupo"
 *         in: path
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/groups/pdf/:id", verify, GroupsController.createPdf);
/**
 * @swagger
 * "/api/groups/detail":
 *   get:
 *     tags: [groups]
 *     summary: "Se usa para obtener informacion reducida de todos los grupos"
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
router.get("/groups/detail",verify, GroupsController.detail);
router
  .route("/groups")
  /**
   * @swagger
   * "/api/groups":
   *   get:
   *     tags: [groups]
   *     summary: "Se usa para obtener todos los grupos."
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
  .get(verify, GroupsController.index)
  /**
   * @swagger
   * "/api/groups":
   *   post:
   *     tags: [groups]
   *     summary: "Se usa para crear un grupo."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
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
  .post(verify, GroupsController.create);
router
  .route("/groups/:id")
  /**
   * @swagger
   * "/api/groups/{id}":
   *   get:
   *     tags: [groups]
   *     summary: "Se usa para obtener la informacion de un grupo en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del grupo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, GroupsController.show)
  /**
   * @swagger
   * "/api/groups/{id}":
   *   put:
   *     tags: [groups]
   *     summary: "Se usa para actualizar la informacion de un grupo."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
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
  .put(verify, GroupsController.update)
  /**
   * @swagger
   * "/api/groups/{id}":
   *   delete:
   *     tags: [groups]
   *     summary: "Se usa para eliminar un grupo en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del grupo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, GroupsController.destroy);

module.exports = router;
