const { Router } = require("express");
const ZonesController = require("../../controllers/sgh/zones");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/zones")
  /**
   * @swagger
   * "/api/zones":
   *   get:
   *     tags: [zones]
   *     summary: "Se usa para obtener todas las zonas en que se da formacion."
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
  .get(verify, ZonesController.index)
  /**
   * @swagger
   * "/api/zones":
   *   post:
   *     tags: [zones]
   *     summary: "Se usa para crear una nueva zona."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, ZonesController.create);
router
  .route("/zones/:id")
  /**
   * @swagger
   * "/api/zones/{id}":
   *   get:
   *     tags: [zones]
   *     summary: "Se usa para obtener una zona en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, ZonesController.show)
  /**
   * @swagger
   * "/api/zones/{id}":
   *   put:
   *     tags: [zones]
   *     summary: "Se usa para actulizar una zona en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la zona"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, ZonesController.update)
  /**
   * @swagger
   * "/api/zones/{id}":
   *   delete:
   *     tags: [zones]
   *     summary: "Se usa para eliminar una zona en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, ZonesController.destroy);

module.exports = router;
