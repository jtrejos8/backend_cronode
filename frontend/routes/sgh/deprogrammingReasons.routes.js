const { Router } = require("express");
const DeprogrammingReasonsController = require("../../controllers/sgh/deprogrammingReasons");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/deprogrammingReasons")
  /**
   * @swagger
   * "/api/deprogrammingReasons":
   *   get:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para obtener las razones para desprogramar un horario."
   *     parameters:
   *       - name: "auhtorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, DeprogrammingReasonsController.index)
  /**
   * @swagger
   * "/api/deprogrammingReasons":
   *   post:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para crear una razon para desprogramar un horario."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la razon"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, DeprogrammingReasonsController.create);

router
  .route("/deprogrammingReasons/:id")
  /**
   * @swagger
   * "/api/deprogrammingReasons/{id}":
   *   get:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para obtener una razon en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer 
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, DeprogrammingReasonsController.show)
  /**
   * @swagger
   * "/api/deprogrammingReasons/{id}":
   *   put:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para actualizar la informacion de la razon."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, DeprogrammingReasonsController.update)
  /**
   * @swagger
   * "/api/deprogrammingReasons/{id}":
   *   delete:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para eliminar una razon de desprogramacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, DeprogrammingReasonsController.destroy);

module.exports = router;
