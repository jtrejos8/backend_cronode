const { Router } = require("express");
const DeprogrammingController = require("../../controllers/sgh/deprogramming");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/deprogrammings")
  /**
   * @swagger
   * "/api/deprogrammings":
   *   get:
   *     tags: [deprogrammings]
   *     summary: "Se usa para obtener todas las programaciones realizadas."
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
  .get(verify, DeprogrammingController.index)
  /**
   * @swagger
   * "/api/deprogrammings":
   *   post:
   *     tags: [deprogrammings]
   *     summary: "Se usa para registrar una desprogramacion a un horario por alguna razon."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "scheduleId" 
   *         description: "Id del horario que desea desprogramar"
   *         in: body
   *         required: true
   *         type: integer
   *       - name: "date" 
   *         description: "Fecha en que se va desprogramar un horario"
   *         in: body
   *         required: true
   *         type: string
   *       - name: "deprogrammingReasonId" 
   *         description: "Id de la razon por la cual se va desprogramar el horario"
   *         in: body
   *         required: true
   *         type: integer 
   *       - name: "description" 
   *         description: "Id de la razon por la cual se va desprogramar el horario"
   *         in: body
   *         required: false
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .post(verify, DeprogrammingController.create);
router
  .route("/deprogrammings/:id")
  /**
   * @swagger
   * "/api/deprogrammings/{id}":
   *   get:
   *     tags: [deprogrammings]
   *     summary: "Se usa para obtener una desprogramacion en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, DeprogrammingController.show)
  /**
   * @swagger
   * "/api/deprogrammings/{id}":
   *   put:
   *     tags: [deprogrammings]
   *     summary: "Se usa para actualizar la informacion de una desprogramacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, DeprogrammingController.update)
  /**
   * @swagger
   * "/api/deprogrammings/{id}":
   *   delete:
   *     tags: [deprogrammings]
   *     summary: "Se usa para eliminar una desprogramacion de un horario."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id de la desprogramacion"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, DeprogrammingController.destroy);

module.exports = router;
