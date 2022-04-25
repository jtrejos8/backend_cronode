const { Router } = require("express");

const router = Router();

router
  .route("/positions")
  /**
   * @swagger
   * "/demo/positions":
   *   get:
   *     tags: [positions]
   *     summary: "Se usa para obtener todos los cargos."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
        "id": 1,
        "name": "Instructor de carrera administrativa",
        "type": "Instructor",
        "createdAt": "2020-09-15T02:55:52.000Z",
        "updatedAt": "2020-09-15T02:55:52.000Z"
    },
    {
        "id": 2,
        "name": "Instructor Planta temporal",
        "type": "Instructor",
        "createdAt": "2020-09-15T02:55:52.000Z",
        "updatedAt": "2020-09-15T02:55:52.000Z"
    },
    ]
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/positions":
   *   post:
   *     tags: [positions]
   *     summary: "Se usa para crear un nuevo cargo."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del cargo"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "type" 
   *         description: "Tipo del cargo"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Cargo creado');
  });
router
  .route("/positions/:id")
  /**
   * @swagger
   * "/demo/positions/{id}":
   *   get:
   *     tags: [positions]
   *     summary: "Se usa para obtener un cargo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del cargo"
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
      "name": "Instructor de carrera administrativa",
      "type": "Instructor",
      "createdAt": "2020-09-15T02:55:52.000Z",
      "updatedAt": "2020-09-15T02:55:52.000Z"
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/positions/{id}":
   *   put:
   *     tags: [positions]
   *     summary: "Se usa para actualizar un cargo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del cargo"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre del cargo"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "id" 
   *         description: "Tipo del cargo"
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Cargo actualizado');
  })
  /**
   * @swagger
   * "/demo/positions/{id}":
   *   delete:
   *     tags: [positions]
   *     summary: "Se usa para eliminar un cargo en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del cargo"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Cargo eliminado');
  });

module.exports = router;
