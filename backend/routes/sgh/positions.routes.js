const { Router } = require("express");
const PositionController = require("../../controllers/sgh/positions");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/positions")
  /**
   * @swagger
   * "/api/positions":
   *   get:
   *     tags: [positions]
   *     summary: "Se usa para obtener todos los cargos."
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
  .get(verify, PositionController.index)
  /**
   * @swagger
   * "/api/positions":
   *   post:
   *     tags: [positions]
   *     summary: "Se usa para crear un nuevo cargo."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del cargo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del cargo"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, PositionController.create);
router
  .route("/positions/:id")
  /**
   * @swagger
   * "/api/positions/{id}":
   *   get:
   *     tags: [positions]
   *     summary: "Se usa para obtener un cargo en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del cargo"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, PositionController.show)
  /**
   * @swagger
   * "/api/positions/{id}":
   *   put:
   *     tags: [positions]
   *     summary: "Se usa para actualizar un cargo en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del cargo"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre del cargo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "id" 
   *         description: "Tipo del cargo"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, PositionController.update)
  /**
   * @swagger
   * "/api/positions/{id}":
   *   delete:
   *     tags: [positions]
   *     summary: "Se usa para eliminar un cargo en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del cargo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, PositionController.destroy);

module.exports = router;
