const { Router } = require("express");
const MunicipalitiesController = require("../../controllers/sgh/municipalities");
const verify = require("../../middlewares/jwt");

const router = Router();

router
.route("/municipalities")
  /**
   * @swagger
   * "/api/municipalities":
   *   get:
   *     tags: [municipalities]
   *     summary: "Se usa para obtener todos los municipios."
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
  .get(verify, MunicipalitiesController.index)
  /**
   * @swagger
   * "/api/municipalities":
   *   post:
   *     tags: [municipalities]
   *     summary: "Se usa para agregar un municipio."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del municipio"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "zoneId" 
   *         description: "Id de la zona a la que pertenece"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, MunicipalitiesController.create);
router
  .route("/municipalities/:id")
  /**
   * @swagger
   * "/api/municipalities/{id}":
   *   get:
   *     tags: [municipalities]
   *     summary: "Se usa para obtener un municipio en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, MunicipalitiesController.show)
  /**
   * @swagger
   * "/api/municipalities/{id}":
   *   put:
   *     tags: [municipalities]
   *     summary: "Se usa para actualizar la informacion de un municipio."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre del municipio"
   *         in: header
   *         required: true
   *         type: string
   *       - name: "zoneId" 
   *         description: "Id de la zona del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, MunicipalitiesController.update)
  /**
   * @swagger
   * "/api/municipalities/{id}":
   *   delete:
   *     tags: [municipalities]
   *     summary: "Se usa para eliminar un municipio en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, MunicipalitiesController.destroy);

module.exports = router;
