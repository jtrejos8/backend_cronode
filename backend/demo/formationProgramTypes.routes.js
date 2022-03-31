const { Router } = require("express");

const router = Router();

router
  .route("/formationProgramTypes")
  /**
   * @swagger
   * "/demo/formationProgramTypes":
   *   get:
   *     tags: [formation program types]
   *     summary: "Se usa para obtener todos los tipos de programas de formacion."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function(req, res){
    let formationProgramTypes = [{
      "id": 1,
      "name": "Formación complementaria",
      "electiveMonths": 0,
      "practiceMonths": 0,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  },
  {
      "id": 2,
      "name": "Operario",
      "electiveMonths": 3,
      "practiceMonths": 3,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  }];
  return res.json({formationProgramTypes});
  })
  /**
   * @swagger
   * "/demo/formationProgramTypes":
   *   post:
   *     tags: [formation program types]
   *     summary: "Se usa para crear un tipo de programa de formacion."
   *     parameters:
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
  .post(function(req, res){
    return res.json('Tipo de programa de formacion creado');
  });
router
  .route("/formationProgramTypes/:id")
  /**
   * @swagger
   * "/demo/formationProgramTypes/{id}":
   *   get:
   *     tags: [formation program types]
   *     summary: "Se usa obtener un tipo de programa de formacion especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de programa de formacion"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function(req, res){
    let formationProgramType = {
      "id": 1,
      "name": "Formación complementaria",
      "electiveMonths": 0,
      "practiceMonths": 0,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  };
  return res.json({formationProgramType});
  })
  /**
   * @swagger
   * "/demo/formationProgramTypes/{id}":
   *   put:
   *     tags: [formation program types]
   *     summary: "Se usa para actualizar un tipo de programa de formacion."
   *     parameters:
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
  .put(function(req, res){
    return res.json('Tipo de programa de formacion actualizado');
  })
  /**
   * @swagger
   * "/demo/formationProgramTypes/{id}":
   *   delete:
   *     tags: [formation program types]
   *     summary: "Se usa para eliminar un tipo de programa de formacion."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function(req, res){
    return res.json('Tipo de programa de formacion eliminado');
  });

module.exports = router;
