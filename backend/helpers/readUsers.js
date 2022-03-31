const fs = require("fs");
const bcrypt = require("bcryptjs");

var file = fs.readFileSync(__dirname + "/csv/Users.csv", "utf8");
file = file.split(/\r?\n/);
var d = [];
const datos = [];
for (let i = 0; i < file.length; i++) {
  d.push(file[i].split(";"));
}

const usersZones = [];
var j = 1;
function filterZones(data, userId) {
  if (data != "") {
    let zones = data.split(",");
    for (let i = 0; i < zones.length; i++) {
      var userZone = {
        id: "",
        userId: "",
        zoneId: "",
        createdAt: new Date(),
        updatedAt: new Date()
      };
      userZone.id = j;
      userZone.userId = userId;
      userZone.zoneId = zones[i];
      usersZones.push(userZone);
      j += 1;
    }
  }
}

for (let i = 0; i < d.length; i++) {
  let dato = {
    id: "",
    username: "",
    misena_email: "",
    institutional_email: null,
    password: "",
    document: "",
    birthdate: "",
    phone: "",
    phone_ip: "",
    gender: "",
    positionId: "",
    rolId: "",
    contractTypeId: "",
    profession: "",
    grade: "",
    last_academic_level: "",
    createdAt: new Date(),
    updatedAt: new Date()
  };
  filterZones(d[i][13], parseInt(d[i][0]));
  dato.id = parseInt(d[i][0]);
  dato.username = d[i][1];
  dato.misena_email = d[i][2];
  if (d[i][3] != "") {
    dato.institutional_email = d[i][3];
  }
  dato.password = bcrypt.hashSync(d[i][4] + d[i][12].split("/")[0], 10);
  dato.document = d[i][4];
  dato.phone = d[i][5];
  dato.gender = d[i][6];
  dato.positionId = d[i][8] ? parseInt(d[i][8]) : "1";
  dato.contractTypeId = parseInt(d[i][10]);
  dato.rolId = parseInt(d[i][11]);
  dato.birthdate = new Date(2020, d[i][12].split('/')[1], d[i][12].split('/')[0]);
  dato.grade = parseInt(d[i][14]);
  dato.last_academic_level = d[i][15];
  dato.phone_ip = d[i][17];
  dato.profession = d[i][18];
  datos.push(dato);
}

module.exports = {
  datos,
  usersZones
};
