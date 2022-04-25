const { Router } = require("express");

const router = Router();

/**
 * @swagger
 * "/demo/competences/detail":
 *   get:
 *     tags: [competences]
 *     summary: "Se usa para obtener informacion reducida de las competencias."
 *     responses:
 *       200:
 *         description: "a successfull response"
 */
router.get("/competences/detail",function(req, res){
  let competences = [
    {
        "id": 1,
        "code": "213123",
        "description": "Competence description test",
        "summary": "Compentence summary test",
        "hours": 12
    }
  ];
  return res.json({competences});
});
router
  .route("/competences")
  /**
   * @swagger
   * "/demo/competences":
   *   get:
   *     tags: [competences]
   *     summary: "Se usa para obtener todas las competencias."
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function(req, res){
    let competences = [
      {
          "id": 1,
          "formationProgramId": 1,
          "code": "213123",
          "description": "Competence description test",
          "summary": "Compentence summary test",
          "hours": 12,
          "formationProgram": {
              "id": 1,
              "code": "821609 V1",
              "name": "821609 V1 - Mantenimiento Mecánico Industrial",
              "formationTypeId": 6,
              "responsibleAreaId": null,
              "isRegisterQualified": true,
              "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z"
          }
      }
    ];
    return res.json({competences});
  })
  /**
   * @swagger
   * "/demo/competences":
   *   post:
   *     tags: [competences]
   *     summary: "Se usa para crear una competencia."
   *     parameters:
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
  .post(function(req, res){
    return res.json('Nueva competencia creada');
  });
router
  .route("/competences/:id")
  /**
   * @swagger
   * "/demo/competences/{id}":
   *   get:
   *     tags: [competences]
   *     summary: "Se usa para obtener una competencia en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la competencia"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function(req, res){
    let competence = {
      "id": 1,
      "formationProgramId": 1,
      "code": "213123",
      "description": "Competence description test",
      "summary": "Compentence summary test",
      "hours": 12,
      "formationProgram": {
          "id": 1,
          "code": "821609 V1",
          "name": "821609 V1 - Mantenimiento Mecánico Industrial",
          "formationTypeId": 6,
          "responsibleAreaId": null,
          "isRegisterQualified": true,
          "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z"
      }
  };
  return res.json({competence});
  })
  /**
   * @swagger
   * "/demo/competences/{id}":
   *   put:
   *     tags: [competences]
   *     summary: "Se usa para actualizar la informacion de una competencia"
   *     parameters:
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
  .put(function(req, res){
    return res.json('Competencia actualizada');
  })
  /**
   * @swagger
   * "/demo/competences/{id}":
   *   delete:
   *     tags: [competences]
   *     summary: "Se usa para eliminar una competencia."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la competencia"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(function(req, res){
    return res.json('Compentecia eliminada');
  });

module.exports = router;
