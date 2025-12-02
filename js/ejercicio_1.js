var muestra_n = datos_estudiantes.length
var selectPromedio1 = document.getElementById('cambioPromedio1')
var selectPromedio2 = document.getElementById('cambioPromedio2')

document.addEventListener('DOMContentLoaded', () => {
    const promCuarto = document.getElementById('promCuarto')
    const promQuinto = document.getElementById('promQuinto')
    const promSexto = document.getElementById('promSexto')
    const promGeneral = document.getElementById('promGeneral')

    promCuarto.textContent = calcularPromedioCuarto(datos_estudiantes)
    promQuinto.textContent = calcularPromedioQuinto(datos_estudiantes)
    promSexto.textContent = calcularPromedioSexto(datos_estudiantes)
    promGeneral.textContent = calcularPromedioGeneral(datos_estudiantes)

    CargarDatos(datos_estudiantes)
    CargarDatosPart2(datos_estudiantes)
})

selectPromedio1.addEventListener('change', () => {
    CargarDatosPart2(datos_estudiantes);
})

selectPromedio2.addEventListener('change', () => {
    CargarDatosPart2(datos_estudiantes);
})

function CargarDatos(prDatos) {
    let promQuinto = calcularPromedioQuinto(prDatos);
    let promSexto = calcularPromedioSexto(prDatos);
    let desvEstandGeneral = calcularDesvEstandarGeneral(prDatos);
    let errorEstandar = calcularErrorEstandar(desvEstandGeneral, muestra_n)
    let margenError = calcularMargenError(0.9900, errorEstandar)

    let difProms = (promQuinto - promSexto).toFixed(2)

    const promQuintoHTML = document.getElementById('promQuintoPart1')
    promQuintoHTML.innerHTML = `x&#x0305; Quinto año = ${promQuinto}`

    const promSextoHTML = document.getElementById('promSextoPart1')
    promSextoHTML.innerHTML = `x&#x0305; Sexto año = ${promSexto}`

    const desvEstandGeneralHTML = document.getElementById('DesvEstandarGeneralPart1')
    desvEstandGeneralHTML.innerHTML = `S General = ${desvEstandGeneral}`

    const diferenciaPromediosHTML = document.getElementById('diferenciaPromedios')
    diferenciaPromediosHTML.innerHTML = `${promQuinto} - ${promSexto} = ${difProms}`

    const errorEstandarHTML = document.getElementById('errorEstandar')
    errorEstandarHTML.innerHTML = `SE = ${errorEstandar}`

    const margenErrorHTML = document.getElementById('margenError')
    margenErrorHTML.innerHTML = `ME = ${margenError}`

    const resultIzqHTML = document.getElementById('resultIzq')
    let resultIzq = (Number(difProms) - Number(margenError)).toFixed(2)
    resultIzqHTML.innerHTML = `${difProms} - ${margenError} = ${resultIzq}`

    const resultDerHTML = document.getElementById('resultDer')
    let resultDer = (Number(difProms) + Number(margenError)).toFixed(2)
    resultDerHTML.innerHTML = `${difProms} + ${margenError} = ${resultDer}`

    const resultFinalHTML = document.getElementById('resultadoFinal')
    resultFinalHTML.innerHTML = `${resultIzq} , ${resultDer}`
}

