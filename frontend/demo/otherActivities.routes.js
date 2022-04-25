const { Router } = require("express");

const router = Router();

router
  .route("/otherActivities")
  /**
   * @swagger
   * "/demo/otherActivities":
   *   get:
   *     tags: [other activities]
   *     summary: "Se usa para obtener otras actividades que pueden tener los instructores."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
          "id": 1,
          "name": "Salida escolar",
          "typeActivityId": 1,
          "day": "Lunes",
          "startDate": "2020-08-11T00:00:00.000Z",
          "endDate": "2020-08-12T00:00:00.000Z",
          "userId": 1,
          "createdAt": "2020-09-15T03:35:06.000Z",
          "updatedAt": "2020-09-15T03:35:06.000Z",
          "UserId": 1,
          "user": {
              "id": 1,
              "username": "Adriana Rodríguez Morales",
              "misena_email": "arodriguez949@misena.edu.co",
              "institutional_email": "adrrodriguez@sena.edu.co",
              "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
              "document": "51808949",
              "birthdate": "2020-05-11T05:00:00.000Z",
              "phone": "3176366444",
              "phone_ip": "62441",
              "gender": "F",
              "positionId": 2,
              "rolId": 2,
              "contractTypeId": 2,
              "profession": "",
              "grade": 11,
              "isBossArea": false,
              "last_academic_level": "Maestria",
              "state": "Activo",
              "photo": null,
              "token": null,
              "email_state": false,
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "typeActivity": {
              "id": 1,
              "name": "Permiso sindical",
              "color": null,
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      }
  ];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/otherActivities":
   *   post:
   *     tags: [other activities]
   *     summary: "Se usa para registrar una actividad a un instructor."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "typeActivityId" 
   *         description: "Id del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "starDate" 
   *         description: "Fecha inicio en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Id del instructor al cual se registrara la actividad"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Actividad creada');
  });
router
  .route("/otherActivities/:id")
  /**
   * @swagger
   * "/demo/otherActivities/{id}":
   *   get:
   *     tags: [other activities]
   *     summary: "Se usa para obtener una actividad en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la actividad"
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
          "name": "Salida escolar",
          "typeActivityId": 1,
          "day": "Lunes",
          "startDate": "2020-08-11T00:00:00.000Z",
          "endDate": "2020-08-12T00:00:00.000Z",
          "userId": 1,
          "createdAt": "2020-09-15T03:35:06.000Z",
          "updatedAt": "2020-09-15T03:35:06.000Z",
          "UserId": 1,
          "user": {
              "id": 1,
              "username": "Adriana Rodríguez Morales",
              "misena_email": "arodriguez949@misena.edu.co",
              "institutional_email": "adrrodriguez@sena.edu.co",
              "password": "$2b$10$xcD04aSMyb1DqN46F74E1ubQF5Ex1AjVfhqNyfqq4iq1s7/bupM62",
              "document": "51808949",
              "birthdate": "2020-05-11T05:00:00.000Z",
              "phone": "3176366444",
              "phone_ip": "62441",
              "gender": "F",
              "positionId": 2,
              "rolId": 2,
              "contractTypeId": 2,
              "profession": "",
              "grade": 11,
              "isBossArea": false,
              "last_academic_level": "Maestria",
              "state": "Activo",
              "photo": null,
              "token": null,
              "email_state": false,
              "createdAt": "2020-09-15T02:55:52.000Z",
              "updatedAt": "2020-09-15T02:55:52.000Z"
          },
          "typeActivity": {
              "id": 1,
              "name": "Permiso sindical",
              "color": null,
              "createdAt": "2020-09-15T02:56:03.000Z",
              "updatedAt": "2020-09-15T02:56:03.000Z"
          }
      };
      return res.json(data);
  })
  /**
   * @swagger
   * "/demo/otherActivities/{id}":
   *   put:
   *     tags: [other activities]
   *     summary: "Se usa para actualizar la informacion de un actividad."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la actividad"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "name" 
   *         description: "Nombre de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "typeActivityId" 
   *         description: "Id del tipo de actividad"
   *         in: formData
   *         required: true
   *         type: integer 
   *       - name: "day" 
   *         description: "Dia en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "starDate" 
   *         description: "Fecha inicio en que se realizara la actividad"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha fin de la actividad"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Id del instructor al cual se registrara la actividad"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Actividad actualizada');
  })
  /**
   * @swagger
   * "/demo/otherActivities/{id}":
   *   delete:
   *     tags: [other activities]
   *     summary: "Se usa para eliminar una actividad es especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id de la actividad"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Actividad eliminada');
  });

module.exports = router;
