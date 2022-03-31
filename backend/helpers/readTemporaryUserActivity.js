const fs = require("fs");

var file = fs.readFileSync(__dirname + "/csv/TemporaryUserActivity.csv", "utf8");
file = file.split(/\r?\n/);
var d = [];
const datos = [];
for (let i = 0; i < file.length; i++) {
  d.push(file[i].split(";"));
}
for (let i = 0; i < d.length; i++) {
  let dato = {
    id: null,
    name: null,
    observations: null,
    type: null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  dato.id = parseInt(d[i][0]);
  dato.name = d[i][1];
  dato.observations = d[i][2] ? d[i][2] : null;
  dato.type = d[i][3];
  datos.push(dato);
}
module.exports = datos;
