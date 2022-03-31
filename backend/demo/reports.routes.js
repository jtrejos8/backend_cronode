const { Router } = require("express");

const router = Router();
/**
 * @swagger
 * paths:
 *  /demo/reports/groups/modality/{id}:
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
router.get('/reports/groups/modality/:id', function (req, res) {
    let groups = [
        {
            "id": 1,
            "codeTab": 21312,
            "modalityId": 1,
            "quantityLearners": 30,
            "activeLearners": 15,
            "electiveStartDate": "2020-09-15T02:56:03.000Z",
            "electiveEndDate": "2020-09-15T02:56:03.000Z",
            "practiceStartDate": "2020-09-15T02:56:03.000Z",
            "practiceEndDate": "2020-09-15T02:56:03.000Z",
            "offer": "Offer test",
            "managerId": 68,
            "formationProgramId": 1,
            "learnerId": null,
            "groupState": "Active",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        }
    ];
    return res.json({groups});
});
/**
 * @swagger
 * paths:
 *  /demo/reports/groups/managers/:
 *    get:
 *      summary: Se usa para obtener todos los gestores de grupo
 *      tags:
 *        - reports
 *      responses:
 *        '200':
 *          description: A successfull response
*/
router.get('/reports/groups/managers', function (req, res) {
    let managers = [
        {
            "id": 68,
            "username": "Julián Humberto Salazar Pineda",
            "misena_email": "Jusapi824@misena.edu.co",
            "institutional_email": "jsalazar@sena.edu.co",
            "password": "$2b$10$MOYGd/TjdFQLlSu0LorLpOYz111qu/ULBd7C4yprXP9ls2H7YEa0q",
            "document": "75106549",
            "birthdate": "2020-10-07T05:00:00.000Z",
            "phone": "3113778657",
            "phone_ip": "",
            "gender": "M",
            "positionId": 1,
            "rolId": 2,
            "contractTypeId": 1,
            "profession": "",
            "grade": 0,
            "isBossArea": false,
            "last_academic_level": "",
            "state": "Activo",
            "photo": null,
            "token": null,
            "email_state": false,
            "createdAt": "2020-09-15T02:55:58.000Z",
            "updatedAt": "2020-09-15T02:55:58.000Z",
            "group": [
                {
                    "id": 1,
                    "codeTab": 21312,
                    "modalityId": 1,
                    "quantityLearners": 30,
                    "activeLearners": 15,
                    "electiveStartDate": "2020-09-15T02:56:03.000Z",
                    "electiveEndDate": "2020-09-15T02:56:03.000Z",
                    "practiceStartDate": "2020-09-15T02:56:03.000Z",
                    "practiceEndDate": "2020-09-15T02:56:03.000Z",
                    "offer": "Offer test",
                    "managerId": 68,
                    "formationProgramId": 1,
                    "learnerId": null,
                    "groupState": "Active",
                    "createdAt": "2020-09-15T02:56:03.000Z",
                    "updatedAt": "2020-09-15T02:56:03.000Z"
                }
            ]
        }
    ];
    return res.json({managers});
});
/**
 * @swagger
 * "/demo/reports/groups/firstTrimester":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que estan en primer trimestre"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/firstTrimester', function (req, res) {
    let groups = [
        {
            "id": 1,
            "codeTab": 21312,
            "modalityId": 1,
            "quantityLearners": 30,
            "activeLearners": 15,
            "electiveStartDate": "2020-09-15T02:56:03.000Z",
            "electiveEndDate": "2020-09-15T02:56:03.000Z",
            "practiceStartDate": "2020-09-15T02:56:03.000Z",
            "practiceEndDate": "2020-09-15T02:56:03.000Z",
            "offer": "Offer test",
            "managerId": 68,
            "formationProgramId": 1,
            "learnerId": null,
            "groupState": "Active",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        }
    ];
    return res.json({groups});
});
/**
 * @swagger
 * "/demo/reports/groups/practice":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que esten en practica"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/practice', function (req, res) {
    let groups = [
        {
            "id": 1,
            "codeTab": 21312,
            "modalityId": 1,
            "quantityLearners": 30,
            "activeLearners": 15,
            "electiveStartDate": "2020-09-15T02:56:03.000Z",
            "electiveEndDate": "2020-09-15T02:56:03.000Z",
            "practiceStartDate": "2020-09-15T02:56:03.000Z",
            "practiceEndDate": "2020-09-15T02:56:03.000Z",
            "offer": "Offer test",
            "managerId": 68,
            "formationProgramId": 1,
            "learnerId": null,
            "groupState": "Active",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        }
    ];
    return res.json({groups});
});
/**
 * @swagger
 * "/demo/reports/groups/day/{day}":
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
router.get('/reports/groups/day/:day', function (req, res) {
    let groups = [
        {
            "id": 1,
            "codeTab": 21312,
            "modalityId": 1,
            "quantityLearners": 30,
            "activeLearners": 15,
            "electiveStartDate": "2020-09-15T02:56:03.000Z",
            "electiveEndDate": "2020-09-15T02:56:03.000Z",
            "practiceStartDate": "2020-09-15T02:56:03.000Z",
            "practiceEndDate": "2020-09-15T02:56:03.000Z",
            "offer": "Offer test",
            "managerId": 68,
            "formationProgramId": 1,
            "learnerId": null,
            "groupState": "Active",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        }
    ];
    return res.json({groups});
});
/**
 * @swagger
 * "/demo/reports/groups/elective":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener todos los grupos que estan en ultimo trimestre de su etapa electiva"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/groups/elective', function (req, res) {
    let groups = [
        {
            "id": 1,
            "codeTab": 21312,
            "modalityId": 1,
            "quantityLearners": 30,
            "activeLearners": 15,
            "electiveStartDate": "2020-09-15T02:56:03.000Z",
            "electiveEndDate": "2020-09-15T02:56:03.000Z",
            "practiceStartDate": "2020-09-15T02:56:03.000Z",
            "practiceEndDate": "2020-09-15T02:56:03.000Z",
            "offer": "Offer test",
            "managerId": 68,
            "formationProgramId": 1,
            "learnerId": null,
            "groupState": "Active",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        }
    ];
    return res.json({groups});
});

/**
 * @swagger
 * "/demo/reports/instructors/zone/{id}":
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
router.get('/reports/instructors/zone/:id', function (req, res) {
    let zone = {
        "id": 1,
        "name": "Alto Occidente",
        "createdAt": "2020-09-15T02:56:03.000Z",
        "updatedAt": "2020-09-15T02:56:03.000Z",
        "users": [
            {
                "id": 9,
                "username": "Andrea Del Pilar Álvarez Camargo",
                "misena_email": "adalvarez40@misena.edu.co",
                "document": "30405204",
                "phone": "3146611226",
                "UserZones": {
                    "createdAt": "2020-09-15T02:55:53.000Z",
                    "updatedAt": "2020-09-15T02:55:53.000Z",
                    "UserId": 9,
                    "ZoneId": 1
                }
            },
            {
                "id": 18,
                "username": "Beatriz Elena Sepúlveda López",
                "misena_email": "beasepulveda@misena.edu.co",
                "document": "42135428",
                "phone": "3005668382",
                "UserZones": {
                    "createdAt": "2020-09-15T02:55:54.000Z",
                    "updatedAt": "2020-09-15T02:55:54.000Z",
                    "UserId": 18,
                    "ZoneId": 1
                }
            },
        ]
    }
    return res.json({zone});
});
/**
 * @swagger
 * "/demo/reports/instructors/contractType/{id}":
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
router.get('/reports/instructors/contractType/:id', function (req, res) {
    let users = [
        {
            "id": 3,
            "username": "Alexander García Vásquez",
            "misena_email": "agarciavasquez@misena.edu.co",
            "document": "7684828",
            "phone": "3148515827"
        },
        {
            "id": 7,
            "username": "Ana Judith García Sánchez",
            "misena_email": "ajgarcia@misena.edu.co",
            "document": "30238855",
            "phone": "3007786373"
        },]
    return res.json({users});
});
/**
 * @swagger
 * /demo/reports/instructors/contracts/:
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
router.post('/reports/instructors/contracts/', function (req, res) {

});
/**
 * @swagger
 * "/demo/reports/instructors/withmore40/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores (contratistas) con mas de 40 horas programadas."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/withmore40/', function (req, res) {
    return res.json('Devuelve una lista de instructores contratistas que tengan programado mas de 40 horas')
})
/**
 * @swagger
 * "/demo/reports/instructors/withmore32/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores (planta) con mas de 32 horas programadas."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/withmore32/', function (req, res) {
    return res.json('Devuelve una lista de instructores de planta que tengan programado mas de 32 horas')
})
/**
 * @swagger
 * "/demo/reports/instructors/artmedia/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores que tienen una modalidad articulada con la media"
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/artmedia/', function (req, res) {
    let instructors = [];
    return res.json({instructors});
});
/**
 * @swagger
 * "/demo/reports/instructors/municipality/":
 *   get:
 *     tags: [reports]
 *     summary: "Se usa para obtener los instructores dan clase en municipios."
 *     responses: 
 *         '200':
 *              description: "A successfull response"
 */
