const { Router } = require("express");

const router = Router();

router
  .route("/typeActivities")
  /**
   * @swagger
   * "/demo/typeActivities":
   *   get:
   *     tags: [type activities]
   *     summary: "Se usa para obtener todos los tipos de actividades."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Permiso sindical",
          "color": null,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      {
          "id": 2,
          "name": "Capacitación",
          "color": null,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/typeActivities":
   *   post:
   *     tags: [type activities]
   *     summary: "Se usa para crear un nuevo tipo de actividad."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "color" 
   *         description: "Color del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Tipo de actividad creado');
  });
router
  .route("/typeActivities/:id")
  /**
   * @swagger
   * "/demo/typeActivities/{id}":
   *   get:
   *     tags: [type activities]
   *     summary: "Se usa para obtener un tipo de actividad en especifico"
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
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
      "name": "Permiso sindical",
      "color": null,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/typeActivities/{id}":
   *   put:
   *     tags: [type activities]
   *     summary: "Se usa para actualizar un nuevo tipo de actividad."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
   *         in: header
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "color" 
   *         description: "Color del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Tipo de actividad actualizado');
  })
  /**
   * @swagger
   * "/demo/typeActivities/{id}":
   *   delete:
   *     tags: [type activities]
   *     summary: "Se usa para eliminar un tipo de actividad en especifico"
   *     parameters:
   *       - name: "id" 
   *         description: "Id del tipo de actividad"
   *         in: header
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Tipo de actividad eliminado');
  });

module.exports = router;
