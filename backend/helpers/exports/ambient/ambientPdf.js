const {
    calcHalfHours,
    calcMinutes
} = require('../../../functions.js');

function createStringToPdf(data) {
	var schedules = data.schedule;
	let string = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
    * {
        margin: 0;
        padding: 0;
    }
    table {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        display: inline-block;
        border-collapse: collapse;
        vertical-align: top;
        text-align: center;
        min-height:570px;
    }

    table td{
      border: 1px solid #ddd;
      width:126px;
      font-size:9px;
    }
    table th {
      border: 1px solid #ddd;
        width:126px;
        font-size: 13px;
        height:18px;
    }

    table th {
        text-align: center;
        background-color: #008055;
        color: white;
    }
    .sche{
      background-color: #b3ffe6;
    }

    .ready {
      background-color: #f2f2f2;
    }
</style>
    </head>
    
    <body>
    `;
    schedules.sort(function(a, b) {
        return (a['startDate'] > b['startDate']) ? 1 : ((a['startDate'] < b['startDate']) ? -1 : 0);
    })
    const lunes = [];
    const martes = [];
    const miercoles = [];
    const jueves = [];
    const viernes = [];
    const sabado = [];
    // Llenando arrays
    for (let i = 0; i < schedules.length; i++) {
        if (schedules[i].day.toLowerCase() == 'lunes') {
            lunes.push(schedules[i]);
        }
        if (schedules[i].day.toLowerCase() == "martes") {
            martes.push(schedules[i]);
        }
        if (schedules[i].day.toLowerCase() == "miercoles") {
            miercoles.push(schedules[i]);
        }
        if (schedules[i].day.toLowerCase() == "jueves") {
            jueves.push(schedules[i]);
        }
        if (schedules[i].day.toLowerCase() == "viernes") {
            viernes.push(schedules[i]);
        }
        if (schedules[i].day.toLowerCase() == "sabado") {
            sabado.push(schedules[i]);
        }
    }
    let endDate = new Date();
    endDate.setHours(22, 0);
    let startDate = new Date();
    // Instructor name
    string += "<div style='width:760px;margin:0px;text-align:center;border:1px solid gray;'>"
    string += "<h5>" + data.name + "</h5>";
    string += "</div>"
    // Start Lunes
    string += "<table>";
    string += "<thead>";
    string += "<th>Lunes</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (lunes.length > 0) {
        for (let i = 0; i < lunes.length; i++) {
            if (calcMinutes(lunes[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, lunes[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(lunes[i].startDate).getHours()}:${new Date(lunes[i].startDate).getMinutes()==0?new Date(lunes[i].startDate).getMinutes()+"0":new Date(lunes[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(lunes[i].endDate).getHours(), new Date(lunes[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(lunes[i].endDate).getHours(), new Date(lunes[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(lunes[i].startDate, lunes[i].endDate) * 18}px'>
        <td>
            <p>${lunes[i].constantUser.username}</p>
            <p>Ficha: ${lunes[i].programation.group.codeTab} - ${lunes[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(lunes[i].startDate).getHours()}:${new Date(lunes[i].startDate).getMinutes()==0?new Date(lunes[i].startDate).getMinutes()+"0":new Date(lunes[i].startDate).getMinutes()}
              -
              ${new Date(lunes[i].endDate).getHours()}:${new Date(lunes[i].endDate).getMinutes()==0?new Date(lunes[i].endDate).getMinutes()+"0":new Date(lunes[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!lunes[i + 1] & (calcMinutes(lunes[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(lunes[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(lunes[i].endDate).getHours()}:${new Date(lunes[i].endDate).getMinutes()==0?new Date(lunes[i].endDate).getMinutes()+"0":new Date(lunes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Lunes

    // Start Martes
    string += "<table>";
    string += "<thead>";
    string += "<th>Martes</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (martes.length > 0) {
        for (let i = 0; i < martes.length; i++) {
            if (calcMinutes(martes[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, martes[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(martes[i].startDate).getHours()}:${new Date(martes[i].startDate).getMinutes()==0?new Date(martes[i].startDate).getMinutes()+"0":new Date(martes[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(martes[i].endDate).getHours(), new Date(martes[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(martes[i].endDate).getHours(), new Date(martes[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(martes[i].startDate, martes[i].endDate) * 18}px'>
        <td>
            <p>${martes[i].constantUser.username}</p>
            <p>Ficha: ${martes[i].programation.group.codeTab} - ${martes[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(martes[i].startDate).getHours()}:${new Date(martes[i].startDate).getMinutes()==0?new Date(martes[i].startDate).getMinutes()+"0":new Date(martes[i].startDate).getMinutes()}
              -
              ${new Date(martes[i].endDate).getHours()}:${new Date(martes[i].endDate).getMinutes()==0?new Date(martes[i].endDate).getMinutes()+"0":new Date(martes[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!martes[i + 1] & (calcMinutes(martes[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(martes[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(martes[i].endDate).getHours()}:${new Date(martes[i].endDate).getMinutes()==0?new Date(martes[i].endDate).getMinutes()+"0":new Date(martes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Martes

    // Start Miercoles
    string += "<table>";
    string += "<thead>";
    string += "<th>Miercoles</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (miercoles.length > 0) {
        for (let i = 0; i < miercoles.length; i++) {
            if (calcMinutes(miercoles[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, miercoles[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(miercoles[i].startDate).getHours()}:${new Date(miercoles[i].startDate).getMinutes()==0?new Date(miercoles[i].startDate).getMinutes()+"0":new Date(miercoles[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(miercoles[i].endDate).getHours(), new Date(miercoles[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(miercoles[i].endDate).getHours(), new Date(miercoles[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) * 18}px'>
        <td>
            <p>${miercoles[i].constantUser.username}</p>
            <p>Ficha: ${miercoles[i].programation.group.codeTab} - ${miercoles[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(miercoles[i].startDate).getHours()}:${new Date(miercoles[i].startDate).getMinutes()==0?new Date(miercoles[i].startDate).getMinutes()+"0":new Date(miercoles[i].startDate).getMinutes()}
              -
              ${new Date(miercoles[i].endDate).getHours()}:${new Date(miercoles[i].endDate).getMinutes()==0?new Date(miercoles[i].endDate).getMinutes()+"0":new Date(miercoles[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!miercoles[i + 1] & (calcMinutes(miercoles[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(miercoles[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(miercoles[i].endDate).getHours()}:${new Date(miercoles[i].endDate).getMinutes()==0?new Date(miercoles[i].endDate).getMinutes()+"0":new Date(miercoles[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Miercoles

    // Start Jueves
    string += "<table>";
    string += "<thead>";
    string += "<th>Jueves</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (jueves.length > 0) {
        for (let i = 0; i < jueves.length; i++) {
            if (calcMinutes(jueves[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, jueves[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(jueves[i].startDate).getHours()}:${new Date(jueves[i].startDate).getMinutes()==0?new Date(jueves[i].startDate).getMinutes()+"0":new Date(jueves[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(jueves[i].endDate).getHours(), new Date(jueves[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(jueves[i].endDate).getHours(), new Date(jueves[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(jueves[i].startDate, jueves[i].endDate) * 18}px'>
        <td>
            <p>${jueves[i].constantUser.username}</p>
            <p>Ficha: ${jueves[i].programation.group.codeTab} - ${jueves[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(jueves[i].startDate).getHours()}:${new Date(jueves[i].startDate).getMinutes()==0?new Date(jueves[i].startDate).getMinutes()+"0":new Date(jueves[i].startDate).getMinutes()}
              -
              ${new Date(jueves[i].endDate).getHours()}:${new Date(jueves[i].endDate).getMinutes()==0?new Date(jueves[i].endDate).getMinutes()+"0":new Date(jueves[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!jueves[i + 1] & (calcMinutes(jueves[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(jueves[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(jueves[i].endDate).getHours()}:${new Date(jueves[i].endDate).getMinutes()==0?new Date(jueves[i].endDate).getMinutes()+"0":new Date(jueves[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Jueves

    // Start Viernes
    string += "<table>";
    string += "<thead>";
    string += "<th>Viernes</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (viernes.length > 0) {
        for (let i = 0; i < viernes.length; i++) {
            if (calcMinutes(viernes[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, viernes[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(viernes[i].startDate).getHours()}:${new Date(viernes[i].startDate).getMinutes()==0?new Date(viernes[i].startDate).getMinutes()+"0":new Date(viernes[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(viernes[i].endDate).getHours(), new Date(viernes[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(viernes[i].endDate).getHours(), new Date(viernes[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(viernes[i].startDate, viernes[i].endDate) * 18}px'>
        <td>
            <p>${viernes[i].constantUser.username}</p>
            <p>Ficha: ${viernes[i].programation.group.codeTab} - ${viernes[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(viernes[i].startDate).getHours()}:${new Date(viernes[i].startDate).getMinutes()==0?new Date(viernes[i].startDate).getMinutes()+"0":new Date(viernes[i].startDate).getMinutes()}
              -
              ${new Date(viernes[i].endDate).getHours()}:${new Date(viernes[i].endDate).getMinutes()==0?new Date(viernes[i].endDate).getMinutes()+"0":new Date(viernes[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!viernes[i + 1] & (calcMinutes(viernes[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(viernes[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(viernes[i].endDate).getHours()}:${new Date(viernes[i].endDate).getMinutes()==0?new Date(viernes[i].endDate).getMinutes()+"0":new Date(viernes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Viernes

    // Start Sabado
    string += "<table>";
    string += "<thead>";
    string += "<th>Sabado</th>";
    string += "</thead>";
    string += "<tbody>";
    startDate.setHours(7, 0);
    if (sabado.length > 0) {
        for (let i = 0; i < sabado.length; i++) {
            if (calcMinutes(sabado[i].startDate) > calcMinutes(startDate)) {
                string += `
        <tr style='height: ${calcHalfHours(startDate, sabado[i].startDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${new Date(sabado[i].startDate).getHours()}:${new Date(sabado[i].startDate).getMinutes()==0?new Date(sabado[i].startDate).getMinutes()+"0":new Date(sabado[i].startDate).getMinutes()}</p>
          </td>
        </tr>
        `;
                startDate.setHours(new Date(sabado[i].endDate).getHours(), new Date(sabado[i].endDate).getMinutes())
            } else {
                startDate.setHours(new Date(sabado[i].endDate).getHours(), new Date(sabado[i].endDate).getMinutes())
            }
            string += `
        <tr class='sche' style='height: ${calcHalfHours(sabado[i].startDate, sabado[i].endDate) * 18}px'>
        <td>
            <p>${sabado[i].constantUser.username}</p>
            <p>Ficha: ${sabado[i].programation.group.codeTab} - ${sabado[i].programation.group.formationProgram.name}</p>
            <p>
              ${new Date(sabado[i].startDate).getHours()}:${new Date(sabado[i].startDate).getMinutes()==0?new Date(sabado[i].startDate).getMinutes()+"0":new Date(sabado[i].startDate).getMinutes()}
              -
              ${new Date(sabado[i].endDate).getHours()}:${new Date(sabado[i].endDate).getMinutes()==0?new Date(sabado[i].endDate).getMinutes()+"0":new Date(sabado[i].endDate).getMinutes()}
            </p>
          </td>
        </tr>
        `;
            if (!sabado[i + 1] & (calcMinutes(sabado[i].endDate) < calcMinutes(endDate))) {
                string += `
        <tr style='height: ${calcHalfHours(sabado[i].endDate, endDate) * 18}px'>
          <td class='ready'>
            <p>Libre</p>
            <p>
              ${new Date(sabado[i].endDate).getHours()}:${new Date(sabado[i].endDate).getMinutes()==0?new Date(sabado[i].endDate).getMinutes()+"0":new Date(sabado[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}
            </p>
          </td>
        </tr>
        `;
            }
        }
    } else {
        string += `
      <tr style='height: ${calcHalfHours(startDate, endDate) * 18}px'>
        <td class='ready'>
          <p>Libre</p>
          <p>${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()==0?endDate.getMinutes()+"0":endDate.getMinutes()}</p>
        </td>
      </tr>
      `;
    }
    string += "</tbody>";
    string += "</table>";
    // End Sabado

    return string;
}

module.exports = createStringToPdf;