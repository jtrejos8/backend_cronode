const { Router } = require("express");

const router = Router();

router
  .route("/modalities")
  /**
   * @swagger
   * "/demo/modalities":
   *   get:
   *     tags: [modalities]
   *     summary: "Se usa para obtener todas las modalidades."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "DIURNO",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      {
          "id": 2,
          "name": "NOCTURNO",
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/modalities":
   *   post:
   *     tags: [modalities]
   *     summary: "Se usa para crear una modalidad."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre de modalidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Modalidad creada');
  });
router
  .route("/modalities/:id")
  /**
   * @swagger
   * "/demo/modalities/{id}":
   *   get:
   *     tags: [modalities]
   *     summary: "Se usa para obtener una modalidad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let modality = {
      "id": 1,
      "name": "DIURNO",
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z"
  };
  return res.json(modality);
  })
  /**
   * @swagger
   * "/demo/modalities/{id}":
   *   put:
   *     tags: [modalities]
   *     summary: "Se usa para actualizar la informacion de una modalidad."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre de la modalidad"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Modalidad actualizada');
  })
  /**
   * @swagger
   * "/demo/modalities/{id}":
   *   delete:
   *     tags: [modalities]
   *     summary: "Se usa para eliminar una modalidad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la modalidad"
   *         in: path
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Modalidad eliminada');
  });

module.exports = router;
