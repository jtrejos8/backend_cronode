const { Router } = require("express");

const router = Router();

router
  .route("/temporaryUserActivities")
  /**
   * @swagger
   * "/demo/temporaryUserActivities":
   *   get:
   *     tags: [temporary user activities]
   *     summary: "Se usa para obtener los instructores o actividades que remplazan temporalmente a un instructor."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Instructor inglés 1",
          "observations": null,
          "type": "",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      {
          "id": 2,
          "name": "Instructor inglés 2",
          "observations": null,
          "type": "Instructor Temporal",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/temporaryUserActivities":
   *   post:
   *     tags: [temporary user activities]
   *     summary: "Se usa para crear un nuevo instructor o actividad temporal."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del instructor o actividad temporal"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "observations" 
   *         description: "Observaciones del instructor o actividad temporal"
   *         in: formData
   *         required: false
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del registro (Instructor Temporal ó Actividad temporal)"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Usuario/Actividad temporal creado');
  });
router
  .route("/temporaryUserActivities/:id")
  /**
   * @swagger
   * "/demo/temporaryUserActivities/{id}":
   *   get:
   *     tags: [temporary user activities]
   *     summary: "Se usa para obtener un instructor o actividad temporal en especifico"
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la actividad o instructor temporal"
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
      "name": "Instructor inglés 1",
      "observations": null,
      "type": "",
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/temporaryUserActivities/{id}":
   *   put:
   *     tags: [temporary user activities]
   *     summary: "Se usa para actualizar un instructor o actividad temporal."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del instructor o actividad temporal"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "observations" 
   *         description: "Observaciones del instructor o actividad temporal"
   *         in: formData
   *         required: false
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del registro (Instructor Temporal ó Actividad temporal)"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Usuario/actividad temporal creado');
  })
  /**
   * @swagger
   * "/demo/temporaryUserActivities/{id}":
   *   delete:
   *     tags: [temporary user activities]
   *     summary: "Se usa para eliminar un instructor o actividad temporal en especifico"
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la actividad o instructor temporal"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Actividad/usuario temporal eliminado');
  });

module.exports = router;
