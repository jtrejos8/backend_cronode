const xl = require('excel4node');
const {calcMinutes, calcHalfHours} = require('../../../functions');

function createExcel(data) {
	var schedules = data.schedules;
	schedules.sort(function (a, b) {
		return (a['startDate'] > b['startDate']) ? 1 : ((a['startDate'] < b['startDate']) ? -1 : 0);
	});
	const lunes = [];
	const martes = [];
	const miercoles = [];
	const jueves = [];
	const viernes = [];
	const sabado = [];

	for (var i = 0; i < schedules.length; i++) {
		if(schedules[i].day.toLowerCase() === 'lunes'){
			lunes.push(schedules[i]);
        }
        if(schedules[i].day.toLowerCase()==='martes'){
            martes.push(schedules[i]);
        }
        if(schedules[i].day.toLowerCase()==='miercoles'){
            miercoles.push(schedules[i]);
        }
        if(schedules[i].day.toLowerCase()==='jueves'){
            jueves.push(schedules[i]);
        }
        if(schedules[i].day.toLowerCase()==='viernes'){
            viernes.push(schedules[i]);
        }
        if(schedules[i].day.toLowerCase()==='sabado'){
            sabado.push(schedules[i]);
        }
	}

	let wb = new xl.Workbook();
	let style = wb.createStyle({
        font: { color: 'white' },
        fill: {
            type: "pattern",
            patternType: "solid",
            bgColor: "#008055",
            fgColor: "#008055"
        },
        alignment: {
            wrapText: true,
            horizontal: 'center',
        },
    });
    let styleHour = wb.createStyle({
        alignment: {
            wrapText: true,
            horizontal: 'center',
            vertical: 'center'
        },
        border: {
            top: {
                style: 'thin',
                color: 'gray-25'
            },
            right: {
                style: 'thin',
                color: 'gray-25'
            },
            bottom: {
                style: 'thin',
                color: 'gray-25'
            },
            left: {
                style: 'thin',
                color: 'gray-25'
            }
        }
    });
    let styleFree = wb.createStyle({
        fill: {
            type: "pattern",
            patternType: "solid",
            bgColor: "#f2f2f2",
            fgColor: "#f2f2f2"
        },
        alignment: {
            wrapText: true,
            horizontal: 'center',
            vertical: 'center'
        },
        border: {
            left: {
                style: "thin",
                color: "gray-25"
            },
            top: {
                style: "thin",
                color: "gray-25"
            },
            right: {
                style: "thin",
                color: "gray-25"
            },
            bottom: {
                style: "thin",
                color: "gray-25"
            }
        }
    });
    let styleData = wb.createStyle({
        fill: {
            type: "pattern",
            patternType: "solid",
            bgColor: "#b3ffe6",
            fgColor: "#b3ffe6"
        },
        alignment: {
            wrapText: true,
            horizontal: 'center',
            vertical: 'center'
        },
        border: {
            left: {
                style: "thin",
                color: "gray-25"
            },
            top: {
                style: "thin",
                color: "gray-25"
            },
            right: {
                style: "thin",
                color: "gray-25"
            },
            bottom: {
                style: "thin",
                color: "gray-25"
            }
        }
    });

    let ws = wb.addWorksheet('Sheet 1');
    ws.cell(1, 1).style(style);
    ws.column(1).setWidth(7);
    ws.column(2).setWidth(25);
    ws.column(3).setWidth(25);
    ws.column(4).setWidth(25);
    ws.column(5).setWidth(25);
    ws.column(6).setWidth(25);
    ws.column(7).setWidth(25);
    ws.cell(1, 1).string(data.username);
    ws.cell(1, 1, 1, 7, 'merge').style(styleFree);
    ws.cell(2, 1).string("Hora").style(style);
    ws.cell(2, 2).string("Lunes").style(style);
    ws.cell(2, 3).string("Martes").style(style);
    ws.cell(2, 4).string("Miercoles").style(style);
    ws.cell(2, 5).string("Jueves").style(style);
    ws.cell(2, 6).string("Viernes").style(style);
    ws.cell(2, 7).string("Sabado").style(style);

    let row;
    let startDate = new Date();startDate.setHours(7, 0);
    let endDate = new Date();endDate.setHours(22, 0);

    row = 3;
    for (var i = 0; i <= 30; i++) {
    	ws.cell(row, 1).string(`${startDate.getHours()}:${startDate.getMinutes()==0?startDate.getMinutes()+"0":startDate.getMinutes()}`);
    	ws.cell(row, 1).style(styleHour);
    	startDate.setMinutes(startDate.getMinutes()+30);
    	row++;
    }

    // Lunes
    row=3;
    startDate.setHours(7, 0);
    if(lunes.length>0){
    	for (var i = 0; i < lunes.length; i++) {
    		if (calcMinutes(lunes[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 2).string("Libre");
                ws.cell(row, 2, (calcHalfHours(startDate, lunes[i].startDate) + (row - 1)), 2, 'merge');
                ws.cell(row, 2, (calcHalfHours(startDate, lunes[i].startDate) + (row - 1)), 2).style(styleFree);
                row = calcHalfHours(startDate, lunes[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 2).string(
                lunes[i].ambient.name +
                "\n" +
                lunes[i].programation.group.codeTab);
            if (new Date(lunes[i].endDate).getHours() == 22) {
                ws.cell(row, 2, (calcHalfHours(lunes[i].startDate, lunes[i].endDate) + (row)), 2, 'merge');
                ws.cell(row, 2, (calcHalfHours(lunes[i].startDate, lunes[i].endDate) + (row)), 2).style(styleData);
            } else {
                ws.cell(row, 2, (calcHalfHours(lunes[i].startDate, lunes[i].endDate) + (row - 1)), 2, 'merge');
                ws.cell(row, 2, (calcHalfHours(lunes[i].startDate, lunes[i].endDate) + (row - 1)), 2).style(styleData);
            }
            let d = new Date(lunes[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(lunes[i].startDate, lunes[i].endDate) + (row - 1);
            row++;
            if (lunes[i + 1] == undefined) {
                ws.cell(row, 2).string(`Libre (${new Date(lunes[i].endDate).getHours()}:${new Date(lunes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 2, calcHalfHours(lunes[i].endDate, endDate) + (row), 2, 'merge');
                ws.cell(row, 2, calcHalfHours(lunes[i].endDate, endDate) + (row), 2).style(styleFree);
            }
    	}
    }else{
    	ws.cell(row, 2).string('Libre');
        ws.cell(row, 2, calcHalfHours(startDate, endDate) + (row), 2, 'merge');
        ws.cell(row, 2, calcHalfHours(startDate, endDate) + (row), 2).style(styleFree);
    }

    // Martes
    row=3;
    startDate.setHours(7, 0);
    if(martes.length>0){
        for (var i = 0; i < martes.length; i++) {
            if (calcMinutes(martes[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 3).string("Libre");
                ws.cell(row, 3, (calcHalfHours(startDate, martes[i].startDate) + (row - 1)), 3, 'merge');
                ws.cell(row, 3, (calcHalfHours(startDate, martes[i].startDate) + (row - 1)), 3).style(styleFree);
                row = calcHalfHours(startDate, martes[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 3).string(
                martes[i].ambient.name +
                "\n" +
                martes[i].programation.group.codeTab);
            if (new Date(martes[i].endDate).getHours() == 22) {
                ws.cell(row, 3, (calcHalfHours(martes[i].startDate, martes[i].endDate) + (row)), 3, 'merge');
                ws.cell(row, 3, (calcHalfHours(martes[i].startDate, martes[i].endDate) + (row)), 3).style(styleData);
            } else {
                ws.cell(row, 3, (calcHalfHours(martes[i].startDate, martes[i].endDate) + (row - 1)), 3, 'merge');
                ws.cell(row, 3, (calcHalfHours(martes[i].startDate, martes[i].endDate) + (row - 1)), 3).style(styleData);
            }
            let d = new Date(martes[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(martes[i].startDate, martes[i].endDate) + (row - 1);
            row++;
            if (martes[i + 1] == undefined) {
                ws.cell(row, 3).string(`Libre (${new Date(martes[i].endDate).getHours()}:${new Date(martes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 3, calcHalfHours(martes[i].endDate, endDate) + (row), 3, 'merge');
                ws.cell(row, 3, calcHalfHours(martes[i].endDate, endDate) + (row), 3).style(styleFree);
            }
        }
    }else{
        ws.cell(row, 3).string('Libre');
        ws.cell(row, 3, calcHalfHours(startDate, endDate) + (row), 3, 'merge');
        ws.cell(row, 3, calcHalfHours(startDate, endDate) + (row), 3).style(styleFree);
    }

    // Miercoles
    row=3;
    startDate.setHours(7, 0);
    if(miercoles.length>0){
        for (var i = 0; i < miercoles.length; i++) {
            if (calcMinutes(miercoles[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 4).string("Libre");
                ws.cell(row, 4, (calcHalfHours(startDate, miercoles[i].startDate) + (row - 1)), 4, 'merge');
                ws.cell(row, 4, (calcHalfHours(startDate, miercoles[i].startDate) + (row - 1)), 4).style(styleFree);
                row = calcHalfHours(startDate, miercoles[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 4).string(
                miercoles[i].ambient.name +
                "\n" +
                miercoles[i].programation.group.codeTab);
            if (new Date(miercoles[i].endDate).getHours() == 22) {
                ws.cell(row, 4, (calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) + (row)), 4, 'merge');
                ws.cell(row, 4, (calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) + (row)), 4).style(styleData);
            } else {
                ws.cell(row, 4, (calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) + (row - 1)), 4, 'merge');
                ws.cell(row, 4, (calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) + (row - 1)), 4).style(styleData);
            }
            let d = new Date(miercoles[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(miercoles[i].startDate, miercoles[i].endDate) + (row - 1);
            row++;
            if (miercoles[i + 1] == undefined) {
                ws.cell(row, 4).string(`Libre (${new Date(miercoles[i].endDate).getHours()}:${new Date(miercoles[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 4, calcHalfHours(miercoles[i].endDate, endDate) + (row), 4, 'merge');
                ws.cell(row, 4, calcHalfHours(miercoles[i].endDate, endDate) + (row), 4).style(styleFree);
            }
        }
    }else{
        ws.cell(row, 4).string('Libre');
        ws.cell(row, 4, calcHalfHours(startDate, endDate) + (row), 4, 'merge');
        ws.cell(row, 4, calcHalfHours(startDate, endDate) + (row), 4).style(styleFree);
    }

    // Jueves
    row=3;
    startDate.setHours(7, 0);
    if(jueves.length>0){
        for (var i = 0; i < jueves.length; i++) {
            if (calcMinutes(jueves[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 5).string("Libre");
                ws.cell(row, 5, (calcHalfHours(startDate, jueves[i].startDate) + (row - 1)), 5, 'merge');
                ws.cell(row, 5, (calcHalfHours(startDate, jueves[i].startDate) + (row - 1)), 5).style(styleFree);
                row = calcHalfHours(startDate, jueves[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 5).string(
                jueves[i].ambient.name +
                "\n" +
                jueves[i].programation.group.codeTab);
            if (new Date(jueves[i].endDate).getHours() == 22) {
                ws.cell(row, 5, (calcHalfHours(jueves[i].startDate, jueves[i].endDate) + (row)), 5, 'merge');
                ws.cell(row, 5, (calcHalfHours(jueves[i].startDate, jueves[i].endDate) + (row)), 5).style(styleData);
            } else {
                ws.cell(row, 5, (calcHalfHours(jueves[i].startDate, jueves[i].endDate) + (row - 1)), 5, 'merge');
                ws.cell(row, 5, (calcHalfHours(jueves[i].startDate, jueves[i].endDate) + (row - 1)), 5).style(styleData);
            }
            let d = new Date(jueves[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(jueves[i].startDate, jueves[i].endDate) + (row - 1);
            row++;
            if (jueves[i + 1] == undefined) {
                ws.cell(row, 5).string(`Libre (${new Date(jueves[i].endDate).getHours()}:${new Date(jueves[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 5, calcHalfHours(jueves[i].endDate, endDate) + (row), 5, 'merge');
                ws.cell(row, 5, calcHalfHours(jueves[i].endDate, endDate) + (row), 5).style(styleFree);
            }
        }
    }else{
        ws.cell(row, 5).string('Libre');
        ws.cell(row, 5, calcHalfHours(startDate, endDate) + (row), 5, 'merge');
        ws.cell(row, 5, calcHalfHours(startDate, endDate) + (row), 5).style(styleFree);
    }

    // Viernes
    row=3;
    startDate.setHours(7, 0);
    if(viernes.length>0){
        for (var i = 0; i < viernes.length; i++) {
            if (calcMinutes(viernes[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 6).string("Libre");
                ws.cell(row, 6, (calcHalfHours(startDate, viernes[i].startDate) + (row - 1)), 6, 'merge');
                ws.cell(row, 6, (calcHalfHours(startDate, viernes[i].startDate) + (row - 1)), 6).style(styleFree);
                row = calcHalfHours(startDate, viernes[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 6).string(
                viernes[i].ambient.name +
                "\n" +
                viernes[i].programation.group.codeTab);
            if (new Date(viernes[i].endDate).getHours() == 22) {
                ws.cell(row, 6, (calcHalfHours(viernes[i].startDate, viernes[i].endDate) + (row)), 6, 'merge');
                ws.cell(row, 6, (calcHalfHours(viernes[i].startDate, viernes[i].endDate) + (row)), 6).style(styleData);
            } else {
                ws.cell(row, 6, (calcHalfHours(viernes[i].startDate, viernes[i].endDate) + (row - 1)), 6, 'merge');
                ws.cell(row, 6, (calcHalfHours(viernes[i].startDate, viernes[i].endDate) + (row - 1)), 6).style(styleData);
            }
            let d = new Date(viernes[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(viernes[i].startDate, viernes[i].endDate) + (row - 1);
            row++;
            if (viernes[i + 1] == undefined) {
                ws.cell(row, 6).string(`Libre (${new Date(viernes[i].endDate).getHours()}:${new Date(viernes[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 6, calcHalfHours(viernes[i].endDate, endDate) + (row), 6, 'merge');
                ws.cell(row, 6, calcHalfHours(viernes[i].endDate, endDate) + (row), 6).style(styleFree);
            }
        }
    }else{
        ws.cell(row, 6).string('Libre');
        ws.cell(row, 6, calcHalfHours(startDate, endDate) + (row), 6, 'merge');
        ws.cell(row, 6, calcHalfHours(startDate, endDate) + (row), 6).style(styleFree);
    }

    // Sabado
    row=3;
    startDate.setHours(7, 0);
    if(sabado.length>0){
        for (var i = 0; i < sabado.length; i++) {
            if (calcMinutes(sabado[i].startDate) > calcMinutes(startDate)) {
                ws.cell(row, 7).string("Libre");
                ws.cell(row, 7, (calcHalfHours(startDate, sabado[i].startDate) + (row - 1)), 7, 'merge');
                ws.cell(row, 7, (calcHalfHours(startDate, sabado[i].startDate) + (row - 1)), 7).style(styleFree);
                row = calcHalfHours(startDate, sabado[i].startDate) + (row - 1);
                row++;
            }
            ws.cell(row, 7).string(
                sabado[i].ambient.name +
                "\n" +
                sabado[i].programation.group.codeTab);
            if (new Date(sabado[i].endDate).getHours() == 22) {
                ws.cell(row, 7, (calcHalfHours(sabado[i].startDate, sabado[i].endDate) + (row)), 7, 'merge');
                ws.cell(row, 7, (calcHalfHours(sabado[i].startDate, sabado[i].endDate) + (row)), 7).style(styleData);
            } else {
                ws.cell(row, 7, (calcHalfHours(sabado[i].startDate, sabado[i].endDate) + (row - 1)), 7, 'merge');
                ws.cell(row, 7, (calcHalfHours(sabado[i].startDate, sabado[i].endDate) + (row - 1)), 7).style(styleData);
            }
            let d = new Date(sabado[i].endDate);
            startDate.setHours(d.getHours(), d.getMinutes());
            console.log(`${startDate.getHours()}:${startDate.getMinutes()}`);
            row = calcHalfHours(sabado[i].startDate, sabado[i].endDate) + (row - 1);
            row++;
            if (sabado[i + 1] == undefined) {
                ws.cell(row, 7).string(`Libre (${new Date(sabado[i].endDate).getHours()}:${new Date(sabado[i].endDate).getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()})`);
                ws.cell(row, 7, calcHalfHours(sabado[i].endDate, endDate) + (row), 7, 'merge');
                ws.cell(row, 7, calcHalfHours(sabado[i].endDate, endDate) + (row), 7).style(styleFree);
            }
        }
    }else{
        ws.cell(row, 7).string('Libre');
        ws.cell(row, 7, calcHalfHours(startDate, endDate) + (row), 7, 'merge');
        ws.cell(row, 7, calcHalfHours(startDate, endDate) + (row), 7).style(styleFree);
    }


    return wb;
}

module.exports = createExcel;