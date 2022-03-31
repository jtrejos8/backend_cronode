const fs = require("fs");
const path = require("path");

var file = fs.readFileSync(__dirname + "/csv/Positions.csv", "utf8");
file = file.split(/\r?\n/);
var d = [];
const datos = [];
for (let i = 0; i < file.length; i++) {
  d.push(file[i].split(";"));
}

for (let i = 0; i < d.length; i++) {
  let dato = {
    id: "",
    name: "",
    type: "",
    createdAt: new Date(),
    updatedAt: new Date()
  };
  dato.id = parseInt(d[i][0]);
  dato.name = d[i][1];
  dato.type = d[i][2];
  datos.push(dato);
}
module.exports = datos;
