const { Router } = require("express");

const router = Router();

router
  .route("/deprogrammingReasons")
  /**
   * @swagger
   * "/demo/deprogrammingReasons":
   *   get:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para obtener las razones para desprogramar un horario."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let deprogrammingReasons = [
      {
        "id": 4,
        "name": "Compensatorio"
      },
      {
        "id": 3,
        "name": "Compensatorio por votación"
      },
    ];
    return res.json({ deprogrammingReasons });
  })
  /**
   * @swagger
   * "/demo/deprogrammingReasons":
   *   post:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para crear una razon para desprogramar un horario."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre de la razon"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Razon de desprogramacion creada');
  });

router
  .route("/deprogrammingReasons/:id")
  /**
   * @swagger
   * "/demo/deprogrammingReasons/{id}":
   *   get:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para obtener una razon en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let deprogrammingReason = {
      "id": 4,
      "name": "Compensatorio"
    };
    return res.json({ deprogrammingReason });
  })
  /**
   * @swagger
   * "/demo/deprogrammingReasons/{id}":
   *   put:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para actualizar la informacion de la razon."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Razon de desprogramacion actualizada');
  })
  /**
   * @swagger
   * "/demo/deprogrammingReasons/{id}":
   *   delete:
   *     tags: [deprogramming reasons]
   *     summary: "Se usa para eliminar una razon de desprogramacion."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la razon"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Razon de desprogramacion eliminada');
  });

module.exports = router;