router.get('/reports/instructors/municipality/', function (req, res) {
    let instructors = [
        {
            "id": 9,
            "username": "Andrea Del Pilar Álvarez Camargo",
            "misena_email": "adalvarez40@misena.edu.co",
            "institutional_email": null,
            "password": "$2b$10$TU.Tot1jBULlyUdCogP86uAmvyJJmieo.ihpCm0X4pSey65uOL0gS",
            "document": "30405204",
            "birthdate": "2020-11-14T05:00:00.000Z",
            "phone": "3146611226",
            "phone_ip": "",
            "gender": "F",
            "positionId": 7,
            "rolId": 2,
            "contractTypeId": 3,
            "profession": "Arquitecta",
            "grade": 0,
            "isBossArea": false,
            "last_academic_level": "Especialización",
            "state": "Activo",
            "photo": null,
            "token": null,
            "email_state": false,
            "createdAt": "2020-09-15T02:55:53.000Z",
            "updatedAt": "2020-09-15T02:55:53.000Z",
            "UserZones": {
                "createdAt": "2020-09-15T02:55:53.000Z",
                "updatedAt": "2020-09-15T02:55:53.000Z",
                "UserId": 9,
                "ZoneId": 1
            }
        },
        {
            "id": 18,
            "username": "Beatriz Elena Sepúlveda López",
            "misena_email": "beasepulveda@misena.edu.co",
            "institutional_email": null,
            "password": "$2b$10$DMj8E9DpwFtCCU8BcrwXeeXbsTSL30rKkLIhPqVeTGaK1gJwirGe.",
            "document": "42135428",
            "birthdate": "2020-12-01T05:00:00.000Z",
            "phone": "3005668382",
            "phone_ip": "",
            "gender": "F",
            "positionId": 6,
            "rolId": 2,
            "contractTypeId": 3,
            "profession": "Ingeniera Electricista",
            "grade": 0,
            "isBossArea": false,
            "last_academic_level": "Profesional",
            "state": "Activo",
            "photo": null,
            "token": null,
            "email_state": false,
            "createdAt": "2020-09-15T02:55:54.000Z",
            "updatedAt": "2020-09-15T02:55:54.000Z",
            "UserZones": {
                "createdAt": "2020-09-15T02:55:54.000Z",
                "updatedAt": "2020-09-15T02:55:54.000Z",
                "UserId": 18,
                "ZoneId": 1
            }
        },];
    return res.json({instructors});
});

/**
 * @swagger
 * "/demo/reports/ambients/usedHoursWeek/{ambientId}":
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
router.get('/reports/ambients/usedHoursWeek/:ambientId', function (req, res) {
    let data = {
        "ambient": {
            "id": 1,
            "name": "SISTEMAS 1",
            "state": "activo",
            "usability": "Tecnologicos",
            "userId": null,
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z"
        },
        "hours": 32.5
    }
    return res.json(data);
});
/**
 * @swagger
 * "/demo/reports/ambients/getFreeByHours":
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

router.post('/reports/ambients/getFreeByHours', function (req, res) {
    return res.json('Devuelve una lista de ambientes que esten disponibles en el rango de horas dado')
});

module.exports = router;
