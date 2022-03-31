const { Router } = require("express");
const LearningResultsController = require("../../controllers/sgh/learningResults");
const verify = require("../../middlewares/jwt");

const router = Router();
/**

 *    post:
 *      description: Use to create a new learning result
 *      tags:
 *        - learning results
 *      parameters:
 *        - in: header
 *          name: authorization
 *          schema:
 *            type: string
 *            format: JWT
 *          required: true
 *        - in: body
 *          schema:
 *            type: object
 *            required:
 *              - description
 *              - hours
 *              - projectPhase
 *              - competenceId
 *              - associatedTrimesters
 *              - trimesterEvaluate
 *            properties:
 *              summary:
 *                type: string
 *              description:
 *                type: string
 *              hours:
 *                type: integer
 *              projectPhase:
 *                type: string
 *              competenceId:
 *                type: integer
 *              associatedTrimesters:
 *                type: string
 *              trimesterEvaluate:
 *                type: integer
  */

/**
 * @swagger
 * "/api/learningResults/detail":
 *   get:
 *     tags: [learning results]
 *     summary: "Se usa para obtener informacion reducida de los resultados de aprendizaje."
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
router.get("/learningResults/detail", LearningResultsController.detail);
router
  .route("/learningResults")
  /**
   * @swagger
   * "/api/learningResults":
   *   get:
   *     tags: [learning results]
   *     summary: "Se usa para obtener todos los resultados de aprendizaje."
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
  .get(verify, LearningResultsController.index)
  /**
   * @swagger
   * "/api/learningResults":
   *   post:
   *     tags: [learning results]
   *     summary: "Se usa para crear un resultado de aprendizaje."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "description" 
   *         description: "Descripcion del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "summary" 
   *         description: "Resumen del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "hours" 
   *         description: "Horas del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "projectPhase" 
   *         description: "Fase del proyecto del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "competenceId" 
   *         description: "Id de la competencia a la pertenece el resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "associatedTrimesters" 
   *         description: "Trimestres asociados del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "trimesterEvaluate" 
   *         description: "Trimestre en que se evalua el resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, LearningResultsController.create);
router
  .route("/learningResults/:id")
  /**
   * @swagger
   * "/api/learningResults/{id}":
   *   get:
   *     tags: [learning results]
   *     summary: "Se usa para obtener un resultado de aprendizaje en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del resultado de aprendizaje"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, LearningResultsController.show)
  /**
   * @swagger
   * "/api/learningResults/{id}":
   *   put:
   *     tags: [learning results]
   *     summary: "Se usa para actualizar la informacion de un resultado de aprendizaje en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del resultado de aprendizaje"
   *         in: header
   *         required: true
   *         type: integer 
   *       - name: "description" 
   *         description: "Descripcion del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "summary" 
   *         description: "Resumen del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "hours" 
   *         description: "Horas del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "projectPhase" 
   *         description: "Fase del proyecto del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "competenceId" 
   *         description: "Id de la competencia a la pertenece el resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "associatedTrimesters" 
   *         description: "Trimestres asociados del resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "trimesterEvaluate" 
   *         description: "Trimestre en que se evalua el resultado de aprendizaje"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "성공"
   */
  .put(verify, LearningResultsController.update)
  /**
   * @swagger
   * "/api/learningResults/{id}":
   *   delete:
   *     tags: [learning results]
   *     summary: "Se usa para eliminar un resultado de aprendizaje en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del resultado de aprendizaje"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, LearningResultsController.destroy);

module.exports = router;
