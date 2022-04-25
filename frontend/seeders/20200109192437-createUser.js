"use strict";
const data = require("../helpers/readUsers");
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [...data.datos, {
            id: data.datos.length+1,
            username: "Almacen 2020",
            misena_email: "almacen2020@misena.edu.co",
            institutional_email: null,
            password: bcrypt.hashSync("1234567821", 10),
            document: "12345678",
            birthdate: "2020-04-21",
            phone: "321312",
            phone_ip: null,
            gender: "M",
            positionId: 1,
            rolId: 1,
            contractTypeId: 1,
            profession: null,
            grade: 0,
            token: bcrypt.hashSync("almacen2020@misena.edu.co1234567821", 4),
            last_academic_level: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }, 
        {
            id: data.datos.length+2,
            username: "Aprendiz prueba",
            misena_email: "aprendiz@misena.edu.co",
            institutional_email: null,
            password: bcrypt.hashSync("12345678910", 10),
            document: "123456789",
            birthdate: "2020-04-10",
            phone: "32131221",
            phone_ip: null,
            gender: "M",
            positionId: 18,
            rolId: 4,
            contractTypeId: 5,
            profession: "Backend Developer",
            grade: 0,
            last_academic_level: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: data.datos.length+3,
            username: "Perfil de consulta",
            misena_email: "consulta@misena.edu.co",
            institutional_email: null,
            password: bcrypt.hashSync("123456789110", 10),
            document: "1234567891",
            birthdate: "2020-04-10",
            phone: "321312212",
            phone_ip: null,
            gender: "M",
            positionId: 18,
            rolId: 3,
            contractTypeId: 5,
            profession: "Backend Developer",
            grade: 0,
            last_academic_level: null,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: data.datos.length+4,
            username: "Santiago Bedoya",
            misena_email: "sbedoya784@misena.edu.co",
            institutional_email: null,
            password: bcrypt.hashSync("100265648710", 10),
            document: "1002656487",
            birthdate: "2020-10-10",
            phone: "3043485901",
            phone_ip: null,
            gender: "M",
            positionId: 18,
            rolId: 2,
            contractTypeId: 5,
            profession: "Backend Developer",
            grade: 0,
            last_academic_level: null,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {}).catch(err => console.log(err));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    }
};