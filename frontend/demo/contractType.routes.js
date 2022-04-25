const { Router } = require("express");

const router = Router();
router
  .route("/contractTypes")
  /**
   * @swagger
   * "/demo/contractTypes":
   *   get:
   *     tags: [contract types]
   *     summary: "Se usa para obtener todos los tipos de contratos."
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function (req, res) {
    let contractTypes = [
      {
          "id": 1,
          "name": "Carrera Administrativa"
      },
      {
          "id": 3,
          "name": "Contratista"
      },];
    return res.json({contractTypes});
  })
  /**
   * @swagger
   * "/demo/contractTypes":
   *   post:
   *     tags: [contract types]
   *     summary: "Se usa para crear un tipo de contrato."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del tipo de contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a succesfull response"
   */
  .post(function (req, res) {
    return res.json('Tipo de contrato creado');
  });
router
  .route("/contractTypes/:id")
  /**
   * @swagger
   * "/demo/contractTypes/{id}":
   *   get:
   *     tags: [contract types]
   *     summary: "Se usa para obtener un tipo de contrato especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "성공"
   */
  .get(function (req, res) {
    let contractType = {
      "id": 1,
      "name": "Carrera Administrativa"
  };
  return res.json({contractType});
  })
  /**
   * @swagger
   * "/demo/contractTypes/{id}":
   *   put:
   *     tags: [contract types]
   *     summary: "Se usa para actualizar la informacion de un tipo de contrato."
   *     parameters:
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
  .put(function (req, res) {
    return res.json('Tipo de contrato actualizado');
  })
  /**
   * @swagger
   * "/demo/contractTypes/{id}":
   *   delete:
   *     tags: [contract types]
   *     summary: "Se usa para eliminar un tipo de contrato."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(function (req, res) {
    return res.json('Tipo de contrato eliminado');
  });

module.exports = router;
