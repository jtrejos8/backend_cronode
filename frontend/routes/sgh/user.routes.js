const { Router } = require("express");
const UsersController = require("../../controllers/sgh/users");
const upload = require("../../middlewares/multer");
const verify = require("../../middlewares/jwt");

const router = Router();

/**
 * @swagger
 * "/api/users/excel/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para exportar el horario de un usuario en especifico en excel."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get('/users/excel/:id', verify, UsersController.excel);
/**
 * @swagger
 * "/api/users/pfd/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para exportar el horario de un usuario en especifico en pfd."
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/pdf/:id", verify, UsersController.getSchedulesByIdForPDF);
/**
 * @swagger
 * "/api/users/detail":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para obtener informacion reducida de los usuarios."
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
router.get("/users/detail", verify, UsersController.detail);

/**
 * @swagger
 * "/api/users/schedules":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para obtener todos los usuarios con sus respectivos horarios."
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
router.get("/users/schedules", verify, UsersController.getSchedules);
/**
 * @swagger
 * "/api/users/schedules/{id}":
 *   get:
 *     tags: [users]
 *     summary: "Se usa para el horario de un usuario en especifico"
 *     parameters:
 *       - name: "authorization" 
 *         description: "Token de autorizacion"
 *         in: header
 *         required: true
 *         type: string 
 *       - name: "id" 
 *         description: "Id del usuario"
 *         in: header
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.get("/users/schedules/:id", verify, UsersController.getSchedule);

/**
 * @swagger
 * "/api/passwordRecovery":
 *   post:
 *     tags: [users]
 *     summary: "Se usa para solicitar un codigo de verificacion para la recuperacion de contraseña."
 *     parameters:
 *       - name: "misena_email" 
 *         description: "Correo misena para comprobar la existencia del usuario y si es correcta, enviar un codigo de verficacion"
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.post('/passwordRecovery', UsersController.passwordRecovery);
/**
 * @swagger
 * "/api/passwordRecovery2":
 *   post:
 *     tags: [users]
 *     summary: "Se usa para validar el codigo de verificacion y si es valido recuperar la contraseña."
 *     parameters:
 *       - name: "code" 
 *         description: "Codigo de verificacion"
 *         in: formData
 *         required: true
 *         type: string 
 *       - name: "userId" 
 *         description: "Id del usuario a cambiar contraseña"
 *         in: formData
 *         required: true
 *         type: integer
 *       - name: "newPassword" 
 *         description: "Nueva contraseña"
 *         in: formData
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: "A successfull response"
 */
router.post('/passwordRecovery2', UsersController.passwordRecovery2);

router
  .route("/users")
  /**
   * @swagger
   * "/api/users":
   *   get:
   *     tags: [users]
   *     summary: "Se usa para obtener todos los usuarios del sistema."
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
  .get(verify, UsersController.index)
  /**
   * @swagger
   * "/api/users":
   *   post:
   *     tags: [users]
   *     summary: "Se usa para crear un usuario."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "username" 
   *         description: "Nombre completo del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "misena_email" 
   *         description: "Correo misena del usuario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "institutional_email" 
   *         description: "Correo sena del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "document" 
   *         description: "Documento de identidad del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "birthdate" 
   *         description: "Fecha de nacimiento"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone" 
   *         description: "Numero celular del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone_ip" 
   *         description: "Telefono de oficina del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "gender" 
   *         description: "Genero del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "positionId" 
   *         description: "Id del cargo que tiene asignado el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "rolId" 
   *         description: "Id del rol que tendra el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "contractTypeId" 
   *         description: "Id del tipo de contrato que tiene el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "profession" 
   *         description: "Profesion del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "grade" 
   *         description: "Grado del usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isBossArea" 
   *         description: "Si el usuario es jefe de area (1) y si no (0), por defecto es no"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "last_academic_level" 
   *         description: "Ultimo nivel academico del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "photo" 
   *         description: "Foto del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .post(verify, upload.single("photo"), UsersController.create);
router
  .route("/users/:id")
  /**
   * @swagger
   * "/api/users/{id}":
   *   get:
   *     tags: [users]
   *     summary: "Se usa para obtener un usuario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .get(verify, UsersController.show)
  /**
   * @swagger
   * "/api/users/{id}":
   *   put:
   *     tags: [users]
   *     summary: "Se usa para actualizar un usuario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *       - name: "username" 
   *         description: "Nombre completo del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "misena_email" 
   *         description: "Correo misena del usuario"
   *         in: formData
   *         required: true
   *         type: string 
   *       - name: "institutional_email" 
   *         description: "Correo sena del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "document" 
   *         description: "Documento de identidad del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "birthdate" 
   *         description: "Fecha de nacimiento"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone" 
   *         description: "Numero celular del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "phone_ip" 
   *         description: "Telefono de oficina del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "gender" 
   *         description: "Genero del usuario"
   *         in: formData
   *         required: true
   *         type: string
   *       - name: "positionId" 
   *         description: "Id del cargo que tiene asignado el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "rolId" 
   *         description: "Id del rol que tendra el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "contractTypeId" 
   *         description: "Id del tipo de contrato que tiene el usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "profession" 
   *         description: "Profesion del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "grade" 
   *         description: "Grado del usuario"
   *         in: formData
   *         required: true
   *         type: integer
   *       - name: "isBossArea" 
   *         description: "Si el usuario es jefe de area (1) y si no (0), por defecto es no"
   *         in: formData
   *         required: false
   *         type: integer
   *       - name: "last_academic_level" 
   *         description: "Ultimo nivel academico del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *       - name: "photo" 
   *         description: "Foto del usuario"
   *         in: formData
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .put(verify, upload.single("photo"), UsersController.update)
  /**
   * @swagger
   * "/api/users/{id}":
   *   delete:
   *     tags: [users]
   *     summary: "Se usa para eliminar un usuario en especifico."
   *     parameters:
   *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer 
   *     responses:
   *       200:
   *         description: "A successfull response"
   */
  .delete(verify, UsersController.destroy);

/**
 * @swagger
 * "/api/users/{id}/updatePassword":
 *   put:
 *     tags: [users]
 *     summary: "Se usa para actualizar la contraseña de un usuario en especifico."
 *     parameters:
 *       - name: "authorization" 
   *         description: "Token de autorizacion"
   *         in: header
   *         required: true
   *         type: string 
   *       - name: "id" 
   *         description: "Id del usuario"
   *         in: path
   *         required: true
   *         type: integer
   *       - name: "password" 
   *         description: "Nueva contraseña del usuario"
   *         in: formData
   *         required: true
   *         type: string
 *     responses:
 *       200:
 *         description: "A succesfull response"
 */
router.put("/users/:id/updatePassword", verify, UsersController.updatePassword);

module.exports = router;
