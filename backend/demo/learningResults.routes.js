const { Router } = require("express");

const router = Router();

/**
 * @swagger
 * "/demo/learningResults/detail":
 *   get:
 *     tags: [learning results]
 *     summary: "Se usa para obtener informacion reducida de los resultados de aprendizaje."
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/learningResults/detail", function (req, res) {
  let data = [
    {
      "id": 1,
      "summary": "Learning summary test",
      "description": "Learning description test",
      "competence": {
        "id": 1,
        "description": "Competence description test",
        "summary": "Compentence summary test"
      }
    }
  ];
  return res.json(data);
});
router
  .route("/learningResults")
  /**
   * @swagger
   * "/demo/learningResults":
   *   get:
   *     tags: [learning results]
   *     summary: "Se usa para obtener todos los resultados de aprendizaje."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let learningResults = [
      {
        "id": 1,
        "summary": "Learning summary test",
        "description": "Learning description test",
        "hours": 12,
        "projectPhase": "Development",
        "competenceId": 1,
        "associatedTrimesters": "3, 4",
        "trimesterEvaluate": 3,
        "createdAt": "2020-09-15T02:56:03.000Z",
        "updatedAt": "2020-09-15T02:56:03.000Z",
        "competence": {
          "id": 1,
          "formationProgramId": 1,
          "code": "213123",
          "description": "Competence description test",
          "summary": "Compentence summary test",
          "hours": 12,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
        }
      }
    ];
    return res.json({ learningResults });
  })
  /**
   * @swagger
   * "/demo/learningResults":
   *   post:
   *     tags: [learning results]
   *     summary: "Se usa para crear un resultado de aprendizaje."
   *     parameters:
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
  .post(function (req, res) {
    return res.json('Resultado de aprendizaje creado');
  });
router
  .route("/learningResults/:id")
  /**
   * @swagger
   * "/demo/learningResults/{id}":
   *   get:
   *     tags: [learning results]
   *     summary: "Se usa para obtener un resultado de aprendizaje en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del resultado de aprendizaje"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    return res.json({
      "id": 1,
      "summary": "Learning summary test",
      "description": "Learning description test",
      "hours": 12,
      "projectPhase": "Development",
      "competenceId": 1,
      "associatedTrimesters": "3, 4",
      "trimesterEvaluate": 3,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z",
      "competence": {
        "id": 1,
        "formationProgramId": 1,
        "code": "213123",
        "description": "Competence description test",
        "summary": "Compentence summary test",
        "hours": 12,
        "createdAt": "2020-09-15T02:56:03.000Z",
        "updatedAt": "2020-09-15T02:56:03.000Z"
      }
    });
  })
  /**
   * @swagger
   * "/demo/learningResults/{id}":
   *   put:
   *     tags: [learning results]
   *     summary: "Se usa para actualizar la informacion de un resultado de aprendizaje en especifico."
   *     parameters:
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
  .put(function (req, res) {
    return res.json('Resultado de aprendizaje actualizado');
  })
  /**
   * @swagger
   * "/demo/learningResults/{id}":
   *   delete:
   *     tags: [learning results]
   *     summary: "Se usa para eliminar un resultado de aprendizaje en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del resultado de aprendizaje"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Resultado de aprendizaje eliminado');
  });

module.exports = router;
