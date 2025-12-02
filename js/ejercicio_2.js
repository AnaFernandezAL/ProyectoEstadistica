var muestra_n = datos_estudiantes.length
var selectPromedios = document.getElementById('cambioPromedio');

document.addEventListener('DOMContentLoaded', () => {
    const promCuarto = document.getElementById('promCuarto')
    const promQuinto = document.getElementById('promQuinto')
    const promSexto = document.getElementById('promSexto')
    const promGeneral = document.getElementById('promGeneral')

    promCuarto.textContent = calcularPromedioCuarto(datos_estudiantes)
    promQuinto.textContent = calcularPromedioQuinto(datos_estudiantes)
    promSexto.textContent = calcularPromedioSexto(datos_estudiantes)
    promGeneral.textContent = calcularPromedioGeneral(datos_estudiantes)
    
    CargarDatos(datos_estudiantes);
    CargarSelectPromDatos(datos_estudiantes);
})

selectPromedios.addEventListener('change', () => {
    CargarSelectPromDatos(datos_estudiantes);
})

function CargarDatos(datos) {
    /* Carga de datos del paso 1 */
    const promedioGeneral = calcularPromedioGeneral(datos)

    var hipoNulaHTML = document.getElementById('hipoNula')
    hipoNulaHTML.innerHTML = `Hipótesis nula: &mu; <= ${promedioGeneral} (Promedio de los tres años)`

    var hipoAlteHTML = document.getElementById('hipoAlte')
    hipoAlteHTML.innerHTML = `Hipótesis alterna: &mu; > ${promedioGeneral} (Promedio de los tres años)`

    /* Carga de datos del paso 2 */
    const promedioSexto = calcularPromedioSexto(datos)
    const desvEstandarGeneral = calcularDesvEstandarGeneral(datos)
    const total_z = calcularZ(promedioSexto, promedioGeneral, desvEstandarGeneral, muestra_n)

    var mu3AnnosLi = document.getElementById('mu3Annos')
    mu3AnnosLi.innerHTML = `&mu; = ${promedioGeneral} (Promedio de los tres años)`

    var promSextoAnnoLi = document.getElementById('promSextoAnno')
    promSextoAnnoLi.innerHTML = `x&#x0305; = ${promedioSexto} (Promedio de sexto año)`

    var DesvEstandar3AnnosLi = document.getElementById('DesvEstandar3Annos')
    DesvEstandar3AnnosLi.innerHTML = `Desv. Estándar muestral (S) = ${desvEstandarGeneral} (Desviación estándar de los tres años)`

    var totalZHTML = document.getElementById('totalZ')
    totalZHTML.innerHTML = `Z = ${total_z}`

    /* Carga de datos del paso 3 */
    var divisionSignifLi = document.getElementById('divisionSignif')
    divisionSignifLi.textContent = `5% / 100 = ${(5 / 100).toFixed(4)}`

    var restaSignifLi = document.getElementById('restaSignif')
    restaSignifLi.textContent = `1 - 0.0500 = ${(1 - (5 / 100)).toFixed(4)}`

    /* Carga de datos del paso 3 de la parte 2*/
    var divisionSignif2Li = document.getElementById('divisionSignifPart2')
    divisionSignif2Li.textContent = `5% / 100 = ${(5 / 100).toFixed(4)}`

    var restaSignif2Li = document.getElementById('restaSignifPart2')
    restaSignif2Li.textContent = `1 - 0.0500 = ${(1 - (5 / 100)).toFixed(4)}`

    /* Carga de datos del paso 4 */
    var totalZ2HTML = document.getElementById('totalZ2')
    totalZ2HTML.textContent = `(${total_z})`
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

function calcularZ(prMedia, prPromedio, prDesvEstand, prMuestra) {
    let partSuperior = prMedia - prPromedio
    let partInferior = prDesvEstand / Math.sqrt(prMuestra)
    const total = partSuperior / partInferior
    return total.toFixed(2)
}

function CargarSelectPromDatos(prDatos) {
    let promedioGeneral = calcularPromedioGeneral(prDatos)
    let promedioSelect = 0
    let promedioTxt = ''
    switch (selectPromedios.value) {
        case "vCuarto":
            promedioSelect = calcularPromedioCuarto(prDatos)
            promedioTxt = "Promedio de cuarto año"
            break;
        case "vQuinto":
            promedioSelect = calcularPromedioQuinto(prDatos)
            promedioTxt = "Promedio de quinto año"
            break;
        case "vSexto":
            promedioSelect = calcularPromedioSexto(prDatos)
            promedioTxt = "Promedio de sexto año"
            break;
        default:
            break;
    }

    var hipoNulaHTML = document.getElementById('hipoNulaPart2')
    hipoNulaHTML.innerHTML = `Hipótesis nula: &mu; <= ${promedioGeneral} (Promedio de los tres años)`

    var hipoAlteHTML = document.getElementById('hipoAltePart2')
    hipoAlteHTML.innerHTML = `Hipótesis alterna: &mu; > ${promedioGeneral} (Promedio de los tres años)`

    /* Carga de datos del paso 2 */
    const desvEstandarGeneral = calcularDesvEstandarGeneral(prDatos)
    const total_z = calcularZ(promedioSelect, promedioGeneral, desvEstandarGeneral, muestra_n)

    var mu3AnnosLi = document.getElementById('mu3AnnosPart2')
    mu3AnnosLi.innerHTML = `&mu; = ${promedioGeneral} (Promedio de los tres años)`

    var promSelectAnnoLi = document.getElementById('promSelectAnnoPart2')
    promSelectAnnoLi.innerHTML = `x&#x0305; = ${promedioSelect} (${promedioTxt})`

    var DesvEstandar3AnnosLi = document.getElementById('DesvEstandar3AnnosPart2')
    DesvEstandar3AnnosLi.innerHTML = `Desv. Estándar muestral (S) = ${desvEstandarGeneral} (Desviación estándar de los tres años)`

    var totalZHTML = document.getElementById('totalZPart2')
    totalZHTML.innerHTML = `Z = ${total_z}`

    /* Carga de datos del paso 3 de la parte 2*/
    var divisionSignif2Li = document.getElementById('divisionSignifPart2')
    divisionSignif2Li.textContent = `5% / 100 = ${(5 / 100).toFixed(4)}`

    var restaSignif2Li = document.getElementById('restaSignifPart2')
    restaSignif2Li.textContent = `1 - 0.0500 = ${(1 - (5 / 100)).toFixed(4)}`

    /* Carga de datos del paso 4 */
    var totalZ2HTML = document.getElementById('totalZPart2')
    totalZ2HTML.textContent = `Z = ${total_z}`

    /* Respuesta de hipo */
    let respuestaFinal = ""
    switch (selectPromedios.value) {
        case "vCuarto":
            respuestaFinal = `Se acepta H0, debido a que no sobrepasa el 5% establecido con una Z de ${total_z}`
            break;
        case "vQuinto":
            respuestaFinal = `Se acepta H0, debido a que no sobrepasa el 5% establecido con una Z de ${total_z}`
            break;
        case "vSexto":
            respuestaFinal = `Se rechaza H0, debido a que sobrepasa el 5% establecido con una Z de ${total_z}`
            break;
        default:
            break;
    }

    const respuestaFinalHTML = document.getElementById('resultadoPaso4')
    respuestaFinalHTML.textContent = respuestaFinal
}



