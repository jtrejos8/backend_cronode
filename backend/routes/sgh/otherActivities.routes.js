const { Router } = require("express");
const OtherActivitiesController = require("../../controllers/sgh/otherActivities");
const verify = require("../../middlewares/jwt");

const router = Router();
/**
 *    post:
 *      description: Use to create a new other activity
 *      tags:
 *        - other activities
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
 *              - name
 *              - typeActivityId
 *              - day
 *              - startDate
 *              - endDate
 *              - userId
 *            properties:
 *              name:
 *                type: string
 *              typeActivityId:
 *                type: integer
 *              day:
 *                type: string
 *              startDate:
 *                type: string
 *              endDate:
 *                type: string
 *              userId:
 *                type: integer
 */
router
  .route("/otherActivities")
  /**
   * @swagger
   * "/api/otherActivities":
   *   get:
   *     tags: [other activities]
   *     summary: "Se usa para obtener otras actividades que pueden tener los instructores."
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
  .get(verify, OtherActivitiesController.index)
  /**
   * @swagger
   * "/api/otherActivities":
   *   post:
   *     tags: [other activities]
   *     summary: "Se usa para registrar una actividad a un instructor."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "typeActivityId" 
   *         description: "Id del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "starDate" 
   *         description: "Fecha inicio en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Id del instructor al cual se registrara la actividad"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, OtherActivitiesController.create);
router
  .route("/otherActivities/:id")
  /**
   * @swagger
   * "/api/otherActivities/{id}":
   *   get:
   *     tags: [other activities]
   *     summary: "Se usa para obtener una actividad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la actividad"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, OtherActivitiesController.show)
  /**
   * @swagger
   * "/api/otherActivities/{id}":
   *   put:
   *     tags: [other activities]
   *     summary: "Se usa para actualizar la informacion de un actividad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la actividad"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "typeActivityId" 
   *         description: "Id del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "starDate" 
   *         description: "Fecha inicio en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Id del instructor al cual se registrara la actividad"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, OtherActivitiesController.update)
  /**
   * @swagger
   * "/api/otherActivities/{id}":
   *   delete:
   *     tags: [other activities]
   *     summary: "Se usa para eliminar una actividad es especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la actividad"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, OtherActivitiesController.destroy);

module.exports = router;
