const { Router } = require("express");
const PeriodicitiesController = require("../../controllers/sgh/periodicities");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/periodicities")
  /**
   * @swagger
   * "/api/periodicities":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para obtener todas las periodicidades."
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
  .get(verify, PeriodicitiesController.index)
  /**
   * @swagger
   * "/api/periodicities":
   *   post:
   *     tags: [periodicities]
   *     summary: "Se usa para crear una nueva periodicidad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la periodicidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, PeriodicitiesController.create);

router
  .route("/periodicities/:id")
  /**
   * @swagger
   * "/api/periodicities/{id}":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para obtener una periodicidad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, PeriodicitiesController.show)
  /**
   * @swagger
   * "/api/periodicities/{id}":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para actualizar una periodicidad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre de periodicidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, PeriodicitiesController.update)
  /**
   * @swagger
   * "/api/periodicities/{id}":
   *   delete:
   *     tags: [periodicities]
   *     summary: "Se usa para eliminar una periodicidad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, PeriodicitiesController.destroy);

module.exports = router;
