const { Router } = require("express");
const TypeActivitiesController = require("../../controllers/sgh/typeActivities");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/typeActivities")
  /**
   * @swagger
   * "/api/typeActivities":
   *   get:
   *     tags: [type activities]
   *     summary: "Se usa para obtener todos los tipos de actividades."
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
  .get(verify, TypeActivitiesController.index)
  /**
   * @swagger
   * "/api/typeActivities":
   *   post:
   *     tags: [type activities]
   *     summary: "Se usa para crear un nuevo tipo de actividad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "color" 
   *         description: "Color del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, TypeActivitiesController.create);
router
  .route("/typeActivities/:id")
  /**
   * @swagger
   * "/api/typeActivities/{id}":
   *   get:
   *     tags: [type activities]
   *     summary: "Se usa para obtener un tipo de actividad en especifico"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, TypeActivitiesController.show)
  /**
   * @swagger
   * "/api/typeActivities/{id}":
   *   put:
   *     tags: [type activities]
   *     summary: "Se usa para actualizar un nuevo tipo de actividad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
   *         in: header
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "color" 
   *         description: "Color del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, TypeActivitiesController.update)
  /**
   * @swagger
   * "/api/typeActivities/{id}":
   *   delete:
   *     tags: [type activities]
   *     summary: "Se usa para eliminar un tipo de actividad en especifico"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, TypeActivitiesController.destroy);

module.exports = router;
