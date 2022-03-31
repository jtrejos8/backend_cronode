const { Router } = require("express");

const router = Router();

router
  .route("/periodicities")
  /**
   * @swagger
   * "/demo/periodicities":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para obtener todas las periodicidades."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Diario"
      },
      {
          "id": 3,
          "name": "Mensual"
      },
      {
          "id": 2,
          "name": "Semanal"
      }
  ];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/periodicities":
   *   post:
   *     tags: [periodicities]
   *     summary: "Se usa para crear una nueva periodicidad."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre de la periodicidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Periodicidad creada');
  });

router
  .route("/periodicities/:id")
  /**
   * @swagger
   * "/demo/periodicities/{id}":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para obtener una periodicidad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = {
          "id": 1,
          "name": "Diario"
      }
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/periodicities/{id}":
   *   get:
   *     tags: [periodicities]
   *     summary: "Se usa para actualizar una periodicidad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre de periodicidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Periodicidad actualizada');
  })
  /**
   * @swagger
   * "/demo/periodicities/{id}":
   *   delete:
   *     tags: [periodicities]
   *     summary: "Se usa para eliminar una periodicidad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de periodicidad"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Periodicidad eliminada');
  });

module.exports = router;