function CargarDatosPart2(prDatos) {
    let promedio1 = 0
    let promedio1Txt = ''

    let promedio2 = 0
    let promedio2Txt = ''

    switch (selectPromedio1.value) {
        case "vCuarto":
            promedio1 = calcularPromedioCuarto(prDatos)
            promedio1Txt = "Cuarto año"
            break;
        case "vQuinto":
            promedio1 = calcularPromedioQuinto(prDatos)
            promedio1Txt = "Quinto año"
            break;
        case "vSexto":
            promedio1 = calcularPromedioSexto(prDatos)
            promedio1Txt = "Sexto año"
            break;
        default:
            break;
    }

    switch (selectPromedio2.value) {
        case "vCuarto":
            promedio2 = calcularPromedioCuarto(prDatos)
            promedio2Txt = "Cuarto año"
            break;
        case "vQuinto":
            promedio2 = calcularPromedioQuinto(prDatos)
            promedio2Txt = "Quinto año"
            break;
        case "vSexto":
            promedio2 = calcularPromedioSexto(prDatos)
            promedio2Txt = "Sexto año"
            break;
        default:
            break;
    }

    let desvEstandGeneral = calcularDesvEstandarGeneral(prDatos);
    let errorEstandar = calcularErrorEstandar(desvEstandGeneral, muestra_n)
    let margenError = calcularMargenError(0.9900, errorEstandar)

    let difProms = (promedio1 - promedio2).toFixed(2)

    const promSelect1HTML = document.getElementById('promSelect1')
    promSelect1HTML.innerHTML = `x&#x0305; ${promedio1Txt} = ${promedio1}`

    const promSelect2HTML = document.getElementById('promSelect2')
    promSelect2HTML.innerHTML = `x&#x0305; ${promedio2Txt} = ${promedio2}`

    const desvEstandGeneralHTML = document.getElementById('DesvEstandarGeneralPart2')
    desvEstandGeneralHTML.innerHTML = `S General = ${desvEstandGeneral}`

    const diferenciaPromediosHTML = document.getElementById('diferenciaPromediosPart2')
    diferenciaPromediosHTML.innerHTML = `${promedio1} - ${promedio2} = ${difProms}`

    const errorEstandarHTML = document.getElementById('errorEstandarPart2')
    errorEstandarHTML.innerHTML = `SE = ${errorEstandar}`

    const margenErrorHTML = document.getElementById('margenErrorPart2')
    margenErrorHTML.innerHTML = `ME = ${margenError}`

    const resultIzqHTML = document.getElementById('resultIzqPart2')
    let resultIzq = (Number(difProms) - Number(margenError)).toFixed(2)
    resultIzqHTML.innerHTML = `${difProms} - ${margenError} = ${resultIzq}`

    const resultDerHTML = document.getElementById('resultDerPart2')
    let resultDer = (Number(difProms) + Number(margenError)).toFixed(2)
    resultDerHTML.innerHTML = `${difProms} + ${margenError} = ${resultDer}`

    const resultFinalHTML = document.getElementById('resultadoFinalPart2')
    resultFinalHTML.innerHTML = `${resultIzq} , ${resultDer}`
}

function calcularPromedioGeneral(prDatos) {
    let sumatoria = 0;
    prDatos.forEach(element => {
        sumatoria += element["PROMEDIO GENERAL NOTAS "]
    });

    let total = sumatoria / muestra_n
    return total.toFixed(2)
}

function calcularPromedioSexto(prDatos) {
    let sumatoria = 0;
    prDatos.forEach(element => {
        sumatoria += element.Promedio_sexto
    });

    let total = sumatoria / muestra_n
    return total.toFixed(2)
}

function calcularPromedioQuinto(prDatos) {
    let sumatoria = 0;
    prDatos.forEach(element => {
        sumatoria += element.Promedio_quinto
    });

    let total = sumatoria / muestra_n
    return total.toFixed(2)
}

function calcularPromedioCuarto(prDatos) {
    let sumatoria = 0;
    prDatos.forEach(element => {
        sumatoria += element.Promedio_cuarto
    });

    let total = sumatoria / muestra_n
    return total.toFixed(2)
}

function calcularPromedioGeneral(prDatos) {
    let sumatoria = 0;
    prDatos.forEach(element => {
        sumatoria += element["PROMEDIO GENERAL NOTAS "]
    });

    let total = sumatoria / muestra_n
    return total.toFixed(2)
}

function calcularDesvEstandarGeneral(prDatos) {
    const promedioGeneral = calcularPromedioGeneral(prDatos)
    let sumatoria = 0

    prDatos.forEach(element => {
        sumatoria += Math.pow(element["PROMEDIO GENERAL NOTAS "] - promedioGeneral, 2)
    });

    let division = 0
    division = sumatoria / (muestra_n - 1)

    let total = Math.sqrt(division)
    return total.toFixed(2)
}

function calcularErrorEstandar(prS, prMuestra) {
    let SE = 0
    SE = prS * Math.sqrt(2 / prMuestra)
    return SE.toFixed(2)
}

function calcularMargenError(prZ, prErrorEstandar) {
    return (prZ * prErrorEstandar).toFixed(2)
}

function calcularICIzq(prDifProm, prME) {
    return prDifProm - prME
}

function calcularICDer(prDifProm, prME) {
    return prDifProm + prME
}

