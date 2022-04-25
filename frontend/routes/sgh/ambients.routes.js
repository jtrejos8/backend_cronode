const { Router } = require("express");
const AmbientsController = require("../../controllers/sgh/ambients");
const verify = require("../../middlewares/jwt");

const router = Router();
/**
 * @swagger
 * paths:
 *  /demo/ambients/schedules:
 *    get:
 *      summary: "Se usa para obtener los horarios de todos los ambientes"
 *      tags:
 *        - ambients
 *      parameters:
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/schedules", verify, AmbientsController.getSchedules);
/**
 * @swagger
 * paths:
 *  /demo/ambients/schedules/{id}:
 *    get:
 *      summary: Se usa para obtener el horario de un ambiente en especifico
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/schedules/:id", verify, AmbientsController.getSchedule);
/**
 * @swagger
 * paths:
 *  /demo/ambients/pdf/{id}:
 *    get:
 *      summary: Se usa para exportar el horario de un ambiente en especifico en pdf
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A pdf file
 */
router.get('/ambients/pdf/:id', verify, AmbientsController.createPdf);
/**
 * @swagger
 * paths:
 *  /demo/ambients/excel/{id}:
 *    get:
 *      summary: Se usa para exportar el horario de un ambiente en especifico en excel
 *      tags:
 *        - ambients
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *            minimun: 1
 *      responses:
 *        '200':
 *          description: A excel file
 */
router.get('/ambients/excel/:id', verify, AmbientsController.createExcel);
/**
 * @swagger
 * paths:
 *  /demo/ambients/detail:
 *    get:
 *      summary: Se usa para obtener informacion reducida de todos los ambientes
 *      tags:
 *        - ambients
 *      parameters:
 *      responses:
 *        '200':
 *          description: A successfull response
 */
router.get("/ambients/detail", verify, AmbientsController.detail);

router
  .route("/ambients")
/**
 * @swagger
 * paths:
 *  /demo/ambients/:
 *    get:
 *      summary: Se usa para obtener todos los ambientes
 *      tags:
 *        - ambients
 *      responses:
 *        '200':
 *          description: A successfull response
*/
  .get(verify, AmbientsController.index)
/**
 * @swagger
 * "/demo/ambients":
 *   post:
 *     tags: [ambients]
 *     summary: "Se usa para crear un ambiente"
 *     parameters:
 *       - name: "name" 
 *         description: "Nombre del ambiente"
 *         in: formData
 *         required: true
 *         type: string
 *       - name: "usability" 
 *         description: "Usabilidad"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "state" 
 *         description: "Estao del ambiente"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "userId" 
 *         description: "Gestor del ambiente"
 *         in: formData
 *         required: true
 *         type: integer 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
  .post(verify, AmbientsController.create);
router
  .route("/ambients/:id")
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   put:
   *     tags: [ambients]
   *     summary: "Se usa para actualizar un ambiente."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de authorizacion"
   *         in: header
   *         required: true
   *         type: string
   *       - name: "id" 
   *         description: "id del ambiente"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "nombre del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "usabiblity" 
   *         description: "usabilidad del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "state" 
   *         description: "estado del ambiente"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "gestor del ambiente"
   *         in: formData
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .put(verify, AmbientsController.update)
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   get:
   *     tags: [ambients]
   *     summary: "Se usa para obtener un ambiente en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del ambiente"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(verify, AmbientsController.show)
  /**
   * @swagger
   * "/demo/ambients/{id}":
   *   delete:
   *     tags: [ambients]
   *     summary: "Se usa para eliminar un ambiente"
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del ambiente"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(verify, AmbientsController.destroy);

module.exports = router;
