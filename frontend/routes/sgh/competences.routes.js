const { Router } = require("express");
const CompetencesController = require("../../controllers/sgh/competences");
const verify = require("../../middlewares/jwt");

const router = Router();

/**
 * @swagger
 * "/api/competences/detail":
 *   get:
 *     tags: [competences]
 *     summary: "Se usa para obtener informacion reducida de las competencias."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "a successfull response"
 */
router.get("/competences/detail",verify, CompetencesController.detail);
router
  .route("/competences")
  /**
   * @swagger
   * "/api/competences":
   *   get:
   *     tags: [competences]
   *     summary: "Se usa para obtener todas las competencias."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(verify, CompetencesController.index)
  /**
   * @swagger
   * "/api/competences":
   *   post:
   *     tags: [competences]
   *     summary: "Se usa para crear una competencia."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "formationProgramId" 
   *         description: "Programa de formacion al pertenecera la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "code" 
   *         description: "Codigo de la competencia"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "description" 
   *         description: "Descripcion de la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen de la competencia"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "hours" 
   *         description: "Horas de la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .post(verify, CompetencesController.create);
router
  .route("/competences/:id")
  /**
   * @swagger
   * "/api/competences/{id}":
   *   get:
   *     tags: [competences]
   *     summary: "Se usa para obtener una competencia en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "id" 
   *         description: "Id de la competencia"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(verify, CompetencesController.show)
  /**
   * @swagger
   * "/api/competences/{id}":
   *   put:
   *     tags: [competences]
   *     summary: "Se usa para actualizar la informacion de una competencia"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "id" 
   *         description: "Id de la competencia"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "formationProgramId" 
   *         description: "Programa de formacion al pertenecera la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "code" 
   *         description: "Codigo de la competencia"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "description" 
   *         description: "Descripcion de la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "summary" 
   *         description: "Resumen de la competencia"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "hours" 
   *         description: "Horas de la competencia"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .put(verify, CompetencesController.update)
  /**
   * @swagger
   * "/api/competences/{id}":
   *   delete:
   *     tags: [competences]
   *     summary: "Se usa para eliminar una competencia."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "id" 
   *         description: "Id de la competencia"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(verify, CompetencesController.destroy);

module.exports = router;
