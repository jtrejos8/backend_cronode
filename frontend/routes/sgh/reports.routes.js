const { Router } = require("express");
const ReportController = require('../../controllers/sgh/reports');
const verify = require("../../middlewares/jwt");

const router = Router();
/**
 * @swagger
 * paths:
 *  /api/reports/groups/modality/{id}:
 *    get:
 *      summary: Se usa para obtener todos los grupos por su modalidad
 *      tags:
 *        - reports
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *      responses:
 *        '200':
 *          description: A successfull response
*/
router.get('/reports/groups/modality/:id', ReportController.groups.getPerModality);
/**
 * @swagger
 * paths:
 *  /api/reports/groups/managers/:
 *    get:
 *      summary: Se usa para obtener todos los gestores de grupo
 *      tags:
 *        - reports
 *      responses:
 *        '200':
 *          description: A successfull response
*/
router.get('/reports/groups/managers', ReportController.groups.getManagers);
/**
 * @swagger
 * "/api/reports/groups/firstTrimester":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que estan en primer trimestre"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/firstTrimester', ReportController.groups.getPerFirstTrimester);
/**
 * @swagger
 * "/api/reports/groups/practice":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que esten en practica"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/practice', ReportController.groups.getPerPractice);
/**
 * @swagger
 * "/api/reports/groups/day/{day}":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que tienen clase en un dia en especifico"
 *     parameters:
 *       - name: "day" 
 *         description: "Day of week"
 *         in: path
 *         required: true
 *         type: string 
 *         example: "Lunes"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/day/:day', ReportController.groups.getPerDay);
/**
 * @swagger
 * "/api/reports/groups/elective":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que estan en ultimo trimestre de su etapa electiva"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/elective', ReportController.groups.getElectiveLast);

/**
 * @swagger
 * "/api/reports/instructors/zone/{id}":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los instructores por una zona"
 *     parameters:
 *       - name: id 
 *         in: path
 *         required: true
 *         type: integer 
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/zone/:id', ReportController.instructors.getPerZone);
/**
 * @swagger
 * "/api/reports/instructors/contractType/{id}":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los instructores por su tipo de contrato"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/contractType/:id', ReportController.instructors.getPerContractType);
/**
 * @swagger
 * /api/reports/instructors/contracts/:
 *   post:
 *     tags: [reports]
 *     summary: Se usa para obtener los instructores(contratistas) que dado un rango de fechas termina su contrato
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: startDate
 *         description: Fecha inicio
 *         in: formData
 *         required: true
 *         type: string
 *       - name: endDate
 *         description: Fecha fin
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A successfull response
 */
router.post('/reports/instructors/contracts/', ReportController.instructors.getPerContract);
/**
 * @swagger
 * "/api/reports/instructors/withmore40/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores (contratistas) con mas de 40 horas programadas."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/withmore40/', ReportController.instructors.get40hours); // Contratista con mas de 40 horas
/**
 * @swagger
 * "/api/reports/instructors/withmore32/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores (planta) con mas de 32 horas programadas."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/withmore32/', ReportController.instructors.get32hours); // Planta con mas de 32 horas
/**
 * @swagger
 * "/api/reports/instructors/artmedia/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores que tienen una modalidad articulada con la media"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/artmedia/', ReportController.instructors.getArtMedia);
/**
 * @swagger
 * "/api/reports/instructors/municipality/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores dan clase en municipios."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/municipality/', ReportController.instructors.getMunicipality);

/**
 * @swagger
 * "/api/reports/ambients/usedHoursWeek/{ambientId}":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener las horas que un ambient ha sido utilizado en una semana"
 *     parameters: 
 *      - in: path
 *        name: ambientId
 *        required: true
 *        type: integer
 *     responses: 
 *         '200':
 *              description: "A successfull response"    
 */
router.get('/reports/ambients/usedHoursWeek/:ambientId', ReportController.ambients.getHourUsedInWeek);
/**
 * @swagger
 * "/api/reports/ambients/getFreeByHours":
 *   post:
 *     tags: [reports]
 *     summary: "Se usa para obtener los ambientes que dado un rango de horas y un dia estan disponibles"
 *     parameters:
 *       - name: "day" 
 *         description: "Dia de la semana"
 *         in: formData
 *         required: true
 *         type: string 
 *         example: "Lunes"
 *       - name: "sd" 
 *         description: "Fecha inicio"
 *         in: formData
 *         required: true
 *         type: string 
 *         example: "2020-08-26 07:00"
 *       - name: "ed" 
 *         description: "Fecha fin"
 *         in: formData
 *         required: true
 *         type: string 
 *         example: "2020-08-26 09:00"
 *     responses:
 *       200:
 *         description: "A successfull response"
 */

router.post('/reports/ambients/getFreeByHours', ReportController.ambients.getFreeByHours);

module.exports = router;
