const fs = require("fs");
const path = require("path");

var file = fs.readFileSync(__dirname + "/csv/FormationPrograms.csv", "utf8");
file = file.split(/\r?\n/);
var d = [];
const datos = [];
for (let i = 0; i < file.length; i++) {
  d.push(file[i].split(";"));
}
for (let i = 0; i < d.length; i++) {
  let dato = {
    id: null,
    code: null,
    name: null,
    formationTypeId: null,
    isRegisterQualified: null,
    isRegisterQualifiedDate: null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  dato.id = parseInt(d[i][0]);
  dato.code = d[i][1];
  dato.name = d[i][1] + " - " + d[i][3];
  dato.formationTypeId = parseInt(d[i][4]);
  dato.isRegisterQualified = parseInt(d[i][6]) == 1 ? true : false;
  dato.isRegisterQualifiedDate = d[i][7] ? new Date(d[i][7]) : null;
  datos.push(dato);
}
module.exports = datos;
