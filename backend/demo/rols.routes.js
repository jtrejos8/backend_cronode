const { Router } = require("express");

const router = Router();

router
  .route("/rols")
  /**
   * @swagger
   * "/demo/rols":
   *   get:
   *     tags: [rols]
   *     summary: "Se usa para obtener todos los roles."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let rols = [
      {
          "id": 5,
          "name": "Almacen"
      },
      {
          "id": 4,
          "name": "Aprendiz"
      },];
    return res.json(rols);
  })
  /**
   * @swagger
   * "/demo/rols":
   *   post:
   *     tags: [rols]
   *     summary: "Se usa para crear un nuevo rol."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del rol"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Rol creado');
  });
router
  .route("/rols/:id")
  /**
   * @swagger
   * "/demo/rols/{id}":
   *   get:
   *     tags: [rols]
   *     summary: "Se usa para obtener un rol en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del rol"
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
      "name": "Coordinador",
      "createdAt": "2020-09-15T02:55:52.000Z",
      "updatedAt": "2020-09-15T02:55:52.000Z"
  };
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/rols/{id}":
   *   put:
   *     tags: [rols]
   *     summary: "Se usa para actualizar un rol."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del rol"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Rol actualizado');
  })
  /**
   * @swagger
   * "/demo/rols/{id}":
   *   delete:
   *     tags: [rols]
   *     summary: "Se usa para eliminar un rol en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del rol"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Rol eliminado');
  });

module.exports = router;
