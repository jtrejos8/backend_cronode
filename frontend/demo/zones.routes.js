const { Router } = require("express");

const router = Router();

router
  .route("/zones")
  /**
   * @swagger
   * "/demo/zones":
   *   get:
   *     tags: [zones]
   *     summary: "Se usa para obtener todas las zonas en que se da formacion."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Alto Occidente",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      {
          "id": 2,
          "name": "Alto Oriente",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      }]
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/zones":
   *   post:
   *     tags: [zones]
   *     summary: "Se usa para crear una nueva zona."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Zona creada');
  });
router
  .route("/zones/:id")
  /**
   * @swagger
   * "/demo/zones/{id}":
   *   get:
   *     tags: [zones]
   *     summary: "Se usa para obtener una zona en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = {
      "id": 1,
      "name": "Alto Occidente",
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/zones/{id}":
   *   put:
   *     tags: [zones]
   *     summary: "Se usa para actulizar una zona en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la zona"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Zona actualizada');
  })
  /**
   * @swagger
   * "/demo/zones/{id}":
   *   delete:
   *     tags: [zones]
   *     summary: "Se usa para eliminar una zona en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la zona"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Zona eliminada');
  });

module.exports = router;
