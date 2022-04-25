const { Router } = require("express");
const RolsController = require("../../controllers/sgh/rols");
const verify = require("../../middlewares/jwt");

const router = Router();

router
  .route("/rols")
  /**
   * @swagger
   * "/api/rols":
   *   get:
   *     tags: [rols]
   *     summary: "Se usa para obtener todos los roles."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, RolsController.index)
  /**
   * @swagger
   * "/api/rols":
   *   post:
   *     tags: [rols]
   *     summary: "Se usa para crear un nuevo rol."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "name" 
   *         description: "Nombre del rol"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, RolsController.create);
router
  .route("/rols/:id")
  /**
   * @swagger
   * "/api/rols/{id}":
   *   get:
   *     tags: [rols]
   *     summary: "Se usa para obtener un rol en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del rol"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, RolsController.show)
  /**
   * @swagger
   * "/api/rols/{id}":
   *   put:
   *     tags: [rols]
   *     summary: "Se usa para actualizar un rol."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del rol"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, RolsController.update)
  /**
   * @swagger
   * "/api/rols/{id}":
   *   delete:
   *     tags: [rols]
   *     summary: "Se usa para eliminar un rol en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del rol"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, RolsController.destroy);

module.exports = router;
