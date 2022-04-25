const { Router } = require("express");
const ProgramationsController = require("../../controllers/sgh/programations");
const verify = require("../../middlewares/jwt");

const router = Router();
/**
 *    post:
 *      description: Use to create a new programation
 *      tags:
 *        - programations
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
 *              - startDate
 *              - endDate
 *              - trimester
 *              - groupId
 *              - municipalityId
 *              - isActive
 *            properties:
 *              startDate:
 *                type: string
 *              endDate:
 *                type: string
 *              trimester:
 *                type: integer
 *              groupId:
 *                type: integer
 *              municipalityId:
 *                type: integer
 *              isActive:
 *                type: boolean
 
 */
router
  .route("/programations")
  /**
   * @swagger
   * "/api/programations":
   *   get:
   *     tags: [programations]
   *     summary: "Se usa para obtener todas las programaciones."
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
  .get(verify, ProgramationsController.index)
  /**
   * @swagger
   * "/api/programations":
   *   post:
   *     tags: [programations]
   *     summary: "Se usa para crear una nueva programacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "trimester" 
   *         description: "Trimestre del año de la programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "groupId" 
   *         description: "Id del grupo que tendra esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "municipalityId" 
   *         description: "Id del municipio donde se realizara esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isActive" 
   *         description: "Estado de la programacion, si es activa o no (1 => SI,  0 => NO)"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, ProgramationsController.create);
router
  .route("/programations/:id")
  /**
   * @swagger
   * "/api/programations/{id}":
   *   get:
   *     tags: [programations]
   *     summary: "Se usa para obtener una programacion en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - id: "id" 
   *         description: "Id de la programacion"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, ProgramationsController.show)
  /**
   * @swagger
   * "/api/programations/{id}":
   *   put:
   *     tags: [programations]
   *     summary: "Se usa para actualizar una programacion en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - id: "id" 
   *         description: "Id de la programacion"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "startDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "trimester" 
   *         description: "Trimestre del año de la programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "groupId" 
   *         description: "Id del grupo que tendra esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "municipalityId" 
   *         description: "Id del municipio donde se realizara esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isActive" 
   *         description: "Estado de la programacion, si es activa o no (1 => SI,  0 => NO)"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, ProgramationsController.update)
  /**
   * @swagger
   * "/api/programations/{id}":
   *   delete:
   *     tags: [programations]
   *     summary: "Se usa para eliminar una programacion en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - id: "id" 
   *         description: "Id de la programacion"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, ProgramationsController.destroy);

router.get('/programations/:id/schedules', verify, ProgramationsController.getSchedules);

module.exports = router;
