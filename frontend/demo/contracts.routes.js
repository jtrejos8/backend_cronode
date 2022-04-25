const { Router } = require("express");

const router = Router();

router
  .route("/contracts")
  /**
   * @swagger
   * "/demo/contracts":
   *   get:
   *     tags: [contracts]
   *     summary: "Se usa para obtener todos los contratos."
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function (req, res) {
    let contracts = [
      {
        "id": 1,
        "name": "Contrato 1",
        "description": "description example",
        "userId": 2,
        "startDate": "2020-08-11T00:00:00.000Z",
        "endDate": "2020-10-11T00:00:00.000Z",
        "UserId": 2,
        "user": {
          "id": 2,
          "username": "Alejandro Moncada Betancur",
          "misena_email": "amoncadab@misena.edu.co",
          "phone": "3005597955",
          "document": "75099551",
          "position": {
            "id": 18,
            "name": "Apoyo Sennova",
            "type": "Apoyo"
          }
        }
      }
    ];
    return res.json({ contracts });
  })
  /**
   * @swagger
   * "/demo/contracts":
   *   post:
   *     tags: [contracts]
   *     summary: "Se usa para crear un contrato."
   *     parameters:
   *       - name: "name" 
   *         description: "Nombre del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "description" 
   *         description: "Descripcion del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Instructor al que sera asignado"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .post(function (req, res) {
    return res.json({
      "message": "Nuevo contrato creado",
      "contract": {
        "id": 3,
        "name": "Contrato 2",
        "description": "description example",
        "userId": 2,
        "startDate": "2020-08-11T00:00:00.000Z",
        "endDate": "2020-10-11T00:00:00.000Z",
        "updatedAt": "2020-09-12T03:33:08.994Z",
        "createdAt": "2020-09-12T03:33:08.994Z"
      }
    })
  })
router
  .route("/contracts/:id")
  /**
   * @swagger
   * "/demo/contracts/{id}":
   *   get:
   *     tags: [contracts]
   *     summary: "Se usa para obtener un contrato en especifico."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .get(function (req, res) {
    let contract = {
      "id": 1,
      "name": "Contrato 1",
      "description": "description example",
      "userId": 2,
      "startDate": "2020-08-11T00:00:00.000Z",
      "endDate": "2020-10-11T00:00:00.000Z",
      "UserId": 2,
      "user": {
        "id": 2,
        "username": "Alejandro Moncada Betancur",
        "misena_email": "amoncadab@misena.edu.co",
        "phone": "3005597955",
        "document": "75099551",
        "position": {
          "id": 18,
          "name": "Apoyo Sennova",
          "type": "Apoyo"
        }
      }
    };
    return res.json({contract});
  })
  /**
   * @swagger
   * "/demo/contracts/{id}":
   *   put:
   *     tags: [contracts]
   *     summary: "Se usa para actualizar la informacion de un contrato."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "name" 
   *         description: "Nombre del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "description" 
   *         description: "Descripcion del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "userId" 
   *         description: "Instructor al que sera asignado"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "startDate" 
   *         description: "Fecha inicio del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "endDate" 
   *         description: "Fecha fin del contrato"
   *         in: formData
   *         required: true
   *         type: string 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .put(function (req, res) {
    return res.json('Contrato actualizado');
  })
  /**
   * @swagger
   * "/demo/contracts/{id}":
   *   delete:
   *     tags: [contracts]
   *     summary: "Se usa para eliminar un contrato."
   *     parameters:
   *       - name: "id" 
   *         description: "Id del contrato"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "a successfull response"
   */
  .delete(function (req, res) {
    return res.json('Contrato eliminado');
  })

module.exports = router;
