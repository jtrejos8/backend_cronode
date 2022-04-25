const { Router } = require("express");

const router = Router();
router
  .route("/formationPrograms")
  /**
   * @swagger
   * "/demo/formationPrograms":
   *   get:
   *     tags: [formation programs]
   *     summary: "Se usa para obtener todos los programas de formacion."
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let formationPrograms = [
        {
            "id": 1,
            "code": "821609 V1",
            "name": "821609 V1 - Mantenimiento Mecánico Industrial",
            "formationTypeId": 6,
            "responsibleAreaId": null,
            "isRegisterQualified": true,
            "isRegisterQualifiedDate": "2026-01-18T00:00:00.000Z",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z",
            "formationType": {
                "id": 6,
                "name": "Tecnólogo 24m",
                "electiveMonths": 18,
                "practiceMonths": 6,
                "createdAt": "2020-09-15T02:56:03.000Z",
                "updatedAt": "2020-09-15T02:56:03.000Z"
            },
            "responsibleArea": null
        },
        {
            "id": 2,
            "code": "223219 V102",
            "name": "223219 V102 - Mantenimiento Mecatrónico de Automotores",
            "formationTypeId": 6,
            "responsibleAreaId": null,
            "isRegisterQualified": true,
            "isRegisterQualifiedDate": "2026-06-27T00:00:00.000Z",
            "createdAt": "2020-09-15T02:56:03.000Z",
            "updatedAt": "2020-09-15T02:56:03.000Z",
            "formationType": {
                "id": 6,
                "name": "Tecnólogo 24m",
                "electiveMonths": 18,
                "practiceMonths": 6,
                "createdAt": "2020-09-15T02:56:03.000Z",
                "updatedAt": "2020-09-15T02:56:03.000Z"
            },
            "responsibleArea": null
        },
    ];
    return res.json({formationPrograms});
  })
  /**
   * @swagger
   * "/demo/formationPrograms":
   *   post:
   *     tags: [formation programs]
   *     summary: "Se usa para crear un nuevo programa de formacion."
   *     parameters:
   *       - name: "code" 
   *         description: "Codigo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "name" 
   *         description: "Nombre del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "formationTypeId" 
   *         description: "Id del tipo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "responsibleId" 
   *         description: "Id del jefe de area del programa"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isRegisterQualified" 
   *         description: "Esta calificado el registro"
   *         in: formData
   *         required: false
   *         type: boolean
   *       - name: "isRegisterQualifiedDate" 
   *         description: "Fecha de la calificacion del registro"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "성공"
   */
  .post(function (req, res) {
    return res.json('Programa de formacion creado');
  });
router
  .route("/formationPrograms/:id")
  /**
   * @swagger
   * "/demo/formationPrograms/{id}":
   *   get:
   *     tags: [formation programs]
   *     summary: "Se usa para obtener un programa de formacion es especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(function (req, res) {
    let formationProgram = {
      "id": 2,
      "code": "223219 V102",
      "name": "223219 V102 - Mantenimiento Mecatrónico de Automotores",
      "formationTypeId": 6,
      "responsibleAreaId": null,
      "isRegisterQualified": true,
      "isRegisterQualifiedDate": "2026-06-27T00:00:00.000Z",
      "createdAt": "2020-09-15T02:56:03.000Z",
      "updatedAt": "2020-09-15T02:56:03.000Z",
      "formationType": {
          "id": 6,
          "name": "Tecnólogo 24m",
          "electiveMonths": 18,
          "practiceMonths": 6,
          "createdAt": "2020-09-15T02:56:03.000Z",
          "updatedAt": "2020-09-15T02:56:03.000Z"
      },
      "responsibleArea": null
  };
  return res.json({formationProgram});
  })
  /**
   * @swagger
   * "/demo/formationPrograms/{id}":
   *   put:
   *     tags: [formation programs]
   *     summary: "Se usa para actualizar la informacion un programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "code" 
   *         description: "Codigo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "name" 
   *         description: "Nombre del programa de formacion"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "formationTypeId" 
   *         description: "Id del tipo del programa de formacion"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "responsibleId" 
   *         description: "Id del jefe de area del programa"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isRegisterQualified" 
   *         description: "Esta calificado el registro"
   *         in: formData
   *         required: false
   *         type: boolean
   *       - name: "isRegisterQualifiedDate" 
   *         description: "Fecha de la calificacion del registro"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(function (req, res) {
    return res.json('Programa de formacion actualizado');
  })
  /**
   * @swagger
   * "/demo/formationPrograms/{id}":
   *   delete:
   *     tags: [formation programs]
   *     summary: "Se usa para eliminar un programa de formacion."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del programa de formacion"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(function (req, res) {
    return res.json('Programa de formacion eliminado')
  });

module.exports = router;
