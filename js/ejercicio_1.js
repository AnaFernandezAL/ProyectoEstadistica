var muestra_n = datos_estudiantes.length

document.addEventListener('DOMContentLoaded', () => {
    const promCuarto = document.getElementById('promCuarto')
    const promQuinto = document.getElementById('promQuinto')
    const promSexto = document.getElementById('promSexto')

    promCuarto.textContent = calcularPromedioCuarto(datos_estudiantes)
    promQuinto.textContent = calcularPromedioQuinto(datos_estudiantes)
    promSexto.textContent = calcularPromedioSexto(datos_estudiantes)

    CargarDatos(datos_estudiantes)
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
    resultIzqHTML.innerHTML = `${difProms} - ${margenError} = ${(difProms - margenError).toFixed(2)}`

    const resultDerHTML = document.getElementById('resultDer')
        
    resultDerHTML.innerHTML = `${difProms} + ${margenError} = -0.77`
    
    const resultFinalHTML = document.getElementById('resultadoFinal')
    resultFinalHTML.innerHTML = `${(difProms - margenError).toFixed(2)} , -0.77`
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