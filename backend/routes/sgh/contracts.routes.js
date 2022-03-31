const { Router } = require("express");
const ContractsController = require("../../controllers/sgh/contracts");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/contracts")
  /**
   * @swagger
   * "/api/contracts":
   *   get:
   *     tags: [contracts]
   *     summary: "Se usa para obtener todos los contratos."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(verify, ContractsController.index)
  /**
   * @swagger
   * "/api/contracts":
   *   post:
   *     tags: [contracts]
   *     summary: "Se usa para crear un contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "description" 
   *         description: "Descripcion del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Instructor al que sera asignado"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .post(verify, ContractsController.create);
router
  .route("/contracts/:id")
  /**
   * @swagger
   * "/api/contracts/{id}":
   *   get:
   *     tags: [contracts]
   *     summary: "Se usa para obtener un contrato en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(verify, ContractsController.show)
  /**
   * @swagger
   * "/api/contracts/{id}":
   *   put:
   *     tags: [contracts]
   *     summary: "Se usa para actualizar la informacion de un contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "description" 
   *         description: "Descripcion del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Instructor al que sera asignado"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .put(verify, ContractsController.update)
  /**
   * @swagger
   * "/api/contracts/{id}":
   *   delete:
   *     tags: [contracts]
   *     summary: "Se usa para eliminar un contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(verify, ContractsController.destroy);

module.exports = router;
