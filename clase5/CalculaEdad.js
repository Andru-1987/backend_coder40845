const moment = require('moment')

// calcular años
// calcudlar dias totales desde la fecha de nacimiento


const calcularDays = (bd)=>{
    let fechaActual = moment();

    return  fechaActual.diff(bd,'days',true)
}

const calcularYears = (bd)=>{
    let fechaActual = moment();
    return  fechaActual.diff(bd,'years',true)
}

const printOutPut = (years,days)=>{
    let text = `
    Hoy es ${moment().format('L')}
    Nací el ${moment().subtract(days - 1,'days').format('L')}
    Desde mi nacimiento han pasado ${years.toFixed(0)} años
    Desde mi nacimiento han pasado ${days.toFixed(0)} días
    `

    console.log(text);
}


const outputDates = ()=>{
    
    let db = moment('1987-10-19')

    let years = calcularYears(db)
    let days = calcularDays(db)

    printOutPut(years,days);
   
}




outputDates()