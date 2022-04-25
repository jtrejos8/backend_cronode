const { Router } = require("express");

const router = Router();

router
.route("/municipalities")
  /**
   * @swagger
   * "/demo/municipalities":
   *   get:
   *     tags: [municipalities]
   *     summary: "Se usa para obtener todos los municipios." 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Aguadas",
          "zoneId": 6,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "ZoneId": 6,
          "zone": {
              "id": 6,
              "name": "Norte Caldense",
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      },
      {
          "id": 2,
          "name": "Anserma",
          "zoneId": 3,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "ZoneId": 3,
          "zone": {
              "id": 3,
              "name": "Bajo Occidente",
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      },]
      return res.json(data);
  })
  /**
   * @swagger
   * "/demo/municipalities":
   *   post:
   *     tags: [municipalities]
   *     summary: "Se usa para agregar un municipio."
   *     parameters: 
   *       - name: "name" 
   *         description: "Nombre del municipio"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "zoneId" 
   *         description: "Id de la zona a la que pertenece"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Municipio creado');
  });
router
  .route("/municipalities/:id")
  /**
   * @swagger
   * "/demo/municipalities/{id}":
   *   get:
   *     tags: [municipalities]
   *     summary: "Se usa para obtener un municipio en especifico."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = {
          "id": 1,
          "name": "Aguadas",
          "zoneId": 6,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "ZoneId": 6,
          "zone": {
              "id": 6,
              "name": "Norte Caldense",
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      };
      return res.json(data);
  })
  /**
   * @swagger
   * "/demo/municipalities/{id}":
   *   put:
   *     tags: [municipalities]
   *     summary: "Se usa para actualizar la informacion de un municipio."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre del municipio"
   *         in: header
   *         required: true
   *         type: string
   *       - name: "zoneId" 
   *         description: "Id de la zona del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Municipio actualizado');
  })
  /**
   * @swagger
   * "/demo/municipalities/{id}":
   *   delete:
   *     tags: [municipalities]
   *     summary: "Se usa para eliminar un municipio en especifico."
   *     parameters: 
   *       - name: "id" 
   *         description: "Id del municipio"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Municipio eliminado')
  });

module.exports = router;
