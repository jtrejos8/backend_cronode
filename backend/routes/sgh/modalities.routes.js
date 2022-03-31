const { Router } = require("express");
const ModalitiesController = require("../../controllers/sgh/modalities");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/modalities")
  /**
   * @swagger
   * "/api/modalities":
   *   get:
   *     tags: [modalities]
   *     summary: "Se usa para obtener todas las modalidades."
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
  .get(verify, ModalitiesController.index)
  /**
   * @swagger
   * "/api/modalities":
   *   post:
   *     tags: [modalities]
   *     summary: "Se usa para crear una modalidad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorization"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de modalidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, ModalitiesController.create);
router
  .route("/modalities/:id")
  /**
   * @swagger
   * "/api/modalities/{id}":
   *   get:
   *     tags: [modalities]
   *     summary: "Se usa para obtener una modalidad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, ModalitiesController.show)
  /**
   * @swagger
   * "/api/modalities/{id}":
   *   put:
   *     tags: [modalities]
   *     summary: "Se usa para actualizar la informacion de una modalidad."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la modalidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, ModalitiesController.update)
  /**
   * @swagger
   * "/api/modalities/{id}":
   *   delete:
   *     tags: [modalities]
   *     summary: "Se usa para eliminar una modalidad en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, ModalitiesController.destroy);

module.exports = router;
