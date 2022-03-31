const { Router } = require("express");
const ContractTypeController = require("../../controllers/sgh/contractTypes");
const verify = require("../../middlewares/jwt");

const router = Router();
router
  .route("/contractTypes")
  /**
   * @swagger
   * "/api/contractTypes":
   *   get:
   *     tags: [contract types]
   *     summary: "Se usa para obtener todos los tipos de contratos."
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
  .get(verify, ContractTypeController.index)
  /**
   * @swagger
   * "/api/contractTypes":
   *   post:
   *     tags: [contract types]
   *     summary: "Se usa para crear un tipo de contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del tipo de contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a succesfull response"
   */
  .post(verify, ContractTypeController.create);
router
  .route("/contractTypes/:id")
  /**
   * @swagger
   * "/api/contractTypes/{id}":
   *   get:
   *     tags: [contract types]
   *     summary: "Se usa para obtener un tipo de contrato especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "성공"
   */
  .get(verify, ContractTypeController.show)
  /**
   * @swagger
   * "/api/contractTypes/{id}":
   *   put:
   *     tags: [contract types]
   *     summary: "Se usa para actualizar la informacion de un tipo de contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del tipo de contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "성공"
   */
  .put(verify, ContractTypeController.update)
  /**
   * @swagger
   * "/api/contractTypes/{id}":
   *   delete:
   *     tags: [contract types]
   *     summary: "Se usa para eliminar un tipo de contrato."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(verify, ContractTypeController.destroy);

module.exports = router;
