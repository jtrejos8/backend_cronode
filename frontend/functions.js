function pascuaDay(year) {
    let M, N, a, b, c, d, e, f, dia, mes;
    if (year > 1583 && year < 1699) {
        M = 22;
        N = 2;
    } else if (year > 1700 && year < 1799) {
        M = 23;
        N = 3;
    } else if (year > 1800 && year < 1899) {
        M = 23;
        N = 4;
    } else if (year > 1900 && year < 2099) {
        M = 24;
        N = 5;
    } else if (year > 2100 && year < 2199) {
        M = 24;
        N = 6;
    } else if (year > 2200 && year < 2299) {
        M = 25;
        N = 0;
    }
    a = year % 19;
    b = year % 4;
    c = year % 7;
    d = (19 * a + M) % 30;
    e = (2 * b + 4 * c + 6 * d + N) % 7;
    f = d + e;
    if (f < 10) {
        dia = f + 22;
        mes = 3;
    } else {
        dia = f - 9;
        mes = 4;
    }
    if (dia == 26 && mes == 4) {
        dia = 19;
    }
    if (dia == 25 && mes == 4 && d == 28 && e == 6 && a > 10) {
        dia = 18;
    }
    let domingoSanto = new Date(year, mes - 1, dia);
    const juevesSanto = new Date(
        year,
        domingoSanto.getMonth(),
        domingoSanto.getDate() - 3
    );
    const viernesSanto = new Date(
        year,
        juevesSanto.getMonth(),
        juevesSanto.getDate() + 1
    );
    const sabadoSanto = new Date(
        year,
        viernesSanto.getMonth(),
        viernesSanto.getDate() + 1
    );
    const asencion = new Date(
        domingoSanto.setDate(domingoSanto.getDate() + 43)
    );
    domingoSanto = new Date(year, mes - 1, dia);
    const corpus = new Date(domingoSanto.setDate(domingoSanto.getDate() + 64));
    domingoSanto = new Date(year, mes - 1, dia);
    const sagrado = new Date(domingoSanto.setDate(domingoSanto.getDate() + 71));
    domingoSanto = new Date(year, mes - 1, dia);
    return [
        juevesSanto,
        viernesSanto,
        sabadoSanto,
        domingoSanto,
        asencion,
        corpus,
        sagrado,
    ];
}

function trasladableHoliday(date) {
    let d = new Date(date);
    while (d.getDay() != 1) {
        d.setDate(d.getDate() + 1);
    }
    return d;
}
module.exports = {
    calcMinutes: function (data) {
        let d = new Date(data);
        return d.getHours() * 60 + d.getMinutes();
    },
    calcHalfHours: function (startDate, endDate) {
        let sd = new Date(startDate);
        let ed = new Date(endDate);
        let sdMinutes = sd.getHours() * 60 + sd.getMinutes();
        let edMinutes = ed.getHours() * 60 + ed.getMinutes();
        return (edMinutes - sdMinutes) / 30;
    },
    isHoliday: function (date) {
        let year = new Date().getFullYear();
        let f = new Date(Date.parse(date));
        let days = pascuaDay(year);
        const holidays = [
            // 1 de enero
            new Date(`${year}-1-1`),
            // 1 de mayo
            new Date(`${year}-5-1`),
            // 20 de julio
            new Date(`${year}-7-20`),
            // 7 de agosto
            new Date(`${year}-8-7`),
            // // 8 de diciembre
            new Date(`${year}-12-8`),
            // 25 de diciembre
            new Date(Date.parse(`${year}-12-025`)),
            // 6 de enero
            trasladableHoliday(`${year}-1-6`),
            // 19 de marzo
            trasladableHoliday(`${year}-3-19`),
            // 29 de junio
            trasladableHoliday(`${year}-6-29`),
            // 15 de agosto
            trasladableHoliday(`${year}-8-15`),
            // 12 de octubre
            trasladableHoliday(`${year}-10-12`),
            // 1 de noviembre
            trasladableHoliday(`${year}-11-1`),
            // 11 de noviembre
            trasladableHoliday(`${year}-11-11`),
        ];
        days.map((day) => {
            holidays.push(day);
        });
        holidays.sort(function (a, b) {
            return a - b;
        });
        holidays.map((holiday) => {
            if (holiday.getTime() === f.getTime()) {
                return true;
            }
        });
        return false;
    },
};
