const { Router } = require("express");
const TemporaryUserActivitiesController = require("../../controllers/sgh/temporaryUserActivities");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/temporaryUserActivities")
  /**
   * @swagger
   * "/api/temporaryUserActivities":
   *   get:
   *     tags: [temporary user activities]
   *     summary: "Se usa para obtener los instructores o actividades que remplazan temporalmente a un instructor."
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
  .get(verify, TemporaryUserActivitiesController.index)
  /**
   * @swagger
   * "/api/temporaryUserActivities":
   *   post:
   *     tags: [temporary user activities]
   *     summary: "Se usa para crear un nuevo instructor o actividad temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del instructor o actividad temporal"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "observations" 
   *         description: "Observaciones del instructor o actividad temporal"
   *         in: formData
   *         required: false
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del registro (Instructor Temporal ó Actividad temporal)"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, TemporaryUserActivitiesController.create);
router
  .route("/temporaryUserActivities/:id")
  /**
   * @swagger
   * "/api/temporaryUserActivities/{id}":
   *   get:
   *     tags: [temporary user activities]
   *     summary: "Se usa para obtener un instructor o actividad temporal en especifico"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la actividad o instructor temporal"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, TemporaryUserActivitiesController.show)
  /**
   * @swagger
   * "/api/temporaryUserActivities/{id}":
   *   put:
   *     tags: [temporary user activities]
   *     summary: "Se usa para actualizar un instructor o actividad temporal."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del instructor o actividad temporal"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "observations" 
   *         description: "Observaciones del instructor o actividad temporal"
   *         in: formData
   *         required: false
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del registro (Instructor Temporal ó Actividad temporal)"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, TemporaryUserActivitiesController.update)
  /**
   * @swagger
   * "/api/temporaryUserActivities/{id}":
   *   delete:
   *     tags: [temporary user activities]
   *     summary: "Se usa para eliminar un instructor o actividad temporal en especifico"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la actividad o instructor temporal"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, TemporaryUserActivitiesController.destroy);

module.exports = router;
