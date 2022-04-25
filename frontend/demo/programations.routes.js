const { Router } = require("express");

const router = Router();
router
  .route("/programations")
  /**
   * @swagger
   * "/demo/programations":
   *   get:
   *     tags: [programations]
   *     summary: "Se usa para obtener todas las programaciones."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let data = [
      {
        "id": 1,
        "startDate": "2020-09-15T02:56:03.000Z",
        "endDate": "2020-11-14T05:00:00.000Z",
        "trimester": 3,
        "groupId": 1,
        "municipalityId": 1,
        "isActive": true,
        "createdAt": "2020-09-15T02:56:03.000Z",
        "updatedAt": "2020-09-15T02:56:03.000Z",
        "GroupId": 1,
        "MunicipalityId": 1,
        "group": {
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
        },
        "municipality": {
            "id": 1,
            "name": "Aguadas",
            "zoneId": 6,
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z",
            "ZoneId": 6
        },
        "results": []
    }
    ];
    return res.json(data);
  })
  /**
   * @swagger
   * "/demo/programations":
   *   post:
   *     tags: [programations]
   *     summary: "Se usa para crear una nueva programacion."
   *     parameters:
   *       - name: "startDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "trimester" 
   *         description: "Trimestre del año de la programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "groupId" 
   *         description: "Id del grupo que tendra esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "municipalityId" 
   *         description: "Id del municipio donde se realizara esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isActive" 
   *         description: "Estado de la programacion, si es activa o no (1 => SI,  0 => NO)"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(function (req, res) {
    return res.json('Programacion creada');
  });
router
  .route("/programations/:id")
  /**
   * @swagger
   * "/demo/programations/{id}":
   *   get:
   *     tags: [programations]
   *     summary: "Se usa para obtener una programacion en especifico."
   *     parameters:
   *       - id: "id" 
   *         description: "Id de la programacion"
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
      "startDate": "2020-09-15T02:56:03.000Z",
      "endDate": "2020-11-14T05:00:00.000Z",
      "trimester": 3,
      "groupId": 1,
      "municipalityId": 1,
      "isActive": true,
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z",
      "GroupId": 1,
      "MunicipalityId": 1,
      "group": {
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
      },
      "municipality": {
          "id": 1,
          "name": "Aguadas",
          "zoneId": 6,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z",
          "ZoneId": 6
      },
      "results": []
  };
  return res.json(data);
  })
  /**
   * @swagger
   * "/demo/programations/{id}":
   *   put:
   *     tags: [programations]
   *     summary: "Se usa para actualizar una programacion en especifico."
   *     parameters:
   *       - id: "id" 
   *         description: "Id de la programacion"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "startDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "endDate" 
   *         description: "Fecha inicio de la programacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "trimester" 
   *         description: "Trimestre del año de la programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "groupId" 
   *         description: "Id del grupo que tendra esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "municipalityId" 
   *         description: "Id del municipio donde se realizara esta programacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isActive" 
   *         description: "Estado de la programacion, si es activa o no (1 => SI,  0 => NO)"
   *         in: formData
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Programacion actualizada');
  })
  /**
   * @swagger
   * "/demo/programations/{id}":
   *   delete:
   *     tags: [programations]
   *     summary: "Se usa para eliminar una programacion en especifico."
   *     parameters:
   *       - id: "id" 
   *         description: "Id de la programacion"
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Programacion eliminada');
  });

module.exports = router;
