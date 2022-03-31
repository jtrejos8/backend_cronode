const { Router } = require("express");
const FormationProgramTypesController = require("../../controllers/sgh/formationProgramTypes");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/formationProgramTypes")
  /**
   * @swagger
   * "/api/formationProgramTypes":
   *   get:
   *     tags: [formation program types]
   *     summary: "Se usa para obtener todos los tipos de programas de formacion."
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
  .get(verify, FormationProgramTypesController.index)
  /**
   * @swagger
   * "/api/formationProgramTypes":
   *   post:
   *     tags: [formation program types]
   *     summary: "Se usa para crear un tipo de programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del tipo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "electiveMonths" 
   *         description: "Numero de meses de etapa electiva del tipo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "practiceMonths" 
   *         description: "Numero de meses de etapa practica del tipo"
   *         in: formData
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, FormationProgramTypesController.create);
router
  .route("/formationProgramTypes/:id")
  /**
   * @swagger
   * "/api/formationProgramTypes/{id}":
   *   get:
   *     tags: [formation program types]
   *     summary: "Se usa obtener un tipo de programa de formacion especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de programa de formacion"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, FormationProgramTypesController.show)
  /**
   * @swagger
   * "/api/formationProgramTypes/{id}":
   *   put:
   *     tags: [formation program types]
   *     summary: "Se usa para actualizar un tipo de programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del tipo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "electiveMonths" 
   *         description: "Numero de meses de etapa electiva del tipo"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "practiceMonths" 
   *         description: "Numero de meses de etapa practica del tipo"
   *         in: formData
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, FormationProgramTypesController.update)
  /**
   * @swagger
   * "/api/formationProgramTypes/{id}":
   *   delete:
   *     tags: [formation program types]
   *     summary: "Se usa para eliminar un tipo de programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del tipo de programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, FormationProgramTypesController.destroy);

module.exports = router;
