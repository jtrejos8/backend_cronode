const { Router } = require("express");
const FormationProgramsController = require("../../controllers/sgh/formationPrograms");
const verify = require("../../middlewares/jwt");

const router = Router();
router
  .route("/formationPrograms")
  /**
   * @swagger
   * "/api/formationPrograms":
   *   get:
   *     tags: [formation programs]
   *     summary: "Se usa para obtener todos los programas de formacion."
   *     parameters:
   *       - name: "authorizacion" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, FormationProgramsController.index)
  /**
   * @swagger
   * "/api/formationPrograms":
   *   post:
   *     tags: [formation programs]
   *     summary: "Se usa para crear un nuevo programa de formacion."
   *     parameters:
   *       - name: "authorizacion" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "code" 
   *         description: "Codigo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "name" 
   *         description: "Nombre del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "formationTypeId" 
   *         description: "Id del tipo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "responsibleId" 
   *         description: "Id del jefe de area del programa"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isRegisterQualified" 
   *         description: "Esta calificado el registro"
   *         in: formData
   *         required: false
   *         type: boolean
   *       - name: "isRegisterQualifiedDate" 
   *         description: "Fecha de la calificacion del registro"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "성공"
   */
  .post(verify, FormationProgramsController.create);
router
  .route("/formationPrograms/:id")
  /**
   * @swagger
   * "/api/formationPrograms/{id}":
   *   get:
   *     tags: [formation programs]
   *     summary: "Se usa para obtener un programa de formacion es especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, FormationProgramsController.show)
  /**
   * @swagger
   * "/api/formationPrograms/{id}":
   *   put:
   *     tags: [formation programs]
   *     summary: "Se usa para actualizar la informacion un programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "code" 
   *         description: "Codigo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "name" 
   *         description: "Nombre del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "formationTypeId" 
   *         description: "Id del tipo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "responsibleId" 
   *         description: "Id del jefe de area del programa"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isRegisterQualified" 
   *         description: "Esta calificado el registro"
   *         in: formData
   *         required: false
   *         type: boolean
   *       - name: "isRegisterQualifiedDate" 
   *         description: "Fecha de la calificacion del registro"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, FormationProgramsController.update)
  /**
   * @swagger
   * "/api/formationPrograms/{id}":
   *   delete:
   *     tags: [formation programs]
   *     summary: "Se usa para eliminar un programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, FormationProgramsController.destroy);

module.exports = router;
